export default function UserProfile({ data }) {
  const { user, repositories } = data;

  return (
    <section className="results">
      <article className="profile">
        <img src={user.avatarUrl} alt={`Avatar de ${user.login}`} />
        <div>
          <h2>{user.name ?? user.login}</h2>
          <a href={user.profileUrl} target="_blank" rel="noreferrer">@{user.login}</a>
          {user.bio && <p>{user.bio}</p>}
          <p>{user.publicRepos} repositorios · {user.followers} seguidores · {user.following} siguiendo</p>
        </div>
      </article>

      <h3>Repositorios</h3>
      <div className="repositories">
        {repositories.map((repository) => (
          <a className="repository" href={repository.url} key={repository.id} target="_blank" rel="noreferrer">
            <strong>{repository.name}</strong>
            <span>{repository.description ?? 'Sin descripción'}</span>
            <small>{repository.language ?? '—'} · ★ {repository.stars}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
