import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from '@tanstack/react-router';

function CreateRoomPage() {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link }),
      });

      if (!response.ok) {
        throw new Error('Invalid link or server error');
      }

      const data = await response.json();
      // Suppose the backend returns { roomId: "abc123" }
      navigate({ to: `/rooms/${data.roomId}` });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="p-5">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Paste your video link here"
          className="border p-2 w-full"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Make a Room
        </button>
      </form>
    </div>
  </>
  );
}

export default CreateRoomPage;