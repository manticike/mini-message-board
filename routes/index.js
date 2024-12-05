// routes/index.js
const express = require('express');
const router = express.Router();

// A sample array of messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Index route
router.get('/', (request, response) => {
  response.render("index", { title: "Mini Messageboard", messages: messages });
});

// New message form route
router.get('/new', (request, response) => {
  response.render('form');
});

// Handle form submission
router.post('/new', (request, response) => {
  const { messageText, messageUser } = request.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  response.redirect("/");
});

// Message details route
router.get("/message/:id", (request, response) => {
  const message = messages[request.params.id];
  response.render("message", { message });
});

// Exporting the route
module.exports = router;