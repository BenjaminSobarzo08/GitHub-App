import { Heart, X } from 'lucide-react';

export default function FavoritesList({ favorites, onSelect, onRemove }) {
  if (favorites.length === 0) return null;

  return (
    <section className="mx-auto mt-5 max-w-3xl" aria-label="Usuarios favoritos">
      <h2 className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-slate-400"><Heart className="fill-rose-500 text-rose-500" size={16} />Favoritos</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {favorites.map((favorite) => (
          <div key={favorite.login} className="flex items-center rounded-xl border border-github-border bg-github-panel p-2">
            <button type="button" onClick={() => onSelect(favorite.login)} className="flex min-w-0 flex-1 items-center gap-3 rounded-lg p-1 text-left transition hover:bg-white/5">
              <img src={favorite.avatarUrl} alt="" className="size-9 rounded-full" />
              <span className="min-w-0"><span className="block truncate text-sm font-medium text-slate-200">{favorite.name ?? favorite.login}</span><span className="block truncate text-xs text-slate-500">@{favorite.login}</span></span>
            </button>
            <button type="button" onClick={() => onRemove(favorite.login)} aria-label={`Quitar ${favorite.login} de favoritos`} className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-rose-400"><X size={16} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}
