import type { Metadata } from 'next';
import '../styles.css';
export const metadata: Metadata = { title: 'Gestión Jurídica · Pantano de Vargas', description: 'Demostración local con datos ficticios' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="es-CO"><body>{children}</body></html>;}
