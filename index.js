const express = require('express')
const path = require('path')
var cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000


//JSON object to be added to cookie 
let token = {
  EHR: Math.random() * 100000000000
};

var app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('pages/index')
  // res.cookie("EHR", token);
  // res.send('EHR data added to cookie');
})
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
