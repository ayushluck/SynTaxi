import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from '../lib/db.js';
import { ENV } from '../lib/env.js';
import cors from 'cors';
import { serve } from "inngest/express";
import { inngest, functions } from '../lib/inngest.js';
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from '../routes/chatRoutes.js';
import sessionRoutes from '../routes/sessionRoutes.js';
import executionRoutes from '../routes/executionRoutes.js';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.resolve(__dirname, "../../frontend/dist");
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/execute", executionRoutes);

if (ENV.NODE_ENV === "production") {
    app.use(express.static(frontendDist));
    app.get("/{*splat}", (req, res) => {
        res.sendFile(path.join(frontendDist, "index.html"));
    });
}


const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server is running on port ${ENV.PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();

