const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
const middleware = require('./src/middlewares/validateUser');
app.get('/',middleware.validateRequest,(req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`backend app listening on port ${port}!`));