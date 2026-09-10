import { useState } from 'react';
import SearchForm from './components/SearchForm.jsx';
import UserProfile from './components/UserProfile.jsx';
import { findUser } from './services/githubApi.js';

export default function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearch(username) {
    setLoading(true);
    setError('');
    try {
      setResult(await findUser(username));
    } catch (requestError) {
      setResult(null);
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <header><h1>GitHub User Search</h1><p>Encontrá perfiles y repositorios públicos.</p></header>
      <SearchForm onSearch={handleSearch} loading={loading} />
      {error && <p className="error" role="alert">{error}</p>}
      {result && <UserProfile data={result} />}
    </main>
  );
}
