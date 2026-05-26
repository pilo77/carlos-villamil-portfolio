import type { ActionLink, RepositoryLink } from '../types'

export interface RematePosArchitectureBlock {
  title: string
  description: string
  state: string
  href?: string
  ctaLabel?: string
}

export interface RematePosTechnicalLink {
  label: string
  url: string
  state: string
  note?: string
}

export interface RematePosTechnicalGroup {
  title: string
  items: RematePosTechnicalLink[]
}

const demoUrl = 'https://rematepos-frontend.onrender.com'
const apiGatewayUrl = 'https://rematepos-api-gateway.onrender.com'
const configServerUrl = 'https://rematepos-config-server.onrender.com'
const discoveryServerUrl = 'https://rematepos-discovery-server.onrender.com'
const authServiceUrl = 'https://rematepos-auth.onrender.com'
const productServiceUrl = 'https://rematepos-product.onrender.com'
const purchaseServiceUrl = 'https://rematepos-purchase.onrender.com'
const invoiceServiceUrl = 'https://rematepos-invoice.onrender.com'
const analyticsServiceUrl = 'https://rematepos-analytics.onrender.com'
const customerServiceUrl = 'https://tematepos-customer.onrender.com'

const frontendRepoUrl = 'https://github.com/RematePos/RematePos-Frontend'
const backendRepoUrl = 'https://github.com/RematePos/RematePos-Backend'
const apiRepoUrl = 'https://github.com/RematePos/RematePos-api'
const databaseRepoUrl = 'https://github.com/RematePos/RematePos-bd'
const generalRepoUrl = 'https://github.com/RematePos/RematePos'

