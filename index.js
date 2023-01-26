const express = require('express');
var cors = require('cors')
const app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors())

let users = []

const products = [
  {
      "id": 1,
      "title": "Bronx Dish Draine",
      "description": "Part of the Bronx kitchen range, this stylish dish drainer is made from durable black wire and finished with wooden handles. Available as a single or with a second tier. Co-ordinating items are also available.",
      "add_date": "2023-01-09",
      "on_sale": false,
      "final_price": 19.99,
      "full_price": 19.99,
      manufacturer: "Joules"

  },
  {
      "id": 2,
      "title": "Set of 2 Speckle Mugs",
      "description": "Dishwasher safe, microwaveable.",
      "on_sale": true,
      "final_price": 19.99,
      "full_price": 29.99,
      manufacturer: "Emma Bridgewater"

  },
  {
      "id": 3,
      "title": "Table Cloth",
      "description": "Instantly update your dining table with this tablecloth perfect for family dining.",
      "on_sale": true,
      "final_price": 19.99,
      "full_price": 29.99,
      manufacturer: "Emma Bridgewater"
  }
]

app.get("/", (req, res) => {
    res.send("I will be shown on the Browser");
    console.log("I will be shown on the Terminal");
});

app.post('/auth/login', (request, response) => {
    response.json({email: 'test555@example.com', name: 'liron', password: '2020200'});
  });

// new API route: GET /users, returning a list of users
app.get('/events', (request, response) => {
    response.json(events)
  });

  app.get('/products', (request, response) => {
    response.json(products)
  });

  app.get('/products/:id', (request, response) => {
    response.json(products.filter(product => product.id === Number(request.params.id))[0]);
  });

  app.post('/signup', (req, res) => {
    users.push(req.body)
    res.code(200)
  })
  
  // DELETE user
  app.delete('/users', (request, response) => {
    response.json({ result: 'success' });
  });

app.listen(3001, () => {
  console.log('Our app is listening for request on port 3001');
});