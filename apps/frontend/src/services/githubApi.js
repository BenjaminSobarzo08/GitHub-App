export async function findUser(username) {
  const response = await fetch(`/api/users/${encodeURIComponent(username)}`);
  const data = await response.json();

  if (!response.ok) throw new Error(data.message ?? 'Ocurrió un error inesperado.');
  return data;
}
