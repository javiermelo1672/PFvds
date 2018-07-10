![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2Flogo.png?alt=media&token=380dd0e1-75c9-45ec-adbf-34025a42c24e)

### Plan de Pruebas de Software

**VEHICOLDA APP**

**Mobility for real services**

**Fecha:** **09/07/2018**
**Tabla de contenido**

| Historial de Versiones        4 |
| --- |
| Información del Proyecto        4 |
| Aprobaciones        4 |
| Resumen Ejecutivo        5 |
| Alcance de las Pruebas        5 |
| Elementos de Pruebas        5 |
| Nuevas Funcionalidades a Probar        6 |
| Pruebas de Regresión        6 |
| Funcionalidades a No Probar        7 |
| Enfoque de Pruebas (Estrategia)        7 |
| Criterios de Aceptación o Rechazo        8 |
| Criterios de Aceptación o Rechazo        8 |
| Criterios de Suspensión        8 |
| Criterios de Reanudación        9 |
| Entregables        9 |
| Recursos        10 |
| Requerimientos de Entornos – Hardware        10 |
| Requerimientos de Entornos – Software        10 |
| Herramientas de Pruebas Requeridas        11 |
| Personal        11 |
| Entrenamiento        12 |
| Planificación y Organización        12 |
| Procedimientos para las Pruebas        12 |
| Matriz de Responsabilidades        13 |
| Cronograma        13 |
| Premisas        14 |
| Dependencias y Riesgos        14 |
| Referencias        16 |
| Glosario        16 |


## Historial de Versiones

| **Fecha** | **Versión** | **Autor** | **Organización** | **Descripción** |
| --- | --- | --- | --- | --- |
| 09/07/2018 | 0.01 | Juan Camilo Sarmiento Reyes | Mobility for Real Services | Primera versión |
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |

## Información del Proyecto

| Empresa / Organización | Mobility for Real Services |
| --- | --- |
| Proyecto | Vehicolda App |
| Fecha de preparación | 20/06/2018 |
| Cliente | Alejandro Paolo Daza Corredor |
| Patrocinador principal | Vehicolda |
| Gerente / Líder de Proyecto | Javier Duvan Hospital Melo |
| Gerente / Líder de Pruebas de Software | Jorge Andrés Lucero Hernández |

## Aprobaciones

| **Nombre y Apellido** | **Cargo** | **Departamento u Organización** | **Fecha** | **Firma** |
| --- | --- | --- | --- | --- |
| Juan Camilo Sarmiento Reyes | Desarrollador |   | 09/07/2018 | Juan Camilo Sarmiento Reyes |
|    |   |   |   |   |
|    |   |   |   |   |
|    |   |   |   |   |

## Resumen Ejecutivo

Por medio de este documento se realiza una descripción de las pruebas que se realizarán en el software, el propósito es verificar la calidad del funcionamiento de la aplicación en desarrollo y garantizar la optimalidad.

## Alcance de las Pruebas

### Elementos de Pruebas

### Cliente

* Módulo Persona
* Módulo Tarjetas
* Módulo Pedidos
* Módulo Vehículos
* Módulo de servicios

### Administrador

* Módulo Persona
* Módulo Personas
* Módulo Tarjetas
* Módulo Pedidos
* Módulo Ganancias
* Módulo Empresa
* Módulo de Servicios
* Módulo de Seguros

### Nuevas Funcionalidades a Probar 

### Cliente

* Inicio de sesión
* Registro de Nueva Cuenta de sesión
* Visualización y actualización de información de cuenta
* Solicitud, seguimiento y finalización de pedidos
* Visualización información de  pedidos
* Visualización de Información de Vehículos
* Registro y edición de tarjetas
* Cerrar sesión

### Administrador

* Inicio de sesión
* Registro, actualización y visualización  de cuenta de perfil
* Registro  y visualización de información de Usuarios
* Edición y visualización de datos de la empresa
* Seguimiento y control de estados de pedidos
* Visualización y filtro de información de pedidos
* Registro, edición y visualización de Información de Vehículos
* Registro, edición y visualización de cuentas bancarias
* Registro, edición y visualización de seguros
* Cerrar sesión

## Pruebas de Regresión

* Verificación de Login
* Verificación de Registro
* Verificación de rol de usuario
* Verificación de registro de Seguros
* Verificación de registro de vehículos

## Funcionalidades a No Probar

