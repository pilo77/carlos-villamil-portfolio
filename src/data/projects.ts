import type { Project, ServiceLink } from '../types'

export const rematePosServices: ServiceLink[] = [
  {
    name: 'Frontend público',
    url: 'https://rematepos-frontend.onrender.com',
    description: 'Interfaz web desplegada para demostración técnica.',
    status: 'Demo cloud',
    linkStatus: 'available',
  },
  {
    name: 'API Gateway',
    url: 'https://rematepos-api-gateway.onrender.com',
    description: 'Entrada centralizada para consumo de servicios backend.',
    status: 'Pendiente de respuesta',
    linkStatus: 'pending',
  },
  {
    name: 'Customer Service',
    url: 'https://tematepos-customer.onrender.com',
    description: 'Servicio de clientes expuesto como parte del ecosistema académico.',
    status: 'Pendiente de respuesta',
    linkStatus: 'pending',
  },
]

export const projects: Project[] = [
  {
    name: 'RematePOS – Sistema POS distribuido',
    featured: true,
    status: 'Demo cloud disponible',
    mockupLabel: 'POS',
    description:
      'Aplicación web para gestión de ventas, productos, inventario, clientes, caja, devoluciones y facturación simulada tipo DIAN. Proyecto académico desarrollado con enfoque en arquitectura por servicios, APIs REST, seguridad, bases de datos relacionales/no relacionales y despliegue cloud.',
    problem:
      'Pequeños comercios suelen manejar ventas, inventario, caja y facturación con procesos manuales o herramientas poco integradas.',
    role: 'Backend, arquitectura, seguridad, documentación técnica, Git Flow, organización de ramas y despliegue cloud académico.',
    learning:
      'Diseño de APIs REST, separación de responsabilidades, integración frontend-backend, seguridad con JWT, bases de datos SQL/NoSQL y despliegue en Render.',
    technologies: [
      'React',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'MongoDB Atlas',
      'Docker',
      'JWT',
      'API Gateway',
      'Render',
      'GitHub',
    ],
    links: [
      {
        label: 'Ver demo',
        href: 'https://rematepos-frontend.onrender.com',
        newTab: true,
      },
      { label: 'Ver arquitectura', href: '#arquitectura-rematepos' },
      {
        label: 'Ver código',
        href: 'https://github.com/RematePos/RematePos',
        newTab: true,
      },
      {
        label: 'Documentación',
        href: 'https://github.com/RematePos/RematePos-bd',
        newTab: true,
      },
    ],
    repoLinks: [
      {
        label: 'Frontend',
        status: 'available',
        url: 'https://github.com/RematePos/RematePos-Frontend',
      },
      {
        label: 'Backend / Microservicios',
        status: 'available',
        url: 'https://github.com/RematePos/RematePos-Backend',
      },
      {
        label: 'API Gateway',
        status: 'available',
        url: 'https://github.com/RematePos/RematePos-api',
      },
      {
        label: 'Base de datos / Documentación',
        status: 'available',
        url: 'https://github.com/RematePos/RematePos-bd',
      },
    ],
  },
  {
    name: 'Clasificación de imágenes con IA',
    status: 'Demo académica / en desarrollo',
    mockupLabel: 'AI',
    description:
      'Aplicación académica para clasificación de imágenes usando modelos de deep learning, Streamlit y Python.',
    problem:
      'Explorar un flujo práctico de entrenamiento, validación y explicación de modelos aplicados a imágenes.',
    role: 'Entrenamiento, validación, pruebas funcionales y explicación técnica del comportamiento del modelo.',
    learning:
      'Preparación de datos, evaluación de métricas, uso de modelos preentrenados y presentación de resultados con una interfaz simple.',
    technologies: ['Python', 'PyTorch', 'Streamlit', 'EfficientNetB0', 'Pandas', 'NumPy'],
    links: [
      {
        label: 'Repositorio pendiente',
        status: 'pending',
        note: 'Agregar URL cuando el repositorio esté listo',
      },
    ],
  },
  {
    name: 'Portafolio profesional',
    status: 'Listo para despliegue',
    mockupLabel: 'WEB',
    description:
      'Sitio web personal para centralizar perfil profesional, proyectos, certificaciones, habilidades y enlaces de contacto.',
    problem:
      'Presentar evidencia técnica clara para hoja de vida, LinkedIn, GitHub y postulaciones a práctica profesional o rol junior.',
    role: 'Diseño, desarrollo frontend, estructura de contenido y preparación para despliegue.',
    learning:
      'Componentización con React, tipado con TypeScript, estilos con Tailwind, animaciones suaves y despliegue estático con Vercel.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    links: [
      {
        label: 'Repositorio pendiente',
        status: 'pending',
        note: 'Agregar URL cuando se conecte el remoto de GitHub',
      },
    ],
  },
]
