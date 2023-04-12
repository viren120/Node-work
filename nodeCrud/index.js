import  bodyParser from 'body-parser';
import  express  from 'express' ;

import usersRouter from './routes/users.js';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/users' , usersRouter);

app.get('/', (req, res) => {
  console.log('TEST');
  res.end('hello from HomePage'); 
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
