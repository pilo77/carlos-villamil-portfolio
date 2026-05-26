import type { Project } from '../types'
import { rematePos } from './rematepos'

export const projects: Project[] = [
  {
    name: rematePos.title,
    featured: true,
    status: rematePos.status,
    mockupLabel: rematePos.mockupLabel,
    imageSrc: rematePos.imageSrc,
    imageAlt: rematePos.imageAlt,
    summary: rematePos.summary,
    description: rematePos.description,
    problem: rematePos.problem,
    role: rematePos.role,
    learning: rematePos.learning,
    technologies: rematePos.technologies,
    links: rematePos.mainLinks,
    repoLinks: rematePos.repositories,
  },
  {
    name: 'Clasificación de imágenes con IA',
    status: 'Demo académica / en desarrollo',
    mockupLabel: 'AI',
    summary:
      'Demo académica de clasificación de imágenes con Python, deep learning y una interfaz de presentación simple.',
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
    summary:
      'Sitio personal para presentar perfil profesional, proyectos, habilidades, CV y enlaces de contacto.',
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
