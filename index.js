const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require('./src/routes')
const dotenv = require('dotenv')
dotenv.config()

// body-parser
app.use(express.json());



// entry point => rouutes => controllers
app.use('/api/v1/', router)
app.listen(port, () => console.log(`Server listening on port ${process.env.PORT}`));
