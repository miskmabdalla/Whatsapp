const express = require('express');
const bodyParser = require('body-parser');
const webhookController = require('./webhookController');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', webhookController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());
// app.post('/webhook', (req, res) => {
//     console.log(JSON.stringify(req.body, null, 2));
//     res.status(200).send('OK');
//     const incomingMessage = req.body.messages[0][0].text.body;
//     if (incomingMessage == "hi")
//         console.log("hi recieved");
//     else if (incomingMessage == "bye")
//         console.log("bye recieved");
//     else
//         console.log("other message recieved");
// });

// app.listen(port, () => {
//   console.log(`Webhook server running at http://localhost:${port}`);
// });

