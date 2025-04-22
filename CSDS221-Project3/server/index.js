import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();

//Middleware

//app.use(bodyParser.json());
//app.use(cors());

import posts from "./routes/api/posts.js"
app.use('/api/posts', posts);

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const publicPath = join(__dirname, 'public')
  app.use(express.static(publicPath))

  // Fallback for SPA routes (e.g., React, Vue, etc.)
  app.get('*', (req, res) => {
    res.sendFile(join(publicPath, 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));