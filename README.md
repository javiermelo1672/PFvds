![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2Fportada%20vehicolda.png?alt=media&token=d5a4def7-08b4-4119-8f0b-da9b8b7b00cd)

# VEHICOLDA APP
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Info_Proyecto%2Flogo.png?alt=media&token=380dd0e1-75c9-45ec-adbf-34025a42c24e)

Este es un proyecto de Mobility for Real Services para implementar una aplicación con Ionic para pedir Vehículos.

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

## PLAN DE PRUEBAS DE SOFTWARE
[Plan de pruebas de software MD](https://github.com/javiermelo1672/PFvds/blob/master/PlanPruebas.md)

## ESPECIFICACION CASO DE PRUEBA 

[Plan de pruebas de software MD](https://github.com/javiermelo1672/PFvds/blob/master/Gantt%20Project/IniciarSesion.doc.pdf)

## DESPLIEGUE DE LA APLICACIÓN

Se añade despliegue en un dispositivo iPhone con iOS 11, a continuación se presentan algunas capturas del aplicativo 

# Panel del Cliente
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5818.PNG?alt=media&token=7c025c0d-f284-44c6-94a3-3f4d278167ea) 
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5819.PNG?alt=media&token=a58dfcbf-05e4-409d-a446-d13290d8cccb)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5820.PNG?alt=media&token=39538f1b-a2c3-402e-af18-9c02ab832783)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5821.PNG?alt=media&token=6c53e86a-5593-4ade-9608-41b6dd3d665e)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5822.PNG?alt=media&token=74700374-ea03-4e4b-ae1e-c1812445ec57)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5818.PNG?alt=media&token=7c025c0d-f284-44c6-94a3-3f4d278167ea)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5824.PNG?alt=media&token=7afbe7de-07ec-4ebe-a48b-438466ca2070)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5825.PNG?alt=media&token=15a3d385-9626-4d5c-8dd9-8553b346f14d)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5826.PNG?alt=media&token=14afaf45-119d-4045-a3c6-c4a0995be476)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5827.PNG?alt=media&token=b0207543-469f-4d1e-b19d-92e62d5de474)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5828.PNG?alt=media&token=65dec50d-2b05-44d8-9a77-63f4a9f8fd7c)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5831.PNG?alt=media&token=7844d628-bf3e-46ae-8c8a-59611d1825d2)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5832.PNG?alt=media&token=f147ac01-b3d0-4dd7-a7e0-fc9671aa2928)
#Panel del Admin
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5833.PNG?alt=media&token=d2537e5c-0254-496e-ab2e-5f5314daa441)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5834.PNG?alt=media&token=a07798c7-3173-48f7-a6b3-f4ff65902936)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5835.PNG?alt=media&token=1d0acd80-c006-4ddd-9b84-9a24244edce3)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5836.PNG?alt=media&token=5d8847c8-bcb4-4649-8066-56417d42cf54)
![Logo](https://firebasestorage.googleapis.com/v0/b/vehicolda-d1b72.appspot.com/o/Despliegue%2FIMG_5837.PNG?alt=media&token=eb0cb71c-356d-45e2-8b44-fd95e0070e7a)

## Autores
* **Javier Duvan Hospital Melo**-- *Desarrollo y diseño*
* **Olga Lucia Moyano Orjuela**-- *Desarrollo y diseño*
* **Jorge Andres Lucero Hernández** -- *Desarrollo y diseño*
* **Edwin Aarón García Pulido** -- *Desarrollo y diseño*
* **Nicolas Meneses Guerrero** -- *Desarrollo y diseño*
* **Juan Camilo Sarmiento Reyes** -- *Desarrollo y diseño*
* **Anderson Orlando Ramirez Lamprea** -- *Desarrollo y diseño*




