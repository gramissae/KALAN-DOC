# KALAN - Documentacion
Documentación para conexión de servicios REST:

### Requisitos para uso

* Nodejs
* Git

### Instalacion

En terminal coloca `git clone https://github.com/gramissae/KALAN-DOC.git` posterior en raiz donde colocaste el repositorio ingresa
el comando `npm install`.

Al finalizar accede al [link](http://localhost:8080/) para leer la documentacion y los ejemplos de conexion a obtener.

### Tecnologias

El uso de Javascript como principal lenguage facilita el uso y reduce la brecha de aprendizaje para los desarrolladores basados en web por lo cual se decidieron usar las siguientes tecnologias:

#### Backend 
* NodeJS.
* Express (Framework backend).
* JWT (Token Interface).
#### Database
* MongoDB
#### Front - Ports
* ReactJS (WebApp).
* MaterialUI (Framework ReactJS Components).
* Flutter (App - Android Beta).
* React Native (App - Android Test).

### Mas en 

Documentacion de tecnologias
#### Front-end
* [ReactJS](https://es.reactjs.org/)
  * [Github](https://github.com/facebook/react/)
* [ReactNative](https://facebook.github.io/react-native/)
  * [Github](https://github.com/facebook/react-native/)
* [Flutter](https://flutter.dev/)
  * [Github](https://github.com/flutter)
* [MaterialUI](https://material-ui.com/)
  * [Github](https://github.com/mui-org/material-ui)
#### BackEnd
* [JWT](https://jwt.io/)
* [ExpressJS](https://expressjs.com/es/)
  * [Github](https://github.com/expressjs/express/)
### Extras

Ejemplo de **Hello Bro** en simulacion:
```javascript
fetch('http://localhost:8080/api/',{
  method:'GET',
  Content-Type: 'application/json',
  Accept: 'application/json'
})
.then(res => res.json())
.then(data => alert(data))
.catch(error => console.error(error))
```
Ejemplo de solicitud con Token:

```javascript
const options = {[MOREOPTIONS]};

fetch('http://localhost:8080/api/',{
  method:'POST',
  Content-Type: 'application/json',
  Accept: 'application/json',
  Authorization: {client_token: [YOUTOKEN], provider_token:[MYTOKEN],...options}
})
.then(res => res.json())
.then(data => alert(data))
.catch(error => console.error(error))
```
## Autor

[Maldos23](https://github.com/maldos23)

Licencia MIT.

Echo con :heart: para todos.
