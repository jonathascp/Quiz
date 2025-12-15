import 'bootstrap/dist/css/bootstrap.css';
import styles from "./layout.module.css";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" style={{ height: '100%' }}>
      <body className={`d-flex min-vw-100 h-100 m-0 p-0 ${styles.tema_escuro}`}>
        {children}
      </body>
    </html>
  );
}
