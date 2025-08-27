'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'12px 20px', borderBottom:'1px solid #e5e7eb', background:'#ffffff'
    }}>
      <Link href="/" style={{display:'flex', gap:10, alignItems:'center', textDecoration:'none'}}>
        <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#1E3A8A"/><stop offset="1" stopColor="#2563EB"/>
            </linearGradient>
          </defs>
          <path d="M10 22c0-5 12-14 22-14s22 9 22 14v14c0 10-12 20-22 20S10 46 10 36V22z" fill="url(#g)"/>
          <path d="M20 34h24c1 0 2 .8 2 1.8v0c0 1-.8 1.8-1.8 1.8H19.8A1.8 1.8 0 0 1 18 35.8v0c0-1 1-1.8 2-1.8z" fill="#fff" opacity=".9"/>
          <path d="M23 30c4-4 14-4 18 0" stroke="#fff" strokeWidth="2" fill="none" opacity=".95"/>
          <path d="M40 27l5-5" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
          <path d="M45 22l3-3" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span style={{fontWeight:700, color:'#0f172a'}}>CartTrust<span style={{color:'#2563EB'}}>.io</span></span>
      </Link>
      <nav style={{display:'flex', gap:14}}>
        <Link href="/pricing">Preise</Link>
        <Link href="/app">App</Link>
        <a href="mailto:hello@carttrust.io">Kontakt</a>
      </nav>
    </header>
  );
}
