"use client";

import { WebSocketProvider } from "next-ws/client";
import Chat from "./components/chat";

export default function Page() {
  const host = window.location.host;
  console.log(host);
  return (
    <WebSocketProvider url={`ws://${host}/api/ws`}>
      <div>Chat component</div>
      <Chat />
    </WebSocketProvider>
  );
}
