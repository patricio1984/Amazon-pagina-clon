# Página clon de Amazon

Este proyecto fue realizado íntegramente en React.js. Para la funcionalidad de agregar productos al carro de compras se utilizaron hooks, principalmente el useContext para obtener información producto y del usuario ingresado mediante login, así como también el useReducer para realizar los dispacth de la data solicitada.
La base de datos y el hosting fue realizado en Firebase. La utilidad de pago por tarjeta de crédito trabaja con la librería npm de Stripe. Los pedidos realizados y abonados a través del checkout pueden ser observados a través de la sección de Orders (los datos son guardados en la base de datos). También se utilizó axios para conectar el backend de firebase con el front end de React.
En cuanto a los estilos, se utilizó en su mayoría CSS3, salvo los íconos que fueron cargados a través de Material-UI. El estilo de los valores monetarios de los productos fue trabajado con la libreria de npm react-currency-format.


### ***ACLARACIÓN

#### Pasos para utilizar la funcionalidad de pago por tarjeta de crédito

1) Clonar este repositorio
2) Descargar librerías de npm tanto en el proyecto general como en functions (backend de firebase)
3) Correr npm start para correr el proyecto en localhost:3000
4) Abrir una terminal e instalar el emulador de cloud service de firebase con el comando: npm install -g firebase-tools
5) Ingresar firebase emulators:start
6) Una vez iniciado el proyecto, y se haga el checkout de los productos comprados, ingresar en tarjeta de crédito 4242 4242 4242 4242 (el cvc, la fecha de vencimiento y el código postal es indistinto, puede ser 42424242....)
