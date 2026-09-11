import axios from 'axios';
import { env } from '../config/env.js';

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10_000,
  headers: {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(env.githubToken ? { Authorization: `Bearer ${env.githubToken}` } : {}),
  },
});

async function githubFetch(path) {
  try {
    const response = await githubApi.get(path);
    return response.data;
  } catch (axiosError) {
    const error = new Error('GitHub no pudo completar la consulta.');
    error.status = axiosError.response?.status;
    error.details = axiosError.response?.data;
    throw error;
  }
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
