import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{maxWidth:980, margin:'0 auto', padding:'48px 20px'}}>
        <h1 style={{fontSize:40, lineHeight:1.1, marginBottom:12}}>
          KI-Checklisten für <span style={{color:'#2563EB'}}>Gebrauchtwagen</span>
        </h1>
        <p style={{fontSize:18, color:'#334155', marginBottom:28}}>
          CartTrust.io analysiert deine Eingaben, erstellt eine fahrzeugspezifische Checkliste
          und gibt eine begründete Kaufempfehlung mit Risikostufe.
        </p>

        <div style={{display:'flex', gap:12}}>
          <Link href="/app" style={{
            background:'#2563EB', color:'#fff', padding:'12px 18px',
            borderRadius:10, textDecoration:'none', fontWeight:600
          }}>Kostenlos testen</Link>
          <Link href="/pricing" style={{
            border:'1px solid #cbd5e1', padding:'12px 18px', borderRadius:10,
            textDecoration:'none', color:'#0f172a', fontWeight:600
          }}>Preise ansehen</Link>
        </div>

        <section style={{marginTop:40, display:'grid', gap:20, gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))'}}>
          <Feature title="Vertrauenswürdig" desc="Schild + Haken Logik, klare Risiko-Levels."/>
          <Feature title="Tech/AI" desc="Saubere Regeln + KI-Einschätzungen, versioniert & protokolliert."/>
          <Feature title="Schnell" desc="In wenigen Minuten von Daten zu Empfehlung."/>
        </section>
      </main>
    </>
  );
}

function Feature({title, desc}:{title:string; desc:string}) {
  return (
    <div style={{border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
      <div style={{fontWeight:700, marginBottom:6}}>{title}</div>
      <div style={{color:'#475569'}}>{desc}</div>
    </div>
  );
}
