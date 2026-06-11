import {StreamChat} from "stream-chat";
import {ENV} from "./env.js";

const apikey = ENV.STREAM_API_KEY;
const apisecret = ENV.STREAM_API_SECRET;

if (!apikey || !apisecret) {
    console.error("Stream API key and secret are required");
    process.exit(1);
}

export const chatClient = new StreamChat(apikey, apisecret);

export const upsertStreamUser = async (userData) => {
    try{
        await chatClient.upsertUser(userData);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user:", error);
        process.exit(1);
    }
}

export const deleteStreamUser = async (userId) => {
    try{
        await chatClient.deleteUser(userId);
        console.log(`Deleted Stream user with ID: ${userId}`);
    } catch (error) {
        console.error("Error deleting Stream user:", error);
        process.exit(1);
    }
}