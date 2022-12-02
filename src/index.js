const config = require('./core/config');
const app = require('./core/server');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
  res.render('pages/index');
})

app.get('/index', async(req, res) =>{
  res.render ('pages/index')
})

app.get('/cart', async(req, res) =>{
  res.render ('pages/cart')
})

app.get('/faq', async(req, res) =>{
  res.render ('pages/faq')
})

app.get('/forgotpw', async(req, res) =>{
  res.render ('pages/forgotpw')
})

app.get('/nav', async(req, res) =>{
  res.render ('pages/nav')
})

app.get('/payment', async(req, res) =>{
  res.render ('pages/payment')
})

app.get('/product1', async(req, res) =>{
  res.render ('pages/product1')
})

app.get('/product2', async(req, res) =>{
  res.render ('pages/product2')
})

app.get('/product3', async(req, res) =>{
  res.render ('pages/product3')
})

app.get('/product4', async(req, res) =>{
  res.render ('pages/product4')
})

app.get('/profile', async(req, res) =>{
  res.render ('pages/profile')
})

app.get('/signup', async(req, res) =>{
  res.render ('pages/signup')
})

// app,post('/signup', async(req, res) =>{
//   var fullname = req.body.full_name;
//   var email = req.body.email;
//   var password = req.body.password;

//   var data = {
//     "name": fullname,
//     "email": email,
//     "phno": phno,
//     "password": password
//   }
// })

app.get('/help', async(req, res) =>{
  res.render ('pages/help')
})


app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server runs at port ${config.port}`);
  }
});

// module.exports = app.
;