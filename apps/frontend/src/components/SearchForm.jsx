import { useState } from 'react';
import { LoaderCircle, Search } from 'lucide-react';

export default function SearchForm({ onSearch, loading }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const value = username.trim();
    if (value) onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-200">Usuario de GitHub</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1"><Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-github-muted" size={19} aria-hidden="true" /><input id="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="ej. octocat" autoComplete="off" className="w-full rounded-xl border border-github-border bg-github-dark py-3 pl-11 pr-4 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15" /></div>
        <button disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70">{loading ? <LoaderCircle className="animate-spin" size={18} /> : <Search size={18} />}{loading ? 'Buscando…' : 'Buscar'}</button>
      </div>
    </form>
  );
}
