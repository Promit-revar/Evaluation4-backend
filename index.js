const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./src/routes/routes');
app.use(express.json());
app.use(routes);
// app.get('/',middleware.validateRequest,(req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`backend app listening on port ${port}!`));