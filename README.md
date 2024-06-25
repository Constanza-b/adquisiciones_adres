# Gestión de Adquisiciones ADRES

Bienvenido al proyecto de Gestión de Adquisiciones para ADRES. Este proyecto se desarrolla utilizando Django para el backend y React 18 con Vite para el frontend. Proporciona una plataforma para gestionar las adquisiciones de la Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES).

## Tabla de Contenidos

1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
   - [Backend](#backend)
   - [Frontend](#frontend)
   - [Compilación del Frontend](#compilación-del-frontend)
3. [Uso](#uso)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Contribuir](#contribuir)
6. [Licencia](#licencia)

## Requisitos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- **Git**: Para clonar el repositorio.
- **Python 3.8+**: Requerido para el entorno backend.
- **Node.js 14+**: Necesario para el entorno frontend.
- **npm**: Administrador de paquetes para Node.js.
- **SQLite3**: Base de datos utilizada por Django.

## Instalación

### Backend

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/Constanza-b/adquisiciones_adres.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd adquisiciones_adres
    ```

3. Crea y activa un entorno virtual (opcional pero recomendado):

    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
    ```

4. Instala las dependencias del proyecto:

    ```bash
    pip install -r requirements.txt
    ```

5. Realiza las migraciones de la base de datos:

    ```bash
    python manage.py migrate
    ```

6. Inicia el servidor de desarrollo:

    ```bash
    python manage.py runserver
    ```

### Frontend

1. Navega a la carpeta `frontend`:

    ```bash
    cd frontend
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo para desarrollo rápido:

    ```bash
    npm run dev
    ```

### Compilación del Frontend

1. Construye el proyecto React para producción:

    ```bash
    npm run build
    ```

2. Copia los archivos compilados a la carpeta `static` de Django:

    ```bash
    cp -r dist/* ../static/
    ```

3. Asegúrate de que Django sirva estos archivos estáticos correctamente. Si estás en modo desarrollo, puedes iniciar el servidor de desarrollo de Django y probar la integración:

    ```bash
    python manage.py runserver
    ```

## Uso

### Acceder a la Aplicación

- **Backend**: Accede a `http://127.0.0.1:8000/` para ver el API backend.
- **Frontend**: Si está en desarrollo, accede a `http://127.0.0.1:5173/`. Para producción, los archivos React se sirven desde la ruta `http://127.0.0.1:8000/`.

### Funcionalidades Principales

- **Crear Adquisiciones**: Permite crear nuevos registros de adquisiciones.
- **Ver Adquisiciones**: Muestra una lista de adquisiciones existentes.
- **Actualizar Adquisiciones**: Edita los detalles de una adquisición existente.
- **Eliminar Adquisiciones**: Elimina registros de adquisiciones.

## Estructura del Proyecto

### Backend

- **adres/**: Configuración general del proyecto Django.
  - `settings.py`: Configuración del proyecto, incluyendo la base de datos y los hosts permitidos.
  - `urls.py`: Gestión de las rutas URL.

- **adquisiciones/**: Módulo principal para la gestión de adquisiciones.
  - `urls.py`: Define las rutas específicas relacionadas con las adquisiciones.
  - `views.py`: Maneja las solicitudes del módulo adquisiciones.
  - `models.py`: Define la estructura de los datos para las adquisiciones.

### Frontend

- **src/**
  - **components/**: Componentes React principales.
    - `AppRouter.jsx`: Configura las rutas de la aplicación.
    - `Content.jsx`: Renderiza el logotipo de ADRES.
    - `AdquisicionesFormulario.jsx`: Gestiona adquisiciones mediante un formulario.
    - `AdquisicionList.jsx`: Muestra, pagina, actualiza y elimina adquisiciones.
    - `Navbar.jsx`: Barra de navegación para la aplicación.
  - **services/**: Servicios para la interacción con el API.
    - `AdquisicionService.jsx`: Opera sobre adquisiciones a través de un API REST.

## Contribuir

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request desde tu rama hacia el repositorio principal.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
