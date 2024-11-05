Prueba: Juan Felipe Prada Suárez
Proyecto: Prueba técnica Offcorss Coordinador de Plataformas E-Commerce.

Descripción General

Este proyecto consiste en el desarrollo de una aplicación de ecommerce dividida en dos partes: un backend y un frontend, construidos para gestionar productos, autenticación de usuarios y proporcionar una experiencia de revisión de productos y poderlos exportar a CSV, también podemos registrarnos, logearnos y poder ingresar al Dashboard de administración de estas funcionalidades.

Backend: Implementado en Node.js, el backend incluye funcionalidades de gestión de productos y usuarios, utilizando GraphQL para consultas avanzadas. La arquitectura modular facilita la escalabilidad y el mantenimiento.

Frontend: Desarrollado en React, el frontend ofrece una interfaz de usuario intuitiva, donde los clientes pueden navegar y ver los productos, todo con la línea gráfica de Offcorss. La estructura del proyecto permite la reutilización de componentes y es fácil de mantener.

Estructura del Proyecto
Backend: La estructura incluye configuraciones, controladores, modelos, rutas y servicios, así como esquemas de GraphQL para consultas eficientes y centralización de lógica de negocio.

Frontend: Organizado en componentes reutilizables, páginas, servicios y contextos para gestión de estado, brindando una experiencia de usuario fluida y modular.

Credenciales de Prueba

Usuario: usuarioDemo

Contraseña: luluperrito

Agradezco a Offcorss la oportunidad de desarrollar esta prueba técnica, la cual me permitió demostrar mis habilidades en el diseño y desarrollo de aplicaciones de ecommerce. Estoy entusiasmado por la posibilidad de contribuir al equipo de Offcorss y aportar valor a su plataforma de comercio electrónico.

Gracias por su tiempo y consideración.

# Ecommerce Backend

Este proyecto es el backend de una aplicación de ecommerce, que proporciona servicios como gestión de productos, autenticación de usuarios y consultas mediante GraphQL. Este backend está construido en Node.js y sigue una estructura modular para facilitar el mantenimiento y la escalabilidad.

## Estructura del Proyecto

La estructura de carpetas del proyecto está organizada de la siguiente manera:

ecommerce-backend/
│
├── src/
│   ├── config/             # Configuración de la base de datos y variables de entorno
│   ├── controllers/        # Controladores de las rutas
│   ├── models/             # Modelos de la base de datos
│   ├── routes/             # Definición de las rutas de la API
│   ├── services/           # Servicios para manejo de la lógica de negocio
│   ├── graphql/            # Definición de esquemas y resolvers de GraphQL
│   ├── utils/              # Utilidades y helpers
│   └── index.js            # Archivo principal de inicio del servidor
│
├── .env                    # Variables de entorno
├── package.json            # Configuración de dependencias
└── README.md               # Documentación del backend



### Descripción de las Carpetas

- **`src/`**: Carpeta principal que contiene todo el código del backend.

  - **`config/`**: En esta carpeta se almacena la configuración de la base de datos y otros ajustes importantes que pueden depender del entorno. El archivo de configuración lee las variables de entorno desde el archivo `.env` y permite una configuración centralizada.

  - **`controllers/`**: Los controladores contienen la lógica para manejar las solicitudes HTTP que llegan a cada una de las rutas de la API REST. Aquí se procesan las solicitudes, se realizan validaciones y se llama a los servicios para realizar la lógica de negocio.

  - **`models/`**: Esta carpeta contiene los modelos de datos de la base de datos, definidos mediante un ORM (como Mongoose, si se usa MongoDB) o directamente mediante esquemas SQL. Estos modelos representan las tablas o colecciones en la base de datos.

  - **`routes/`**: En esta carpeta se define cada una de las rutas de la API. Estas rutas se configuran para dirigir las solicitudes a los controladores correspondientes. Por ejemplo, las rutas de productos, usuarios, autenticación, etc., están definidas aquí.

  - **`services/`**: Los servicios contienen la lógica de negocio y funciones complejas. Estos servicios pueden interactuar con la base de datos a través de los modelos y son utilizados por los controladores para ejecutar la lógica de la aplicación.

  - **`graphql/`**: Esta carpeta es específica para GraphQL y contiene los esquemas y resolvers. Los esquemas definen el modelo de datos y los resolvers implementan la lógica de cada consulta y mutación de GraphQL.

  - **`utils/`**: Carpeta para utilidades y helpers, que son funciones de uso común que pueden ser usadas en diferentes partes de la aplicación, como el manejo de errores, validaciones, generación de tokens, etc.

  - **`index.js`**: Este es el archivo principal que inicializa y configura el servidor. Importa todas las rutas y controladores necesarios, y configura el middleware (como body-parser y CORS). También se conecta a la base de datos y finalmente arranca el servidor.

### Otros Archivos Importantes

- **`.env`**: Este archivo contiene las variables de entorno, como las credenciales de la base de datos, claves secretas y otros parámetros sensibles que no deben almacenarse en el código fuente. Es importante que este archivo no se suba a sistemas de control de versiones como Git.

- **`package.json`**: Contiene la configuración del proyecto, incluyendo las dependencias y scripts de npm. Aquí se listan todas las librerías y herramientas necesarias para ejecutar el backend.

- **`README.md`**: Documento que contiene la documentación del proyecto. Incluye una introducción, estructura de carpetas, dependencias y pasos para ejecutar el proyecto.

## Dependencias

Las principales dependencias de este proyecto incluyen:

- **Express**: Framework web para Node.js que facilita la creación de servidores HTTP.
- **Mongoose** (o el ORM que se utilice): Herramienta para modelar datos en MongoDB (o cualquier otra base de datos si el proyecto usa una diferente).
- **GraphQL**: Lenguaje de consulta para APIs, que permite hacer consultas más flexibles y optimizadas.
- **dotenv**: Permite cargar variables de entorno desde un archivo `.env` para evitar exponer información sensible en el código.
- **bcryptjs**: Utilizado para encriptar contraseñas antes de almacenarlas en la base de datos.


Instalar Dependencias:
npm install

API Endpoints
El backend expone varios endpoints para el manejo de productos, usuarios, y autenticación. Además, tiene un endpoint de GraphQL que permite hacer consultas personalizadas.

Ejemplo de Endpoints REST:
GET /api/products: Obtiene todos los productos.
POST /api/auth/login: Inicia sesión de usuario.
POST /api/auth/register: Registra un nuevo usuario.
Endpoint de GraphQL
El endpoint de GraphQL está disponible en http://localhost:3001/graphql, donde puedes hacer consultas y mutaciones definidas en el esquema de GraphQL.


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
