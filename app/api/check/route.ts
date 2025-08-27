import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { vin, mileage, desc } = await req.json();

  // Platzhalter-Logik: einfache Heuristik
  const highMileage = Number(mileage) > 160000;
  const riskyWords = /(unfall|rost|kettenrasseln|ölverlust|getriebeproblem)/i.test(desc || '');

  const risk = riskyWords ? 'HIGH' : highMileage ? 'MEDIUM' : 'LOW';

  const checklist = [
    'Probefahrt auf Landstraße & Autobahn',
    'Fehlerauslese (OBD) – Motor/Getriebe',
    'Servicehistorie & Rechnungen prüfen',
    'Unterboden & Schweller auf Rost prüfen',
    'Bremsen/Vibrationen bei 100–120 km/h testen',
    'Kaltstart: Geräusche/Qualm beobachten'
  ];

  const summary =
    risk === 'HIGH'
      ? 'Auffällige Beschreibungen deuten auf hohes Risiko hin. Vor Kauf: professionelle Vor-Ort-Inspektion empfohlen.'
      : risk === 'MEDIUM'
      ? 'Erhöhter Verschleiß möglich. Gründliche Werkstattprüfung vor Kauf sinnvoll.'
      : 'Keine roten Flaggen anhand der Angaben. Trotzdem Probefahrt & Basis-Check durchführen.';

  return NextResponse.json({ riskLevel: risk, summary, checklist });
}
