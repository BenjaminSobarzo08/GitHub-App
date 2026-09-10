import { env } from '../config/env.js';

const GITHUB_API_URL = 'https://api.github.com';

async function githubFetch(path) {
  const response = await fetch(`${GITHUB_API_URL}${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(env.githubToken ? { Authorization: `Bearer ${env.githubToken}` } : {}),
    },
  });

  if (!response.ok) {
    const error = new Error('GitHub no pudo completar la consulta.');
    error.status = response.status;
    error.details = await response.json().catch(() => null);
    throw error;
  }

  return response.json();
}

export async function getUserWithRepositories(username) {
  const safeUsername = encodeURIComponent(username);
  const [user, repositories] = await Promise.all([
    githubFetch(`/users/${safeUsername}`),
    githubFetch(`/users/${safeUsername}/repos?sort=updated&per_page=100`),
  ]);

  return {
    user: {
      login: user.login,
      name: user.name,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      location: user.location,
      company: user.company,
      blog: user.blog,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      profileUrl: user.html_url,
    },
    repositories: repositories.map((repository) => ({
      id: repository.id,
      name: repository.name,
      description: repository.description,
      language: repository.language,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      updatedAt: repository.updated_at,
      url: repository.html_url,
    })),
  };
}
