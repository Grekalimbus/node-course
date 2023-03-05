import express from 'express';
import mongoose from 'mongoose';
import Post from './model/Post.js';
import router from './routes/index.js';

const PORT = 5000;
const app = express();
const URL =
  'mongodb+srv://danil:mongoose123@node-course.twnp2ms.mongodb.net/node-course?retryWrites=true&w=majority';
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.get('/', (req, res) => {
  res.status(200).json('Request Get');
});
app.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

async function started() {
  try {
    await mongoose.connect(URL);
    console.log('Conect MongoDB!!!');
    app.listen(PORT, () => {
      console.log(`SERVER STARTED ON PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}
started();
