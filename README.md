# FrontEnd Challenge

## ¿Cómo lo interprete?

Pensé el reto como una app 'DeviApp' para administrar conexiones a dispositivos móviles, esa fue la interpretación que le di al video de prueba y creo que podría ser un caso de una app Real

## ¿Como pensé la implementación y que tecnologías usé?
Para desarrollarlo utilice React utilizando el framework de Next.js, me tome la libertad de usar esta librería, por terminos de performance, tiene ventajas al utilizar Server Side Rendering y genera una App que permite ser escalable y fácil de mantener.

## ¿Que decisiones tome?
Algunas de las ideas que decidí implementar, fue utilizar Next-Routes, en términos de la funcionlidad de la App en este estado no tiene mucha ventaja utilizarlo, pero en caso de querer que la aplicación funcione, sería una buena opción. 

Otra decisión que tome fue utilizar Prefetch en los enlaces de navegación, este le indica a Next que el Link es importante y que vaya precargando el contenido por adelantado y así se ahorra un poco de tiempo de carga.

## ¿Como inicializar la app?

Para inicializar la App se requiere tener instalado una versión de Node

* `npm install` para instalar las dependencias.
* `npm run dev` para entorno de desarrollo.
* `npm run build && npm start` para el entorno de producción.
