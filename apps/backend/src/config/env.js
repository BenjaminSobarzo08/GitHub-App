import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT ?? 3001),
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:5173',
  githubToken: process.env.GITHUB_TOKEN,
};

if (!env.githubToken) {
  console.warn('GITHUB_TOKEN no está configurado. Las consultas tendrán límites públicos de GitHub.');
}