export const rematePos = {
  title: 'RematePOS – Sistema POS distribuido',
  status: 'Demo pública y arquitectura cloud disponible',
  mockupLabel: 'POS',
  imageSrc: '/images/projects/rematepos-preview.png',
  imageAlt: 'Vista de inicio de sesión de RematePOS desplegado en Render',
  summary:
    'Aplicación web para gestión de ventas, productos, inventario, clientes, caja, devoluciones y facturación simulada tipo DIAN.',
  description:
    'Aplicación web para gestión de ventas, productos, inventario, clientes, caja, devoluciones y facturación simulada tipo DIAN. Proyecto académico desarrollado con arquitectura por servicios, APIs REST, seguridad JWT, bases de datos SQL/NoSQL y despliegue cloud en Render.',
  problem:
    'Pequeños comercios suelen manejar ventas, inventario, caja y facturación con procesos manuales o herramientas poco integradas.',
  role:
    'Backend, arquitectura, seguridad, documentación técnica, Git Flow, organización de ramas y despliegue cloud académico.',
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
  mainLinks: [
    { label: 'Ver demo', href: demoUrl, newTab: true },
    { label: 'Frontend', href: frontendRepoUrl, newTab: true },
    { label: 'Backend', href: backendRepoUrl, newTab: true },
    { label: 'API Gateway', href: apiRepoUrl, newTab: true },
    { label: 'BD / Docs', href: databaseRepoUrl, newTab: true },
  ] satisfies ActionLink[],
  repositories: [
    { label: 'Frontend', status: 'available', url: frontendRepoUrl },
    { label: 'Backend', status: 'available', url: backendRepoUrl },
    { label: 'API Gateway', status: 'available', url: apiRepoUrl },
    { label: 'Base de datos / Docs', status: 'available', url: databaseRepoUrl },
    { label: 'Repositorio general', status: 'available', url: generalRepoUrl },
  ] satisfies RepositoryLink[],
  deployedServices: [
    {
      label: 'API Gateway',
      url: apiGatewayUrl,
      state: 'Servicio desplegado',
      note: 'Entrada central para los servicios expuestos.',
    },
    {
      label: 'Config Server',
      url: configServerUrl,
      state: 'Servicio desplegado',
      note: 'Puede tardar en responder si Render estaba inactivo.',
    },
    {
      label: 'Discovery Server',
      url: discoveryServerUrl,
      state: 'Servicio desplegado',
      note: 'Registro y descubrimiento de servicios.',
    },
    {
      label: 'Auth Service',
      url: authServiceUrl,
      state: 'Servicio desplegado',
    },
    {
      label: 'Product Service',
      url: productServiceUrl,
      state: 'Servicio desplegado',
    },
    {
      label: 'Purchase Service',
      url: purchaseServiceUrl,
      state: 'Servicio desplegado',
    },
    {
      label: 'Invoice Service',
      url: invoiceServiceUrl,
      state: 'Servicio desplegado',
    },
    {
      label: 'Analytics Service',
      url: analyticsServiceUrl,
      state: 'Render on-demand',
      note: 'Puede tardar en iniciar si estaba dormido.',
    },
    {
      label: 'Customer Service',
      url: customerServiceUrl,
      state: 'Render on-demand',
      note: 'Puede tardar en iniciar si estaba dormido.',
    },
  ] satisfies RematePosTechnicalLink[],
  healthChecks: [
    {
      label: 'API Gateway Health',
      url: 'https://rematepos-api-gateway.onrender.com/actuator/health',
      state: 'Health disponible',
    },
    {
      label: 'Config Server Health',
      url: 'https://rematepos-config-server.onrender.com/actuator/health',
      state: 'Health disponible',
    },
    {
      label: 'Analytics Health',
      url: 'https://rematepos-analytics.onrender.com/api/v1/analytics/health',
      state: 'Health disponible',
    },
    {
      label: 'Customer Health',
      url: 'https://tematepos-customer.onrender.com/actuator/health',
      state: 'Health disponible',
    },
  ] satisfies RematePosTechnicalLink[],
  gatewayEndpoints: [
    { label: 'Auth', url: 'https://rematepos-api-gateway.onrender.com/api/v1/auth', state: 'Endpoint técnico' },
    {
      label: 'Products',
      url: 'https://rematepos-api-gateway.onrender.com/api/v1/products',
      state: 'Endpoint técnico',
    },
    {
      label: 'Categories',
      url: 'https://rematepos-api-gateway.onrender.com/api/v1/categories',
      state: 'Endpoint técnico',
    },
    {
      label: 'Purchases',
      url: 'https://rematepos-api-gateway.onrender.com/api/v1/purchases',
      state: 'Endpoint técnico',
    },
    {
      label: 'Invoices',
      url: 'https://rematepos-api-gateway.onrender.com/api/v1/invoices',
      state: 'Endpoint técnico',
    },
    {
      label: 'Analytics',
      url: 'https://rematepos-api-gateway.onrender.com/api/v1/analytics',
      state: 'Endpoint técnico',
    },
    {
      label: 'Customers',
      url: 'https://rematepos-api-gateway.onrender.com/api/v1/customers',
      state: 'Endpoint técnico',
    },
  ] satisfies RematePosTechnicalLink[],
  architectureBlocks: [
    {
      title: 'Frontend React',
      description: 'Interfaz web pública desplegada para demostración técnica.',
      state: 'Demo activa',
      href: demoUrl,
      ctaLabel: 'Ver demo',
    },
    {
      title: 'API Gateway',
      description: 'Entrada centralizada para comunicación entre frontend y backend.',
      state: 'Gateway listo',
      href: apiRepoUrl,
      ctaLabel: 'Ver repositorio API',
    },
    {
      title: 'Microservicios Spring Boot',
      description: 'Servicios backend para autenticación, productos, compras, facturación, clientes y analítica.',
      state: 'Backend desplegado',
      href: backendRepoUrl,
      ctaLabel: 'Ver backend',
    },
    {
      title: 'Configuración y descubrimiento',
      description: 'Config Server y Discovery Server para soporte del ecosistema distribuido.',
      state: 'Arquitectura de soporte',
      href: '#detalles-rematepos',
      ctaLabel: 'Ver arquitectura',
    },
    {
      title: 'Datos y documentación',
      description: 'Persistencia SQL/NoSQL, scripts y documentación técnica del sistema.',
      state: 'Docs disponibles',
      href: databaseRepoUrl,
      ctaLabel: 'Ver BD / Docs',
    },
  ] satisfies RematePosArchitectureBlock[],
  technicalGroups: [
    {
      title: 'Servicios desplegados',
      items: [
        {
          label: 'API Gateway',
          url: apiGatewayUrl,
          state: 'Servicio desplegado',
          note: 'Entrada central para los servicios expuestos.',
        },
        {
          label: 'Config Server',
          url: configServerUrl,
          state: 'Servicio desplegado',
          note: 'Puede tardar en responder si Render estaba inactivo.',
        },
        {
          label: 'Discovery Server',
          url: discoveryServerUrl,
          state: 'Servicio desplegado',
        },
        { label: 'Auth Service', url: authServiceUrl, state: 'Servicio desplegado' },
        { label: 'Product Service', url: productServiceUrl, state: 'Servicio desplegado' },
        { label: 'Purchase Service', url: purchaseServiceUrl, state: 'Servicio desplegado' },
        { label: 'Invoice Service', url: invoiceServiceUrl, state: 'Servicio desplegado' },
        {
          label: 'Analytics Service',
          url: analyticsServiceUrl,
          state: 'Despliegue bajo demanda',
          note: 'En Render puede tardar en iniciar si estaba dormido.',
        },
        {
          label: 'Customer Service',
          url: customerServiceUrl,
          state: 'Despliegue bajo demanda',
          note: 'En Render puede tardar en iniciar si estaba dormido.',
        },
      ],
    },
    {
      title: 'Health checks',
      items: [
        {
          label: 'API Gateway Health',
          url: 'https://rematepos-api-gateway.onrender.com/actuator/health',
          state: 'Health disponible',
        },
        {
          label: 'Config Server Health',
          url: 'https://rematepos-config-server.onrender.com/actuator/health',
          state: 'Health disponible',
        },
        {
          label: 'Analytics Health',
          url: 'https://rematepos-analytics.onrender.com/api/v1/analytics/health',
          state: 'Health disponible',
        },
        {
          label: 'Customer Health',
          url: 'https://tematepos-customer.onrender.com/actuator/health',
          state: 'Health disponible',
        },
      ],
    },
    {
      title: 'Endpoints vía API Gateway',
      items: [
        { label: 'Auth', url: 'https://rematepos-api-gateway.onrender.com/api/v1/auth', state: 'Endpoint técnico' },
        {
          label: 'Products',
          url: 'https://rematepos-api-gateway.onrender.com/api/v1/products',
          state: 'Endpoint técnico',
        },
        {
          label: 'Categories',
          url: 'https://rematepos-api-gateway.onrender.com/api/v1/categories',
          state: 'Endpoint técnico',
        },
        {
          label: 'Purchases',
          url: 'https://rematepos-api-gateway.onrender.com/api/v1/purchases',
          state: 'Endpoint técnico',
        },
        {
          label: 'Invoices',
          url: 'https://rematepos-api-gateway.onrender.com/api/v1/invoices',
          state: 'Endpoint técnico',
        },
        {
          label: 'Analytics',
          url: 'https://rematepos-api-gateway.onrender.com/api/v1/analytics',
          state: 'Endpoint técnico',
        },
        {
          label: 'Customers',
          url: 'https://rematepos-api-gateway.onrender.com/api/v1/customers',
          state: 'Endpoint técnico',
        },
      ],
    },
  ] satisfies RematePosTechnicalGroup[],
  note:
    'Proyecto académico en evolución, desplegado para demostración técnica. Algunos servicios en Render pueden tardar en responder si estaban inactivos.',
}
