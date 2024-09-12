const express = require('express');
const bodyParser = require('body-parser');
const AssistantV1 = require('ibm-watson/assistant/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const assistant = new AssistantV1({
  version: '2021-06-14', // Replace with your version
  authenticator: new IamAuthenticator({
    apikey: process.env.ASSISTANT_APIKEY,
  }),
  serviceUrl: process.env.ASSISTANT_URL,
});

let sessionId;

app.post('/create-session', async (req, res) => {
  try {
    const response = await assistant.createSession({
      assistantId: 'f17dc782-3338-4a73-a03d-933b43423fa0', // Replace with your Assistant ID
    });
    sessionId = response.result.session_id;
    res.json({ sessionId });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/message', async (req, res) => {
  try {
    const response = await assistant.message({
      assistantId: 'f17dc782-3338-4a73-a03d-933b43423fa0', // Replace with your Assistant ID
      sessionId: sessionId,
      input: {
        'message_type': 'text',
        'text': req.body.message,
      },
    });
    res.json(response.result.output.generic[0].text);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});