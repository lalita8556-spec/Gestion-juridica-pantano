# GitHub Pages: demostración sin otra cuenta

La aplicación está preparada para exportación estática. No requiere cuentas adicionales ni secretos. El repositorio y el sitio publicados son públicos; usar solamente datos ficticios. Los registros viven en el navegador y no se sincronizan.

1. Incorporar la rama de la aplicación a main mediante un pull request. Deben incluirse app/, package.json, package-lock.json, next.config.mjs y .github/workflows/pages.yml.
2. En Settings → Pages → Source seleccionar GitHub Actions. No elegir las plantillas Jekyll ni Static HTML: el proyecto incluye su propio flujo.
3. En Actions abrir “Publicar demostración en GitHub Pages” y esperar que build y deploy terminen correctamente.
4. Usar la dirección que muestre el trabajo de despliegue o Settings → Pages. La dirección prevista es https://lalita8556-spec.github.io/Gestion-juridica-pantano/; no se considera publicada hasta comprobar el despliegue.

Verificación local: npm run typecheck, npm test y GITHUB_PAGES=true npm run build. La exportación está en out/. Servirla bajo /Gestion-juridica-pantano/ para comprobar los recursos y React.

El modo normal npm run dev mantiene la ruta raíz. La variable GITHUB_PAGES=true activa la exportación y la ruta del repositorio únicamente durante el build de Pages. No ejecutar un build mientras un servidor de desarrollo está usando .next.

Drive, firmas, documentos oficiales, autenticación y base de datos siguen pendientes. GitHub Pages sirve únicamente la demostración estática.
