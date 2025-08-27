'use client';

import Header from '@/components/Header';
import { useState } from 'react';

type Result = { riskLevel: 'LOW'|'MEDIUM'|'HIGH'; summary: string; checklist: string[] };

export default function AppPage() {
  const [vin, setVin] = useState('');
  const [mileage, setMileage] = useState<number | ''>('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<Result | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRes(null);
    const r = await fetch('/api/check', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ vin, mileage, desc })
    });
    const data = await r.json();
    setRes(data);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main style={{maxWidth:960, margin:'0 auto', padding:'32px 20px', display:'grid', gap:20}}>
        <h1 style={{fontSize:28}}>Fahrzeug prüfen (MVP)</h1>
        <form onSubmit={submit} style={{display:'grid', gap:12, border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
          <label>VIN / Fahrgestellnummer
            <input value={vin} onChange={e=>setVin(e.target.value)} placeholder="z. B. WAUZZZ..." required
              style={{width:'100%', padding:10, border:'1px solid #cbd5e1', borderRadius:8}}/>
          </label>
          <label>Kilometerstand
            <input value={mileage} onChange={e=>setMileage(Number(e.target.value)||'')} type="number" min={0}
              placeholder="z. B. 84500" required
              style={{width:'100%', padding:10, border:'1px solid #cbd5e1', borderRadius:8}}/>
          </label>
          <label>Beschreibung / Hinweise
            <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="z. B. Geräusche, Servicehistorie..."
              style={{width:'100%', padding:10, border:'1px solid #cbd5e1', borderRadius:8, minHeight:90}}/>
          </label>
          <button disabled={loading} type="submit" style={{
            background:'#2563EB', color:'#fff', padding:'12px 16px', borderRadius:10, fontWeight:700, border:'none'
          }}>
            {loading ? 'Prüfe…' : 'Check starten'}
          </button>
        </form>

        {res && (
          <section style={{border:'1px solid #e2e8f0', borderRadius:12, padding:16}}>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:8}}>
              <span style={{
                width:10, height:10, borderRadius:9999,
                background: res.riskLevel==='LOW' ? '#10B981' : res.riskLevel==='MEDIUM' ? '#F59E0B' : '#EF4444'
              }}/>
              <strong>Risiko: {res.riskLevel}</strong>
            </div>
            <p style={{color:'#334155', marginBottom:10}}>{res.summary}</p>
            <ul style={{paddingLeft:18}}>
              {res.checklist.map((c,i)=>(<li key={i}>{c}</li>))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}
