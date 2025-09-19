export default async function handler(req, res) {
  try {
    const destDomain = process.env.PLESK_DOMAIN || "https://YOUR-PLESK-DOMAIN.TLD";
    const destUrl = new URL(destDomain);
    const forwardPath = req.query.path?.join('/') || '';
    const url = `${destUrl.origin}/api/${forwardPath}${req.url.includes('?') ? ('?' + req.url.split('?')[1]) : ''}`;

    const method = req.method || 'GET';
    const headers = { ...req.headers };
    delete headers['host'];
    delete headers['x-vercel-deployment-url'];
    delete headers['x-vercel-id'];

    const body = ['GET','HEAD'].includes(method) ? undefined : req.body;

    const resp = await fetch(url, { method, headers, body });
    const buf = Buffer.from(await resp.arrayBuffer());
    res.status(resp.status);
    for (const [k, v] of resp.headers.entries()) {
      if (k.toLowerCase() === 'transfer-encoding') continue;
      res.setHeader(k, v);
    }
    res.send(buf);
  } catch (e) {
    res.status(502).json({ error: 'proxy_error', message: e?.message || String(e) });
  }
}
