import { useState } from 'react';
import { Search } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
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
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-github-dark to-github-dark">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:py-20">
        <header className="text-center">
          <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-white text-github-dark shadow-lg shadow-black/30"><FaGithub aria-hidden="true" size={32} /></div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">GitHub User Search</h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-400">Explorá perfiles, estadísticas y repositorios públicos desde un solo lugar.</p>
        </header>
        <section className="mx-auto mt-10 max-w-3xl rounded-2xl border border-github-border bg-github-panel/90 p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7"><SearchForm onSearch={handleSearch} loading={loading} /></section>
        {error && <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">{error}</p>}
        {!result && !error && !loading && <div className="mt-12 text-center text-slate-500"><Search className="mx-auto mb-3" size={26} /><p>Ingresá un nombre de usuario para comenzar.</p></div>}
        {result && <UserProfile data={result} />}
      </div>
    </main>
  );
}
