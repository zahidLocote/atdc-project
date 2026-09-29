# ATDC Project

Aplicación frontend con React, TypeScript, Vite y Tailwind CSS. Actualmente muestra «Hello world!» como pantalla inicial.

## Requisitos

- Node.js 24 (entorno comprobado: 24.16.0).
- npm (entorno comprobado: 11.13.0).

No requiere backend, base de datos, credenciales ni archivo `.env`.

## Ejecutar en Windows / PowerShell

Desde la carpeta del repositorio:

```powershell
npm.cmd ci
npm.cmd run dev
```

Abre la dirección que indique Vite, normalmente http://localhost:5173. Si el puerto está ocupado, Vite elegirá otro. Detén el servidor con Ctrl+C.

Se usa `npm.cmd` porque PowerShell puede bloquear `npm.ps1` por su política de ejecución. No hace falta cambiar esa política. En otras terminales puedes usar `npm` en lugar de `npm.cmd`.

`npm.cmd ci` instala las versiones de `package-lock.json` y requiere acceso al registro de npm. Si las dependencias ya están instaladas, puedes iniciar directamente con `npm.cmd run dev`.

## Validación y compilación

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

- `lint`: revisa el código con ESLint.
- `build`: comprueba TypeScript y genera la aplicación en `dist/`.
- `preview`: sirve la compilación de `dist/`, normalmente en http://localhost:4173. Ejecuta primero `build`.

No hay una suite de pruebas automatizadas configurada.

## Estructura

- `src/App.tsx`: pantalla principal.
- `src/main.tsx`: punto de entrada de React.
- `src/index.css`: estilos e importación de Tailwind.
- `vite.config.ts`: integración de React y Tailwind con Vite.
- `public/`: archivos estáticos.
