const { app } = require('./app'); // ✅ Import the app you defined
const app = express();

const PORT = process.env.PORT || 1234;

// Optional health check route
app.get('/', (req, res) => {
  res.send('Server is running and listening on port ' + PORT);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
