import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const handleLinkSubmit = async () => {
    try {
      console.log(url);
      const res = await fetch('http://localhost:5000/link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
        }),
      });
      if (res.ok) {
        console.log(await res.json());
      }
    } catch (error) {}
  };
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <span className="font-bold text-2xl">Select File</span>
        <div className="flex justify-between my-2">
          <label className="font-bold" htmlFor="fileInput">
            Use FIle
          </label>
          <input name="fileInput" type="file" accept="audio/*" />
          <button
            className="w-1/4 mx-auto bg-blue-500 rounded-2xl p-3 text-white
              hover:bg-blue-400  active:bg-teal-500  disabled:bg-blue-200"
            type="button"
          >
            Upload
          </button>
        </div>
        <div>
          <label className="font-bold" htmlFor="linkInput">
            URL
          </label>
          <TextField
            id="standard-basic"
            label="Youtube url"
            variant="standard"
            placeholder={'Put your url here'}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button variant="text" onClick={handleLinkSubmit}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
