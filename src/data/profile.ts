import type { ActionLink } from '../types'

export const profile = {
  name: 'Carlos Andrés Villamil Yusunguaira',
  role: 'Desarrollador Backend / Fullstack Junior',
  location: 'Neiva, Huila, Colombia',
  summary:
    'Estudiante de Ingeniería de Sistemas enfocado en el desarrollo de soluciones web, APIs REST, bases de datos y arquitectura backend. He trabajado en proyectos académicos y personales aplicando Java, Spring Boot, React, SQL, NoSQL, Git y Docker, con interés en construir software limpio, escalable y útil para entornos reales.',
  about:
    'Soy estudiante de Ingeniería de Sistemas, con interés en el desarrollo de software, backend, bases de datos y aplicaciones web. He trabajado en proyectos académicos y personales aplicando Java, Spring Boot, JavaScript, React, SQL, NoSQL, Git y Docker. Me caracterizo por la responsabilidad, la facilidad de aprendizaje y la disposición para asumir nuevos retos tecnológicos.',
}

export const primaryActions: ActionLink[] = [
  { label: 'Ver proyectos', href: '#proyectos' },
  {
    label: 'CV Español',
    href: '/cv/CV_Carlos_Andres_Villamil_Yusunguaira_ES.pdf',
    newTab: true,
  },
  {
    label: 'CV English próximamente',
    status: 'pending',
    note: 'Pendiente de agregar la versión en inglés del CV',
  },
  { label: 'Contactar', href: '#contacto' },
]

export const socialLinks: ActionLink[] = [
  {
    label: 'GitHub',
    status: 'pending',
    note: 'Pendiente de agregar URL pública',
  },
  {
    label: 'LinkedIn',
    status: 'pending',
    note: 'Pendiente de agregar URL pública',
  },
]

export const contactLinks: ActionLink[] = [
  {
    label: 'GitHub',
    status: 'pending',
    note: 'Pendiente de agregar URL pública',
  },
  {
    label: 'LinkedIn',
    status: 'pending',
    note: 'Pendiente de agregar URL pública',
  },
  {
    label: 'Correo',
    status: 'pending',
    note: 'Pendiente de definir correo profesional',
  },
  {
    label: 'WhatsApp',
    status: 'pending',
    note: 'Pendiente de definir enlace público con formato internacional',
  },
  {
    label: 'CV Español',
    href: '/cv/CV_Carlos_Andres_Villamil_Yusunguaira_ES.pdf',
    newTab: true,
  },
  {
    label: 'CV Inglés',
    status: 'pending',
    note: 'CV English próximamente',
  },
]
