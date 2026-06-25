import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    try {
        const auth = typeof req.auth === "function" ? req.auth() : req.auth;

        console.log("AUTH:", auth); // <-- Add this

        const clerkId = auth?.userId;

        console.log("CLERK ID:", clerkId); // <-- Add this

        if (!clerkId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const user = await User.findOne({ clerkId });

        console.log("USER:", user); // <-- Add this

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};