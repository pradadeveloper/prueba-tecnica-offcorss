# Ecommerce Offcorss Frontend

Este proyecto es el frontend de una aplicación de ecommerce para Offcorss, desarrollado en React. Proporciona una interfaz de usuario intuitiva para que los clientes puedan navegar, buscar y comprar productos. La estructura está diseñada para ser modular y fácil de mantener.

## Estructura del Proyecto

La estructura de carpetas del proyecto frontend está organizada de la siguiente manera:

## Credenciales de usuario del proyecto:
Usuario: usuarioDemo
Contraseña: luluperrito

ESTRUCTURA DE CARPETA DEL FRONT-END
ecommerce-frontend/
│
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (e.g., tablas, botones)
│   ├── pages/              # Páginas de la aplicación (e.g., login, dashboard)
│   ├── services/           # Llamadas a APIs y servicios de frontend
│   ├── context/            # Contextos de React (e.g., autenticación)
│   ├── utils/              # Funciones auxiliares
│   ├── App.tsx             # Componente principal
│   └── index.tsx           # Punto de entrada de la aplicación
│
├── .env                    # Variables de entorno
├── package.json            # Configuración de dependencias
└── README.md               # Documentación del frontend


### Descripción de las Carpetas

- **`public/`**: Carpeta que contiene archivos estáticos como imágenes, archivos HTML y manifestos que se sirven directamente al cliente sin pasar por el proceso de bundling.

- **`src/`**: Carpeta principal del código fuente del frontend.

  - **`components/`**: Contiene componentes reutilizables de la interfaz de usuario, como tablas, botones, formularios, etc. Estos componentes se diseñan para ser usados en diferentes partes de la aplicación.

  - **`pages/`**: Incluye las páginas principales de la aplicación, como `Login`, `Dashboard`, `ProductList`, etc. Cada página puede estar compuesta de varios componentes y representa una ruta específica en la aplicación.

  - **`services/`**: Define servicios y funciones para interactuar con el backend, como llamadas a la API de productos o autenticación. Esto ayuda a centralizar la lógica de acceso a datos.

  - **`context/`**: Define los contextos de React para el manejo de estado global en la aplicación, como la autenticación del usuario. Esto permite que el estado compartido esté disponible para todos los componentes de la aplicación.

  - **`utils/`**: Carpeta para funciones auxiliares o utilidades que pueden ser usadas en múltiples partes de la aplicación, como funciones de formato, validación, etc.

  - **`App.tsx`**: Componente principal de la aplicación, donde se definen las rutas y se integra la lógica general.

  - **`index.tsx`**: Archivo de entrada que renderiza la aplicación React en el DOM.

### Otros Archivos Importantes

- **`.env`**: Este archivo contiene variables de entorno que no deben estar expuestas en el código fuente. Aquí puedes configurar el endpoint de la API del backend, claves de API y otros parámetros de configuración.

- **`package.json`**: Contiene la configuración del proyecto y lista de dependencias necesarias para ejecutar el frontend. También define scripts útiles como el inicio en modo desarrollo y la creación de la versión de producción.

- **`README.md`**: Documentación general del proyecto frontend.

## Dependencias

Las principales dependencias de este proyecto incluyen:

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Axios**: Cliente HTTP para hacer llamadas a la API de backend.
- **React Router**: Para gestionar la navegación entre las diferentes páginas de la aplicación.
- **Context API**: Para manejar el estado global de la aplicación (e.g., autenticación).
- **Sass**: Preprocesador de CSS para gestionar estilos de forma modular y mantenible.
