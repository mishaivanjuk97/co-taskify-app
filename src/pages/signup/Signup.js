import { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email:', email, 'password:', password, 'displayName:', displayName, 'thumbnail:', thumbnail);
  }

  const handleFileChange = (e) => {
    setThumbnail(null);

    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setThumbnailError('Please select a file');
      return;
    }

    if (selectedFile.size > 150000) {
      setThumbnailError('Please select a file of size less than 150kb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selectedFile);
    console.log('thumbnail updated')
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>

      <label>
        <span>email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>profile thumbnail:</span>
        <input
          required
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
        {thumbnailError && <p className="error">{thumbnailError}</p>}
      </label>

      <button className="btn">Sign up</button>
    </form>
  )
}
