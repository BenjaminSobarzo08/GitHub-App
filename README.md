# GitHub User Search

Aplicación web full stack para buscar perfiles públicos de GitHub. Consultá datos del usuario, explorá sus repositorios y guardá perfiles para volver a verlos más tarde.

## Funcionalidades

- Búsqueda de usuarios de GitHub por nombre de usuario.
- Perfil con avatar, biografía, ubicación, empresa, seguidores y repositorios públicos.
- Repositorios ordenados por última actualización, con lenguaje, estrellas y forks.
- Vista inicial de 6 repositorios y botón **Ver más** para cargar los siguientes.
- Historial de las últimas 6 búsquedas exitosas, persistido en el navegador.
- Lista de favoritos con avatar y nombre, también persistida en el navegador.
- Enlaces directos al perfil y a cada repositorio en GitHub.
- Interfaz responsive construida con React, Vite y Tailwind CSS.

## Tecnologías

- Frontend: React 19, Vite, Tailwind CSS, Lucide React y React Icons.
- Backend: Node.js, Express, Axios, CORS y dotenv.
- API externa: GitHub REST API.

## Requisitos

- Node.js 20 o superior.
- Un token personal de GitHub. Se recomienda un token fine-grained con acceso de solo lectura a contenido público.

## Instalación y ejecución

1. Instalá las dependencias desde la raíz:

   ```bash
   npm install
   ```

2. Creá el archivo `apps/backend/.env` a partir del ejemplo:

   ```powershell
   Copy-Item apps/backend/.env.example apps/backend/.env
   ```

3. Editá `apps/backend/.env` y configurá tu token:

   ```env
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   GITHUB_TOKEN=tu_token_privado_de_github
   ```

4. Iniciá frontend y backend:

   ```bash
   npm run dev
   ```

5. Abrí `http://localhost:5173` en el navegador.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia frontend y backend en modo desarrollo. |
| `npm run dev:client` | Inicia sólo el frontend con Vite. |
| `npm run dev:server` | Inicia sólo la API Express. |
| `npm run build` | Genera el build de producción del frontend. |
| `npm run start` | Inicia el backend en modo producción. |

## API local

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Verifica que la API esté disponible. |
| `GET` | `/api/users/:username` | Devuelve el perfil y hasta 100 repositorios públicos del usuario. |

Ejemplo:

```text
GET http://localhost:3001/api/users/octocat
```

## Estructura del proyecto

```text
apps/
├── backend/
│   ├── src/
│   │   ├── config/       # Variables de entorno
│   │   ├── routes/       # Rutas de la API
│   │   └── services/     # Cliente Axios para GitHub
│   └── .env.example
└── frontend/
    └── src/
        ├── components/   # Búsqueda, historial, favoritos y perfil
        ├── services/     # Cliente de la API local
        └── styles/       # Estilos globales con Tailwind
```

## Seguridad

`GITHUB_TOKEN` se utiliza sólo en el backend para evitar exponerlo al navegador y aprovechar límites autenticados de la API de GitHub. Nunca lo agregues a variables `VITE_*`, al código del frontend ni al repositorio.

Los historiales y favoritos se guardan únicamente en el `localStorage` del navegador del usuario.
