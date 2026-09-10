import { useState } from 'react';

export default function SearchForm({ onSearch, loading }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const value = username.trim();
    if (value) onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="username">Usuario de GitHub</label>
      <div>
        <input id="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="ej. octocat" />
        <button disabled={loading}>{loading ? 'Buscando…' : 'Buscar'}</button>
      </div>
    </form>
  );
}
