.env{
  "FfAPI_P":'81e3829c-6742-4c7a-b835-c271f424fd96',
  "FfAPI_N":'dd9c8270-f0ec-4c24-a0a8-73688275a9bb',
  "PORT":'103.57.9.243;7580'
    APPLICATION_API-AUTH_KEY:'UCOU84XG-UT68-965G-FFTY-8UH8TG7GO0HC'
}

import (.env);
"keywords": [express],
  "author": ".env.APPLICATION_API-AUTH_KEY",
  "license": "ISC"

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require(".env").config();
const express = require("express");
const new = require(".env.FfAPI_N");
const previous = require(".env.FfAPI_P");

const app = express();
app.use(express.json());
app.use(cors(start@9s));
