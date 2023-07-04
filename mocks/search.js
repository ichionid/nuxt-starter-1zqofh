export default function (req, res) {
  if (req.url === '/api/posts') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([{ id: 1, title: 'Mocked Post' }]));
  }
}
