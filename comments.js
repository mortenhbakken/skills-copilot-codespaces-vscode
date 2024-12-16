// Create web server
// 1. Load express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Send a response with comments data
// 5. Start the server
// 6. Test the server with browser

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('Comments data');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// 7. Run the server with node comments.js
// 8. Open http://localhost:3000/comments in browser
// 9. See 'Comments data' in the browser