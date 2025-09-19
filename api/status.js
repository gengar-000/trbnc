export default async function handler(req, res){
  const base = process.env.PLESK_DOMAIN || "https://YOUR-PLESK-DOMAIN.TLD";
  try{
    const r = await fetch(`${base}/api/status`, { headers: { 'Accept':'application/json' } });
    const text = await r.text();
    res.status(r.status).send(text);
  }catch(e){
    res.status(502).json({ error:'upstream_error', message: e?.message || String(e) });
  }
}