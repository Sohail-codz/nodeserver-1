
//boiler plate for expressjs
const express = require('express');

const app = express();

const bodyPraser = require('body-parser');

const USERS = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.use(bodyPraser.urlencoded({extended:false}))

app.get('/',(req, res)=>{
    res.send('Hello , good to see you at the second')
})

app.get('/about',(req, res)=>{
  res.sendFile(__dirname + '/about.html')
})

app.get('/users',(req, res)=>{
    res.json(USERS)
})

app.get('/users/odd',(req, res)=>{
  res.json(USERS.filter(users => users.id%2 !=0 ))
})

app.get('/download-image',(req, res)=>{
  res.download(__dirname + '/lonely-lofi-boy-aesthetic-thumb.png')
})

app.get('/studentdetails',(req, res)=>{
    const studentDetails={
        firstName: 'Sohail',
        lastName: 'Aftab',
        batch: 'jj',
        teachStack: 'MERN',
        tag: 'hello am here'
    }
    // res.send(studentDetails)
    res.json(studentDetails)
})

app.get('/register',(req, res)=>(
  res.sendFile(__dirname + '/register.html')
))

app.post('/api/register',(req, res)=>{
  const {firstName,lastName} = req.body
  console.log(req.body)
  res.send(firstName + " " + lastName)
})

app.listen(3000,()=>{
    console.log('server running at http://localhost:3000/');
})