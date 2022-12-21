const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 5000;

// body-parser
app.use(express.json());



// entry point => rouutes => controllers
app.use('/api/v1/', router)
app.listen(port, () => console.log(`Server listening on port ${port}`));
