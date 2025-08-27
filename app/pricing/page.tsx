import Header from '@/components/Header';
import { plans } from '@/lib/pricing';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main style={{maxWidth:980, margin:'0 auto', padding:'48px 20px'}}>
        <h1 style={{fontSize:32, marginBottom:8}}>Preise</h1>
        <p style={{color:'#475569', marginBottom:24}}>Wähle das passende Paket. Alle Preise netto.</p>
        <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))'}}>
          {plans.map(p=>(
            <div key={p.id} style={{border:'1px solid #e2e8f0', borderRadius:12, padding:18}}>
              <div style={{fontWeight:700, marginBottom:6}}>{p.name}</div>
              <div style={{fontSize:28, fontWeight:800, color:'#0f172a'}}>
                {p.price === 0 ? '€0' : `€${p.price.toFixed(2)}`} <span style={{fontSize:14, color:'#64748b'}}>{p.period}</span>
              </div>
              <div style={{margin:'8px 0 14px', color:'#334155'}}>{p.checks} Checks {p.note ? `• ${p.note}` : ''}</div>
              <Link href={`/checkout/${p.id}`} style={{
                display:'inline-block', textDecoration:'none', background:'#2563EB',
                color:'#fff', padding:'10px 14px', borderRadius:10, fontWeight:700
              }}>Auswählen</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
