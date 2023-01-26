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
const events = [
    {
        "id": 1,
        "title": "סיור ביערות הכרמל",
        "description": "סיור ארוך ממש ביערות הכרמל . סיור ארוך ממש ביערות הכרמל \r\nסיור ארוך ממש ביערות הכרמל \r\nסיור ארוך ממש ביערות הכרמל",
        "start_date": "2023-01-09",
        "start_time": "11:49:13",
        "end_date": "2023-01-09",
        "end_time": "12:49:16",
        "location": "רמת הגולן וגליל עליון"
    },
    {
        "id": 2,
        "title": "סיור במערת הקשת",
        "description": "סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת סיור במערת הקשת",
        "start_date": "2023-01-09",
        "start_time": "22:32:14",
        "end_date": "2023-01-11",
        "end_time": "22:32:21",
        "location": "רמת הגולן וגליל עליון"
    },
    {
        "id": 3,
        "title": "סיור ביער יער יער יער יער יער יער יער יער יער יער יער יער",
        "description": "יער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יעריער יער יער יער יער יער יער יער יער יער יער יער יער יער יער יער",
        "start_date": "2023-01-27",
        "start_time": "07:36:52",
        "end_date": "2023-01-31",
        "end_time": "07:37:01",
        "location": "הר הנגב והערבה"
    }
]

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