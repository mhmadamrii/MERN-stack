const express = require("express");
const app = express();
const port = 8080;
const router = require('./src/routes')

// body-parser
app.use(express.json());



// entry point => rouutes => controllers
app.use('/api/v1/', router)
app.listen(port, () => console.log(`Server listening on port ${port}`));
