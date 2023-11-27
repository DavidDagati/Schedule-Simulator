import express, { Express, Request, Response , Application } from 'express';
import session from 'express-session';
import mongoose, { mongo } from 'mongoose';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import { user } from './controllers/UserController';
import { program } from './controllers/ProgramController';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({extended: false}))
app.use(express.json())

async function connectMongoose() {
  mongoose.connection.on('connected', () => {
    console.log('connected to mongo')
  })
  mongoose.connection.on(
    'error',
    () => {
      console.error('mongo error')
    }
  )
  try {
    await mongoose.connect(process.env.mongoUrl as string)
  } catch(err) {
    console.log('could not connect to mongo')
  }
}

connectMongoose()

declare module 'express-session' {
  interface SessionData {
    userId: string | undefined;
  }
}

app.use(
  session({
    secret: 'mySecret', //Put in env config
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}, //Set to config.dev environment setting,
    store: MongoStore.create({
      client: mongoose.connection.getClient() as any
    })
  })
)

//Controllers
program(app)
user(app)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is live at http://localhost:${port}`);
});