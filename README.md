# Portafolio profesional - Carlos Andrés Villamil Yusunguaira

Portafolio web profesional de Carlos Andrés Villamil Yusunguaira, estudiante de Ingeniería de Sistemas en CORHUILA, enfocado en práctica profesional, contrato de aprendizaje o primer rol junior en desarrollo backend/fullstack.

El objetivo del sitio es presentar perfil profesional, proyectos reales, habilidades técnicas, certificaciones, CV y canales de contacto para hoja de vida, LinkedIn, GitHub y postulaciones laborales.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint
- Prettier

## Diseño e interacción

- Hero compacto con texto dinámico tipo máquina de escribir implementado con React hooks.
- Botones sociales circulares con estados hover, foco visible y enlaces seguros.
- Fondo oscuro con grid sutil, spotlight y gradientes controlados.
- Proyectos con imagen/mockup, overlay al hover y repositorios agrupados.
- Contacto compacto tipo dock con acciones principales y CV.

## Proyecto destacado

### RematePOS - Sistema POS distribuido

Aplicación web para gestión de ventas, productos, inventario, clientes, caja, devoluciones y facturación simulada tipo DIAN.

Estado actual: demo cloud disponible / despliegue académico.

Enlaces configurados:

- Demo frontend: https://rematepos-frontend.onrender.com
- Código principal: https://github.com/RematePos/RematePos
- Frontend: https://github.com/RematePos/RematePos-Frontend
- Backend / Microservicios: https://github.com/RematePos/RematePos-Backend
- API / Gateway: https://github.com/RematePos/RematePos-api
- Base de datos / Documentación: https://github.com/RematePos/RematePos-bd
- API Gateway: mostrado como endpoint técnico, pendiente de respuesta en validación HTTP.
- Customer Service: mostrado como endpoint técnico, pendiente de respuesta en validación HTTP.

Nota: RematePOS se presenta como proyecto académico en evolución, desplegado para demostración técnica. No se afirma que sea un producto comercial terminado.

## CV

El CV público en español se sirve desde:

```text
/cv/CV_Carlos_Andres_Villamil_Yusunguaira_ES.pdf
```

La versión en inglés queda preparada como botón pendiente hasta que exista el archivo real:

```text
/cv/CV_Carlos_Andres_Villamil_Yusunguaira_EN.pdf
```

No se deben usar rutas locales del equipo ni URLs de desarrollo local en enlaces públicos.

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
  images/
    profile-carlos.png
    projects/
      rematepos-preview.png
```

## Contenido editable

- `src/data/profile.ts`: perfil, acciones principales, CV y enlaces de contacto.
- `src/data/projects.ts`: proyectos, demo RematePOS, arquitectura, repositorios pendientes y estados reales.
- `src/data/skills.ts`: habilidades por categoría.
- `src/data/certifications.ts`: certificaciones por entidad.
- `src/data/experience.ts`: línea de aprendizaje y experiencia académica.

## Instalación local

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

Configuración recomendada:

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
- CV en español servido desde `public/cv`.
- Foto profesional servida desde `public/images`.
- GitHub, LinkedIn, correo y WhatsApp configurados como contacto público.
- CV en inglés queda pendiente hasta tener el archivo real.
- No se incluyen secretos ni rutas locales públicas.

## Enlaces de contacto

- GitHub: https://github.com/pilo77
- LinkedIn: https://www.linkedin.com/in/carlos-andres-villamil-yusunguaira
- Correo: carlosandresvilla123carlos@gmail.com
- WhatsApp: https://wa.me/573229417100

## Autor

Carlos Andrés Villamil Yusunguaira.