* Autenticación de Firebase: Las pruebas de funcionamiento de autenticación son responsabilidad del proveedor, nosotros realizamos las pruebas de integración.
* Servicio de conexión con base de datos a través de Firebase: Las pruebas de funcionamiento de autenticación son responsabilidad del proveedor, nosotros realizamos las pruebas de integración y que los datos enviados son correctos.
* Servicios de proveedores de apis: Las pruebas de funcionamiento de las apis son responsabilidad de cada uno de los proveedores, nosotros realizamos pruebas de integración y que los datos de solicitud correspondan con la documentación de la api.

## Enfoque de Pruebas (Estrategia)

### Pruebas Funcionales

* Funcionamiento del Login
* Funcionamiento del Registro
* Funciones de Pedido
* Funciones de pago con tarjeta de crédito
* Funcionamiento de Servicios.

### Pruebas de Desempeño

* Tiempo promedio de inicio de la aplicación
* Tiempo promedio de autenticación
* Tiempo del envío y la respuesta a la solicitud CRUD.

### Pruebas de Interfaces

* Relación entre perspectiva y pantalla.
* Funcionamiento del Nav Controller(ver Ionic Docs)  en cada una de las sesiones y pestañas.
* Funcionamiento de los Nav Parameters en la asignación de objetos.
* Mensajes de la aplicación
* Notificaciones a usuario

**Pruebas no Funcionales**

* Pruebas de respuesta a ion-click.
* Pruebas de carga
* Pruebas de estrés
* Pruebas de configuración
* Pruebas de usabilidad
* Pruebas de seguridad
* Pruebas de mantenibilidad
* Vista en iOS y Android (deben corresponder a las especificaciones de UI de cada plataforma)

**Criterios de Aceptación o Rechazo**

* El 100% de las pruebas unitarias realizadas con la librería Husky deben ser satisfactorias
* Completar el 100% de la pruebas de integración con los contenedores de docker
* Al menos el 90% de las pruebas de usuario deben ser exitosas

**Criterios de Suspensión**

* Casos en los que no se realiza la conexión a internet por motivos adversos.
* Casos en los que existe un registro inscrito y sea necesario la existencia de dicho registro.
* Casos en lo que no halla por alguna razón no exista conexión con la base de datos.
* Casos en los que haya un problema de integridad de datos.
* Casos en los que no se pueden realizar las pruebas de integración porque fallaron las pruebas unitarias.
* Casos en que la UI no permita la ejecución de la prueba por razones de programación.
* Casos en los que por error del entorno no se logre la ejecución.
* Casos en los que por alguna razón haya problemas en el servicio de apis.

**Criterios de Reanudación**

* Restablecer la conexión con la base de datos.
* Cuando se ha solucionado el problema de integridad.
* Completar las pruebas unitarias éxitosamente.
* Cuando se ha solucionado el problema UI.
* Cuando se ha solucionado el problema de implementación en el entorno.
* Restablecer el servicio de las apis.

**Entregables**

* Documento de plan de pruebas
* Documento  de casos de pruebas
* Documento de especificación de diseño de casos
* Logs de errores
* Reportes de incidencias
* Reporte del resultado de las pruebas
* Reportes emitidos por herramientas de pruebas

**Recursos**

**Requerimientos de Entornos – Hardware**

* Conectividad con la red 3G/4G LTE o Wi-Fi
* Equipos de PC:
  - Escritorio o portátil
  - 8 GB RAM
  - Procesador de 8 núcleos con una velocidad de 3.4 Ghz
  - Windows 10 o posterior, Linux(debian) posteriores a la 3.0 , Mac OS X &quot;el capitán&quot; o posterior o Sistema operativo compatible con herramientas de desarrollo móvil como Angular 6.x y Nodejs
  - Tarjeta gráfica de 1 GB compatible con Direct 11X
  - Periféricos de entrada y salida de datos
* Características del dispositivo:
  - Celular o tablet con sistema operativo android 7.0 o posterior y/o móvil con iOS 9 o posterior.
  - 1 GB de Memoria de RAM.
  - Conectividad 3G/4G LTE o wi-fi
  - Procesador de 4 núcleos con una frecuencia de 1.8 Ghz

**Requerimientos de Entornos – Software**

* Firefox o Chrome
* Instalación del entorno de nodejs
* Instalación del entorno Angular 6.x
* Instalación del entorno Ionic
* Instalación de Ionic Dev App

**Herramientas de Pruebas Requeridas**

* Husky
* Selenium
* Ionic unit test
* Firebase TestLab
* Pruebas de caja negra
* Jasmine
* Pruebas de integración

**Personal**

