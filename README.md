<center style="display: grid; margin: auto; width: max-content">
    <a href="https://autogestion.frvm.utn.edu.ar/" target="_blank">
        <img src="./.github/logo.png" width="240" style="margin: auto" />
    </a>
    <h1>API Wrapper - Autogestión UTN FRVM</h1>
</center>

## Prefacio
Este wrapper está escrito basandose en la [aplicación oficial de la universidad](https://play.google.com/store/apps/details?id=autogestion.frvm.utn.edu.ar) a través de ingenieria inversa.

Ofrece una interfáz y cliente personalizado escrito en **Typescript** para utilización en aplicaciones Node con el web service oficial de la universidad.

## Documentación
Puedes leer los docs oficiales del paquete [aquí](https://github.com/punteroo/autogestion-frvm/wiki).

## Pendientes
- [X] Autenticación con el Web Service (Hash / Password)
- [X] Perfil Académico
    - [ ] Cambiar contraseña
- [X] Consultas de Recursos
    - [X] Histórico de exámenes rendidos
    - [X] Materias en curso
    - [X] Histórico de materias cursadas
    - [X] Estado Académico
    - [X] Horarios de cursado para materias actuales
- [X] Administración de Encuestas Docentes
    - [X] Consultar encuestas docentes disponibles
    - [X] Consultar preguntas de una encuesta docente
    - [X] Responder encuestas docentes
- [X] Administración de Exámenes Finales
    - [X] Consultar exámenes disponibles para rendir
    - [X] Consultar turnos de exámenes específicos
    - [X] Inscribir a exámen final
    - [X] Anular inscripción a exámen final
- [ ] Administración de Cursado
    - [ ] Consultar materias disponibles para cursar
    - [ ] Consultar comisiones disponibles de una materia
    - [ ] Inscribir a cursado de una materia
    - [ ] Anular inscripción a cursado
- [ ] Administración de Certificados
    - [ ] Consultar certificados disponibles
    - [ ] Solicitar un certificado

## Discreción Legal
No soy responsable por ningún tipo de daño ocasionado a la institución ni a su Web Service utilizando este paquete, simplemente sirve como accesor en código hacia rutas de público conocimiento desde la app oficial. Este es un proyecto "for fun" y no pasa de ello.

Si decides usarlo de forma malintencionada, **tú eres responsable de lo que haces**.
