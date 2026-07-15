import { clerkClient, getAuth } from "@clerk/express";
import User from "../models/User.js";
import { upsertStreamUser } from "../lib/stream.js";

const createUserFromClerk = async (clerkId) => {
  const clerkUser = await clerkClient.users.getUser(clerkId);
  const email =
    clerkUser.primaryEmailAddress?.emailAddress ||
    clerkUser.emailAddresses?.[0]?.emailAddress ||
    `${clerkId}@clerk.local`;
  const name =
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
    clerkUser.username ||
    email?.split("@")[0] ||
    "SynTaxi User";
  const profileImage = clerkUser.imageUrl || "";

  const user = await User.findOneAndUpdate(
    { clerkId },
    {
      $setOnInsert: {
        clerkId,
        email,
        name,
        profileImage,
      },
    },
    { new: true, upsert: true, runValidators: true }
  );

  await upsertStreamUser({
    id: clerkId,
    name,
    image: profileImage,
  });

  return user;
};

export const protectRoute = async (req, res, next) => {
  try {
    const auth = getAuth(req);
    const clerkId = auth?.userId;

    if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

    // find user in db by clerk ID
    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await createUserFromClerk(clerkId);
    }

    // attach user to req
    req.user = user;

    next();
  } catch (error) {
    console.error("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
