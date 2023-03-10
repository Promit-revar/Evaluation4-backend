const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./src/routes/routes');
const cors = require('cors');
const authMiddleware = require('./src/middlewares/authMiddleware');

app.use(cors());
app.use(authMiddleware.authorizeRequest);
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`backend app listening on port ${port}!`));