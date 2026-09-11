import { Building2, ExternalLink, GitFork, MapPin, Star, Users } from 'lucide-react';

export default function UserProfile({ data }) {
  const { user, repositories } = data;

  return (
    <section className="mt-8">
      <article className="overflow-hidden rounded-2xl border border-github-border bg-github-panel shadow-xl shadow-black/15"><div className="h-20 bg-linear-to-r from-blue-700/60 via-indigo-700/50 to-violet-700/40" /><div className="px-5 pb-6 sm:px-7"><img className="-mt-11 size-24 rounded-full border-4 border-github-panel bg-github-dark shadow-lg" src={user.avatarUrl} alt={`Avatar de ${user.login}`} /><div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><h2 className="text-2xl font-bold">{user.name ?? user.login}</h2><a className="text-slate-400 transition hover:text-blue-400" href={user.profileUrl} target="_blank" rel="noreferrer">@{user.login}</a>{user.bio && <p className="mt-3 max-w-2xl leading-6 text-slate-300">{user.bio}</p>}<div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">{user.location && <span className="inline-flex items-center gap-1.5"><MapPin size={16} />{user.location}</span>}{user.company && <span className="inline-flex items-center gap-1.5"><Building2 size={16} />{user.company}</span>}<span className="inline-flex items-center gap-1.5"><Users size={16} /><strong className="font-semibold text-slate-200">{user.followers}</strong> seguidores · <strong className="font-semibold text-slate-200">{user.following}</strong> siguiendo</span></div></div><a className="inline-flex items-center gap-2 self-start rounded-lg border border-github-border px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-white/5" href={user.profileUrl} target="_blank" rel="noreferrer">Ver perfil <ExternalLink size={15} /></a></div><div className="mt-6 inline-flex rounded-lg border border-github-border bg-github-dark px-4 py-2 text-sm text-slate-400"><strong className="mr-1 text-slate-100">{user.publicRepos}</strong> repositorios públicos</div></div></article>
      <div className="mb-4 mt-9 flex items-center justify-between"><h3 className="text-xl font-bold">Repositorios</h3><span className="text-sm text-slate-500">{repositories.length} encontrados</span></div>
      <div className="grid gap-4 sm:grid-cols-2">
        {repositories.map((repository) => (
          <a className="group flex min-h-40 flex-col rounded-xl border border-github-border bg-github-panel p-5 transition hover:-translate-y-0.5 hover:border-blue-500/70 hover:shadow-lg hover:shadow-blue-950/20" href={repository.url} key={repository.id} target="_blank" rel="noreferrer"><span className="flex items-center justify-between gap-3"><strong className="font-semibold text-blue-400 group-hover:text-blue-300">{repository.name}</strong><ExternalLink className="text-slate-500" size={16} /></span><span className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">{repository.description ?? 'Sin descripción'}</span><small className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-slate-500"><span>{repository.language ?? 'Sin lenguaje'}</span><span className="inline-flex items-center gap-1"><Star size={14} />{repository.stars}</span><span className="inline-flex items-center gap-1"><GitFork size={14} />{repository.forks}</span></small>
          </a>
        ))}
      </div>
    </section>
  );
}
