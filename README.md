# Gestión Jurídica · Pantano de Vargas

Proyecto inicial **para Codex**, con demostración local de expedientes, clasificación documental asistida, plantillas de texto y agenda. No apto aún para datos institucionales reales.

## Ejecutar
```bash
npm install
npm run dev
```
Abrir `http://localhost:3000` en el computador. Para probar en el celular desde la misma red, se requiere configurar acceso de desarrollo seguro y revisar las restricciones de red.

## Verificar
```bash
npm run typecheck
npm test
npm run build
```

## Estructura
- `app/`: interfaz Next.js mobile-first.
- `lib/`: tipos, clasificación preliminar y datos ficticios.
- `prisma/schema.prisma`: diseño de base de datos **no activado**.
- `docs/`: arquitectura, seguridad y hoja de ruta.
- `AGENTS.md`: instrucciones para Codex.
- `legacy/`: prototipo HTML previo como referencia.

## Nota
La clasificación actual usa el **nombre ficticio** de un archivo, no analiza su contenido. Los registros de prueba viven en el almacenamiento local del navegador. Los documentos Word/PDF, firma, Google Drive, QR y transcripción son funcionalidades planificadas, no implementadas.
