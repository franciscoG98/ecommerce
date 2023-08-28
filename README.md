# Ecommerce Project

Welcome to the Ecommerce Project! This is a full-stack web application built using TypeScript, React, Node.js, Express, Prisma, and PostgreSQL.

## Todo
- [ ] [fix prisma conection url](https://supabase.com/partners/integrations/prisma#connection-pooling-with-supabase)
- [x] fetch a Fake Store API
- [x] get a la API para obtener los productos https://fakestoreapi.com/products
- [x] Procesa los datos obtenidos de la API y muestra los productos en tu interfaz de usuario
- [ ] agregar productos al carrito de compras.
- [ ] páginas de detalles de productos
- [ ] Crea páginas de categorías para organizar los productos según sus categorías.
- [ ] Considera la implementación de un sistema de autenticación y registro de usuarios si planeas tener interacciones más avanzadas.
- [ ] Implementa pruebas unitarias
- [ ] Implementa pruebas integración
- [ ] Utiliza las herramientas de desarrollo proporcionadas por Next.js para depurar y verificar el funcionamiento de tu aplicación
- [ ] Agrega la capacidad de agregar productos al carrito y procesar pedidos
- [ ] Implementa la autenticación de usuarios si es necesario
- [ ] Asegúrate de que las interacciones con la interfaz de usuario sean intuitivas y fáciles de usar


# Usefull commands

Migrate data
```
npx prisma migrate dev --name init
```

Get models
```
npx prisma db pull
```


## Features

- Browse and search for products.
- Add products to your shopping cart.
- Checkout and place orders.
<!-- - User authentication and authorization. -->
<!-- - ... -->

## Tech Stack

- Frontend:
  - TypeScript
  - React
  - Redux for state management
  - Next.js for server-side rendering and routing

- Backend:
  - Node.js
  - Express.js for API routes
  - Prisma for ORM and database access
  - PostgreSQL as the database

- Api for products
  - [Fake Store API](https://fakestoreapi.com/)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/franciscoG98/ecommerce.git
```


2. Set up the frontend:
```
cd client
npm install
npm run dev
```


3. Set up the backend:

```
cd server
npm install
npm run start
```


4. Access the application in your browser:
```
http://localhost:3000
```


<!-- ## Configuration

- Configure database connection in `server/prisma/schema.prisma`.
- Set environment variables in `.env` files for both the client and server.

## Testing

- Frontend: Use Jest and React Testing Library for testing React components and functionality.
- Backend: Use Jest for testing API routes, services, and controllers.

## Deployment

- Frontend: Deploy the frontend on Vercel or Netlify.
- Backend: Deploy the backend on Heroku or AWS. -->

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow: Fork the repository, create a branch, make changes, and submit a pull request.


---

Feel free to customize this README according to your project's details and requirements. Make sure to include relevant information, instructions, and any additional sections that are important for your project.
