# GitHub User Search

Aplicación full stack para buscar usuarios de GitHub y mostrar su perfil y repositorios.

## Requisitos

- Node.js 20 o superior
- Un token personal de GitHub (recomendado: fine-grained, con permiso de solo lectura de metadatos públicos)

## Puesta en marcha

1. Copiá `apps/backend/.env.example` como `apps/backend/.env` y completá `GITHUB_TOKEN`.
2. Ejecutá `npm install` en la raíz.
3. Ejecutá `npm run dev`.
4. Abrí la URL que muestre Vite (normalmente `http://localhost:5173`).

El token se usa exclusivamente en el backend. No debe incluirse en variables `VITE_*` ni enviarse al frontend.

## Estructura

```text
apps/
  frontend/  # React + Vite
  backend/   # API Express que consulta GitHub
```
