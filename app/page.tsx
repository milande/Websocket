'use client';

import { WebSocketProvider } from 'next-ws/client';
import Chat from './components/chat';

export default function Page() {
  return (
    <WebSocketProvider url="ws://localhost:3000/api/ws">
      <div>Chat component</div>
      <Chat />
    </WebSocketProvider>
  );
}
