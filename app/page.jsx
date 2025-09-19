// app/page.jsx
import Link from "next/link";

export const metadata = { title: "TRBNC • Panel" };

export default function Home() {
  const links = [
    { href: "/", title: "Anasayfa", desc: "Genel bakış" },
    { href: "/mobil-giris", title: "Mobil Giriş", desc: "Mobil giriş işlemleri" },
    { href: "/yeni-gundem", title: "Yeni Gündem", desc: "Gündem oluştur / yönet" },
    { href: "/iade-al", title: "İade Al", desc: "İade / sipariş işlemleri" },
    { href: "/phone", title: "Phone", desc: "Telefon işlemleri" },
    { href: "/sms", title: "SMS", desc: "SMS gönderim / log" },
    { href: "/admin", title: "Admin", desc: "Yönetici alanı" },
  ];

  return (
    <main className="container">
      <section className="card" style={{marginTop:20}}>
        <h1 style={{margin:"0 0 8px"}}>Hoş geldiniz</h1>
        <p style={{opacity:.85}}>
          Bu panelin Next.js sürümü Vercel'de **native** çalışır. Aşağıdan modüllere geçin.
        </p>
      </section>

      <section
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",
          gap:16,
          marginTop:16
        }}
      >
        {links.map(({href,title,desc}) => (
          <Link key={href} href={href} className="card"
            style={{display:"block", padding:16}}>
            <h3 style={{margin:"0 0 6px"}}>{title}</h3>
            <p style={{margin:0, opacity:.8, fontSize:14}}>{desc}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
