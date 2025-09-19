export const metadata = { title: "TRBNC Admin" };
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className="container">
          <nav className="nav">
            <a href="/">Anasayfa</a>
            <a href="/mobil-giris">Mobil Giriş</a>
            <a href="/yeni-gundem">Yeni Gündem</a>
            <a href="/iade-al">İade Al</a>
            <a href="/phone">Phone</a>
            <a href="/sms">SMS</a>
            <a href="/admin">Admin</a>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
