import * as mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
  `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

console.log(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error', err => console.error('connection error:', err));
db.once('open', () => console.log('MongoDB connected.'));
