import { useState } from 'react';
import './index.css';

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Chameleon GPT</h1>
      <ul className="h-60 overflow-y-auto mb-2 border p-2 bg-white">
        {messages.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
      <input
        className="border p-2 w-full"
        placeholder="Type a message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const value = e.currentTarget.value;
            if (value) {
              setMessages([...messages, value]);
              e.currentTarget.value = '';
            }
          }
        }}
      />
    </div>
  );
}
