# Puertas de seguridad antes de datos reales
1. Autorización institucional expresa para tratamiento, conexión, alojamiento y eventual transferencia a proveedores de información de expedientes.
2. Evaluación de Ley 1581 de 2012, normas de archivo público, protección de datos, políticas de seguridad y retención documental; validación con asesoría institucional.
3. Inicio de sesión OAuth con allowlist de usuario, sesiones httpOnly/Secure/SameSite, MFA o paso adicional para firma, CSRF, rate limiting, registros de auditoría.
4. Cifrado en tránsito y reposo, segregación por expediente y roles, no exponer tokens Google al cliente, gestión de secretos.
5. Consentimiento/advertencia y procedimiento documentado para grabación de diligencias; controles de acceso y conservación.
6. Copias de seguridad probadas, restauración, exportación, monitoreo y respuesta a incidentes.
7. Firma solo tras revisión explícita del documento definitivo; preservar hash, identidad, sello temporal si aplica y evidencia de autorización.
8. Google Meet: validar elegibilidad de API y políticas de cuenta; no asumir acceso al audio de otros participantes desde un navegador.
