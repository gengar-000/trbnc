// Opsiyonel: Lokal geliştirme için küçük bir statik sunucu (npm run dev)
const http = require('http');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(publicDir, urlPath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Local dev on http://localhost:${PORT}`));
