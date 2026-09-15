import { Clock3, Trash2, X } from 'lucide-react';

export default function SearchHistory({ searches, onSelect, onRemove, onClear }) {
  if (searches.length === 0) return null;

  return (
    <section className="mx-auto mt-5 max-w-3xl" aria-label="Búsquedas recientes">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="inline-flex items-center gap-2 text-sm font-medium text-slate-400"><Clock3 size={16} />Búsquedas recientes</h2>
        <button type="button" onClick={onClear} className="inline-flex items-center gap-1.5 text-xs text-slate-500 transition hover:text-slate-200"><Trash2 size={14} />Limpiar</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {searches.map((username) => (
          <span key={username} className="inline-flex overflow-hidden rounded-lg border border-github-border bg-github-panel text-sm">
            <button type="button" onClick={() => onSelect(username)} className="px-3 py-1.5 text-slate-300 transition hover:bg-white/5 hover:text-blue-300">@{username}</button>
            <button type="button" onClick={() => onRemove(username)} aria-label={`Quitar ${username} del historial`} className="border-l border-github-border px-2 text-slate-500 transition hover:bg-white/5 hover:text-slate-200"><X size={14} /></button>
          </span>
        ))}
      </div>
    </section>
  );
}