* Líder de Pruebas (Juan Camilo Sarmiento Reyes)
* Analista de Pruebas (Javier Melo, Jorge Hernandez, Edwin Garcia)
* Especialistas en Automatización de Pruebas (Lucía Moyano, Anderson Ramirez, Nicolas Meneses)

**Entrenamiento**

* Aprendizaje y uso de la librería husky.
* Aprendizaje, entendimiento y uso del gestor de Firebase.
* Aprendizaje y uso de Angular.
* Aprendizaje y uso Typescript básico y sus librerías.
* Uso de GitHub.
* Uso de pruebas unitarias con el framework Ionic
* Aprendizaje montaje de servidor de pruebas Ionic Dev App tanto en iOS como Android
* Aprendizaje montaje de .apk y .ipa  en firebase Testlab.

**Planificación y Organización**

**Procedimientos para las Pruebas**

* Pruebas de Caja Negra: En cada módulo se probarán las respectivas funcionalidades pero en torno a la entrada y la salida de datos.
* Pruebas Unitarias: En cada módulo se probarán las respectivas funcionalidades y se examinarán los resultados para su retroalimentación.
* Pruebas de Integración: En cada módulo se prueba si la integración tiene atomicidad en cuanto a la información y en cuanto a las peticiones que se realizan.

**Matriz de Responsabilidades**

 ![Matriz]()

**Cronograma**

![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F1.png?alt=media&token=8abe0ac7-9c41-4540-99db-906f6f4754b3)
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F2.png?alt=media&token=93500f42-16b2-40f3-b5f5-1e331d91b7c1)
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F3.png?alt=media&token=28860620-e94d-44ef-947d-7ec7ef8bb99a)
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F4.png?alt=media&token=42d59b59-9f1e-4252-9754-9118c2677de2)

**Premisas**

* Se utilizarán las herramientas mencionadas anteriormente, el gestor de la base de datos (Firebase) y el Framework de Ionic.
* Se dispone de 4 computadores con requerimientos mínimos evaluados, también se dispone de la suscripción para testlab de Firebase, se dispone de 6 equipos Android y 1 equipo iphone para pruebas de funcionamiento en vivo.
* El tiempo estimado puede ser un limitante para la ejecución  para dichas pruebas debido a que la realización están definidas para 3 semanas en el cronograma.

**Dependencias y Riesgos**

* Dependencias con Desarrollos.
* Dependencias con otros proyectos.
* Disponibilidad de recursos.
* Restricciones de tiempo.
* Premisas que resulten no ser ciertas.

Los riesgos se pueden clasificar en función de su probabilidad e impacto, cada uno debe contemplar un plan de mitigación para evitar que ocurra o plan de contingencia cuando el riesgo no puede mitigarse y tiene que aceptarse.

 ![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FmATRIZ%201.PNG?alt=media&token=47393a6a-ae16-44ee-9657-3a3130e9cfd1)
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FmATRIZ%202.PNG?alt=media&token=fcdead07-c423-4b0f-8a62-c32ec9dffbd9)
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FmATRIZ%203.PNG?alt=media&token=090eea48-1f2c-48e1-b6e1-c1bf535fb596)
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FtAREAS.PNG?alt=media&token=2a225af0-507d-425c-b571-7572c975958a)

**Referencias**

Documentación y referencias de Apis:

* [https://firebase.google.com/docs/reference/js/?hl=ru](https://firebase.google.com/docs/reference/js/?hl=ru)
* [https://ionicframework.com/docs/developer-resources/#](https://ionicframework.com/docs/developer-resources/#)
* [https://nodejs.org/es/docs/](https://nodejs.org/es/docs/)
* [https://angular.io/docs](https://angular.io/docs)

Documentación SDKs:

* [https://developer.apple.com/documentation/](https://developer.apple.com/documentation/)
* [https://developer.android.com/guide/?hl=es-419](https://developer.android.com/guide/?hl=es-419)

Documentos:

* Especificaciones de Requerimientos
* Diseño general
* Cronograma del desarrollo
* Documento de Riesgos
* Documento Matriz de responsabilidades

**Glosario**

* Caja Negra: Pruebas que evalúan a partir de unos casos de entrada que salga la salida esperada.
* Caja Blanca: Pruebas relacionadas al correcto comportamiento del componente.
* Regresión: Pruebas que comprueban el comportamiento de los componentes cuando se agrega uno nuevo.
* Nav Controller: Es la base de los componentes de navegación de la UI de la aplicación que controla el nav y las tabs.
* Matriz RACI: Es una matriz que permite definir las responsabilidades de cada actor del equipo.
* Npm: npm es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.