# Portafolio profesional - Carlos Andres Villamil Yusunguaira

Portafolio web profesional de Carlos Andres Villamil Yusunguaira, estudiante de Ingenieria de Sistemas en CORHUILA, enfocado en practica profesional, contrato de aprendizaje o primer rol junior en desarrollo backend/fullstack.

El objetivo del sitio es presentar perfil profesional, proyectos reales, habilidades tecnicas, certificaciones, CV y canales de contacto para hoja de vida, LinkedIn, GitHub y postulaciones laborales.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint
- Prettier

## Proyecto destacado

### RematePOS - Sistema POS distribuido

Aplicacion web para gestion de ventas, productos, inventario, clientes, caja, devoluciones y facturacion simulada tipo DIAN.

Estado actual: demo cloud disponible / despliegue academico.

Enlaces configurados:

- Demo frontend: https://rematepos-frontend.onrender.com
- API Gateway: mostrado como endpoint tecnico, pendiente de respuesta en validacion HTTP.
- Customer Service: mostrado como endpoint tecnico, pendiente de respuesta en validacion HTTP.

Nota: RematePOS se presenta como proyecto academico en evolucion, desplegado para demostracion tecnica. No se afirma que sea un producto comercial terminado.

## CV

El CV publico en espanol se sirve desde:

```text
/cv/CV_Carlos_Andres_Villamil_Yusunguaira_ES.pdf
```

La version en ingles queda preparada como boton pendiente hasta que exista el archivo real:

```text
/cv/CV_Carlos_Andres_Villamil_Yusunguaira_EN.pdf
```

No se deben usar rutas locales del equipo ni URLs de desarrollo local en enlaces publicos.

## Estructura

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
    certifications.ts
    experience.ts
    profile.ts
    projects.ts
    skills.ts
  types.ts
  App.tsx
  main.tsx

public/
  cv/
    CV_Carlos_Andres_Villamil_Yusunguaira_ES.pdf
```

## Contenido editable

- `src/data/profile.ts`: perfil, acciones principales, CV y enlaces de contacto.
- `src/data/projects.ts`: proyectos, demo RematePOS, arquitectura, repositorios pendientes y estados reales.
- `src/data/skills.ts`: habilidades por categoria.
- `src/data/certifications.ts`: certificaciones por entidad.
- `src/data/experience.ts`: linea de aprendizaje y experiencia academica.

## Instalacion local

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Despliegue en Vercel

Configuracion recomendada:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 o superior

Pasos:

1. Subir el repositorio a GitHub.
2. Conectar el repositorio en Vercel.
3. Confirmar framework, comando de build y directorio de salida.
4. Ejecutar deploy.
5. Validar la URL publicada, CV, demo de RematePOS, arquitectura, botones pendientes y responsive.

## Estado actual

- Portafolio construido con React + TypeScript + Vite.
- RematePOS configurado como proyecto principal con demo y servicios cloud.
- CV en espanol servido desde `public/cv`.
- CV en ingles, GitHub, LinkedIn, correo, WhatsApp y repositorios de RematePOS quedan pendientes hasta tener enlaces reales.
- No se incluyen secretos ni rutas locales publicas.

## Autor

Carlos Andres Villamil Yusunguaira.
