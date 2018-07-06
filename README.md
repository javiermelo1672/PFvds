![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2Fportada.png?alt=media&token=f0640bee-39a6-4062-8320-3b8298d2db31)

# VEHICOLDA APP

Este es un proyecto para implementar una aplicación con Ionic para pedir Vehículos.

## Planteamiento del problema

La renta o alquiler de vehículos suele ser muy tediosa tanto para el cliente como al dueño del negocio. Nosotros planteamos una solución
que permita mejorar el rendimiento de ingresos de dueño de negocios al tener una mayor cantidad de pedidos y mejorar el tiempo de reservade un vehículo. Se plantea un aplicativo único con funcionalidad Admin y Cliente que permita al Admin gestionar en tiempo real todos los pedidos de vehículos, gestionar el historial de ganancias, ver en tiempo real el estado de sus vehículos y permitir añadir usuarios empleados para el uso de la plataforma; y para el Cliente pedir su vehículo desde la aplicación, pagar la reserva desde la aplicación y acceder a funciones de conocer el estado de su reserva, acceder a un historial de reservas y acceder a funcionalidades propias del cliente. 

## Objetivos

### General

Brindar una alternativa a los ciudadanos y extranjeros la posibilidad de solicitar un vehículo rentado a través de su celular, que facilite el proceso de renta de vehículos personales para una empresa en específico.

### Específicos

* Permitir pagos mediante el celular.
* Registrar y administrar información de personas interesadas en adquirir servicios de renta de autos. 
* Permitir hacer seguimiento de solicitudes en tiempo real de la renta de vehiculos.
* Controlar el  préstamo y entrega de  vehículos. 

## Alcance

### Alcances Físicos 
 
* El aplicativo sólo funcionará en dispositivos iOS o Android con las últimas versiones disponibles, en iOS en su versión 7 o posterior y en Android en su versión  Lollipop o superior.
* La aplicación no pesará más de 300 mb sin persistencia en caché.
* Se limitará un máximos de 4000 celulares conectados en tiempo real por razones de consultas y optimización de consultas.
* Se requiere de servidores para procesar las consultas, estas funcionan bajo firebase y tienen RAM limitada hasta llegar a 1gb de espacio de almacenamiento Firebase Realtime Database.

### Alcances no Físicos 

* El aplicativo solo podrá aceptar un máximo de 100000 peticiones de consulta o de operaciones al mes.
* El aplicativo solo podrá manejar alrededor de 1GB en la nube.
* No existe la posibilidad de obtener la contraseña del usuario de ninguna manera, inclusive si es el admin de la base de datos.
* El uso de la base de datos NO SQL se limita a el uso en Firebase Real Time Database.
* El aplicativo solo funcionará en tiempo real si esta conectada el 100% del uso a internet, se ofrece la posibilidad de persistencia en caché para la vista de menús u otros datos básicos, pero un proceso de pedido o pago jamás quedará en persistencia caché debido a problemas de seguridad. 

## Criterios de éxito

* La información disponible debe ser encontrada fácilmente, rápidamente, y estar disponible para los stakeholder del proyecto según sus necesidades.
* Cada vez que se realice una solicitud de vehículo debe generarse un log de consulta para mantener al  usuario y a la empresa informados.
* Garantizar fiabilidad de transacciones de pago de los usuarios en tiempo real. 
* Gestionar en tiempo real todos las solicitudes de renta de vehículos.
* Permitir el registro, la consulta y actualización de la información de cada empresa, vehículos e usuarios.
* Permitir el uso de la aplicación a dispositivos móviles iOS y Android.
* Ofrecer canal de soporte con la empresa prestadora de servicio de renta.

## Lista de Tareas

* Revisión del estado actual del proceso de renta de la empresa.
* Establecer requerimientos del proyecto.
* Generar esquema de trabajo.
* Definir tecnologías a implementar. 
* Determinar alcance del proyecto.
* Estimación de tiempo de entrega. 
* Firma del contrato.
* Definir cronograma específico. 
* Definición de modelo de datos.
* Definición de la arquitectura de la aplicación.
* Generación de componentes de usuarios.
* Generación de componentes de aseguradoras.
* Generación de componentes de vehículos. 
* Generación de componentes de pedidos. 
* Generación de componentes de pago.
* Verificación de cumplimiento de requerimientos.
* Realizar pruebas.
* Realizar manuales.
* Despliegue en servidor en la nube.
* Capacitación al personal pertinente  de la aplicación.

## Definición de Modulos(En construcción)

## Cliente
* Modulo Persona
* Modulo Tarjetas
* Modulo Pedidos
* Modulo Vehiculos
* Modulo de servicios
## Admin
* Modulo Persona
* Modulo Tarjetas
* Modulo Pedidos
* Modulo Ganancias
* Modulo Empresa
* Modulo de Servicios
## CRONOGRAMA
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F1.png?alt=media&token=8abe0ac7-9c41-4540-99db-906f6f4754b3)
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F2.png?alt=media&token=93500f42-16b2-40f3-b5f5-1e331d91b7c1)
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F3.png?alt=media&token=28860620-e94d-44ef-947d-7ec7ef8bb99a)
![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2F4.png?alt=media&token=42d59b59-9f1e-4252-9754-9118c2677de2)
## EDT

![EDT](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FWES.jpg?alt=media&token=a9463e1c-c7d0-47fc-918a-bdd315503645)

## RBS

![RBS](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FRBS%20Gesti%C3%B3n%20de%20riesgos.jpg?alt=media&token=58fb6639-d7da-48a0-be09-db1a66667a4e)

## ESTRUCTURA DEL PROYECTO
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FOrganizaci%C3%B3n.jpg?alt=media&token=49d38f83-e470-4805-882c-c2baf1ffce05)
## DIAGRAMA DE FLUJO DE RIESGOS
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FDiagrama%20de%20Flujo.png?alt=media&token=324bb968-668a-4426-8809-1076429c7706)

## BPMN 2.0
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FgPreview.png?alt=media&token=55374dc8-7162-499f-b765-7f5f5a3f5f6b)

## ESTIMACIONES DE RIESGOS

![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FmATRIZ%201.PNG?alt=media&token=47393a6a-ae16-44ee-9657-3a3130e9cfd1)
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FmATRIZ%202.PNG?alt=media&token=fcdead07-c423-4b0f-8a62-c32ec9dffbd9)
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FmATRIZ%203.PNG?alt=media&token=090eea48-1f2c-48e1-b6e1-c1bf535fb596)
![ESTRUCTURA](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2FtAREAS.PNG?alt=media&token=2a225af0-507d-425c-b571-7572c975958a)

## PLAN DE CALIDAD
[Plan de SQA PDF](https://github.com/javiermelo1672/PFvds/blob/master/Gantt%20Project/Plan%20de%20Aseguramiento%20de%20Calidad.pdf)


## Autores
* **Javier Duvan Hospital Melo**-- *Desarrollo y diseño*
* **Olga Lucia Moyano Orjuela**-- *Desarrollo y diseño*
* **Jorge Andres Lucero Hernández** -- *Desarrollo y diseño*
* **Edwin Aarón García Pulido** -- *Desarrollo y diseño*
* **Nicolas Meneses Guerrero** -- *Desarrollo y diseño*
* **Juan Camilo Sarmiento Reyes** -- *Desarrollo y diseño*
* **Anderson Orlando Ramirez Lamprea** -- *Desarrollo y diseño*




