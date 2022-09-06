# IGZ Test

Este proyecto fue creado para la prueba tecnica de Intelygenz.

## Como empezar

- Clonar el repositorio

- Ejecutar yarn

Una vez instaladas las dependencias

- Ejecutar `yarn start`

En caso de no abrir de manera automatica, por defecto, el proyecto se levanta en [http://localhost:3000]

## Dependencias

### React Router 6

Utilizada para la navegación entre las páginas.

### Moment

Utilizada para el manejo de las fechas, usada por ser ampliamente conocida.

## Patrones de diseño

### Patron de Composición

Se utiliza por ejemplo en el Layout, para evitar contruir el Header y el Footer en el mismo componente, por eso lo divido en tres.

### Patron de Contención / Higher-Order Components

Se utiliza por ejemplo en el Layout, para evitar utilizar un componente diferente en cada pantalla, le damos la posibilidad de poder pasarle un Children y ser usado multiple veces.

## Test

Para correr los test correr el comando `yarn test`
