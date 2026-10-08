# Arquitectura prevista

## Principios
- Primero archivo inteligente; todo documento se vincula a un expediente o queda en bandeja de revisión.
- **Nunca** archivar por coincidencia ambigua sin confirmación humana.
- Mantener originales inmutables, checksum, versiones, historial de acciones y folios solo cuando estén verificados.
- Personal Gmail = identidad del administrador, mediante OAuth/OIDC. Cuenta institucional = integración Google Drive/Calendar independiente, con consentimiento y permisos mínimos. La conexión de ChatGPT **no** autoriza automáticamente esta aplicación.
- No mover ni borrar archivos del Drive institucional por defecto. Indexar referencias; lectura inicial, escritura solo con permisos y aprobación institucional.
- Los archivos oficiales se conservarán conforme a la política de gestión documental y tablas de retención aplicables.

## Módulos
1. Expedientes: radicado único, partes, asunto, estado, cronología, pruebas por origen.
2. Bandeja documental: extracción de metadatos y texto, OCR solo si hace falta, propuestas con puntuación/confianza, confirmación y auditoría.
3. Plantillas versionadas: oficio, auto, citación; campos verificados, vista previa, borradores DOCX y PDF; preservación de versiones.
4. Firma: autorización expresa **por documento y por hash de contenido**, autenticación reforzada, proveedor de firma electrónica/digital adecuado; imagen de rúbrica no es firma digital certificada. Sin firma automática.
5. Audiencias: grabación de audio presencial; Meet solo con integración autorizada; transcripción en vivo como borrador corregible, audio original inmutable.
6. Inspección ocular: video **solo si se elige expresamente**, marcadores de hallazgos y anexos técnicos.
7. Dispositivos: vinculación QR aprobada desde teléfono, listado y revocación remota. Sesiones persistentes hasta revocación, salvo eventos de seguridad o política institucional.

## Stack propuesto
Next.js + TypeScript, PostgreSQL + Prisma, almacenamiento de objetos privado cifrado, OAuth/OIDC, API de Google Drive y Calendar, motor DOCX/PDF en backend, motor STT de streaming sujeto a evaluación contractual y de datos. Implementar PWA después de asegurar sesiones.

## No implementado en el MVP demostrativo
Backend, autenticación, permisos, QR real, Google Drive, lectura de archivos, OCR, DOCX/PDF, firma, streaming de audio/video, transcripción y sincronización. El demo guarda **solo metadatos ficticios** en localStorage.
