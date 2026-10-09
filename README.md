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
- `archivo.ts`, `types.ts`, `demo.ts`: clasificación preliminar, tipos y datos ficticios.
- `lib/datos.ts`: validación del almacenamiento local.
- `tests/`: pruebas de clasificación y radicados.
- `ARQUITECTURA.md`, `SEGURIDAD_Y_CUMPLIMIENTO.md`, `ROADMAP_CODEX.md`: documentación.
- `AGENTS.md`: instrucciones para Codex.
- `prototipo_v02.html`, `prototipo_inspeccion_v02.html`: prototipos HTML de referencia.

## Nota
La clasificación actual usa el **nombre ficticio** de un archivo, no analiza su contenido. Los registros de prueba viven en el almacenamiento local del navegador. Los documentos Word/PDF, firma, Google Drive, QR y transcripción son funcionalidades planificadas, no implementadas.

## Flujo disponible
Expedientes y actuaciones ficticias, búsqueda, bandeja documental con revisión y confirmación humana, carpetas por categoría, borradores TXT editables y agenda local. Se conserva solo el nombre del archivo, nunca su contenido. Dispositivos y QR quedan señalados como pendientes.

El almacenamiento se valida antes de cargarlo. Si está dañado o no está disponible, la aplicación muestra un aviso. No existe backend ni sincronización. No utilizar datos reales.
