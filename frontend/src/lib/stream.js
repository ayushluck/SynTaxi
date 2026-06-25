import { StreamVideoClient } from "@stream-io/video-react-sdk";

let streamClient = null;

export async function initializeStreamClient(user, token) {
  const apiKey = import.meta.env.VITE_STREAM_API_KEY;

  if (!apiKey) {
    throw new Error("VITE_STREAM_API_KEY is required");
  }

  if (streamClient) {
    return streamClient;
  }

  streamClient = new StreamVideoClient({
    apiKey,
    user,
    token,
  });

  return streamClient;
}

export async function disconnectStreamClient() {
  if (!streamClient) {
    return;
  }

  await streamClient.disconnectUser();
  streamClient = null;
}
