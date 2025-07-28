const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoute")
const postRoute = require("./routes/postRoute")
const getUserWithPostRoute = require("./routes/getUserWithPostRoute")

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoute);
app.use('/api/getUserWithPosts', getUserWithPostRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running 🚀');
  });