const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.post('/webhook', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Webhook server running at http://localhost:${port}`);
});

