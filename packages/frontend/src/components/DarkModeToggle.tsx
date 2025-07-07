import { Dispatch, SetStateAction } from 'react';

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function DarkModeToggle({ darkMode, setDarkMode }: Props) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded border border-gray-600"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}