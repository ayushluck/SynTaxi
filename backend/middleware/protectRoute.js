import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
    try {
        const auth = typeof req.auth === "function" ? req.auth() : req.auth;
        const clerkId = auth?.userId;

        if (!clerkId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const user = await User.findOne({ clerkId });
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};