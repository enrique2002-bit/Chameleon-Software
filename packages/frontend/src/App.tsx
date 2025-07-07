import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Chat from './routes/chat';
import Login from './routes/login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Navigate to="/chat" />} />
        <Route path="chat" element={<Chat />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
