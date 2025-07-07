import { useState } from 'react';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function GPTTerminal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    const prompt = input;
    setMessages((msgs) => [...msgs, { role: 'user', content: prompt }]);
    setInput('');
    setLoading(true);
    try {
      const res = await axios.post<{ response: string }>('/api/gpt/query', { prompt });
      setMessages((msgs) => [
        ...msgs,
        { role: 'assistant', content: res.data.response },
      ]);
    } catch (error) {
      console.error('Fehler beim Abrufen der GPT-Antwort:', error);
      setMessages((msgs) => [
        ...msgs,
        { role: 'assistant', content: 'Fehler beim Abrufen der GPT-Antwort.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full font-mono">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <div
              className={`inline-block px-3 py-2 rounded ${
                m.role === 'user'
                  ? 'bg-accent text-white'
                  : 'bg-surface-dark text-white'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">GPT is typing...</div>}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void sendMessage(); // ✅ markiert Promise als absichtlich unawaited
        }}
        className="p-4 border-t border-gray-700 flex"
      >
        <input
          className="flex-1 bg-background-dark border border-gray-600 rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit" className="ml-2 px-4 py-1 bg-brand rounded text-white">
          Send
        </button>
      </form>
    </div>
  );
}
