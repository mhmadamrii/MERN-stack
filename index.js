const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT || 5000;

let todos = [
  {
    id: 1,
    title: "testing",
    isDone: false,
  },
  {
    id: 2,
    title: "checking",
    isDone: true,
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/todos", (req, res) => {
  res.send({
    data: todos,
  });
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  let data = todos.find((item) => item.id == id);

  if (!data) {
    return res.send({
      status: "failed",
      message: "data not found"
    });
  } else {
    console.log({ data });
  }

  res.send({ data });
});

app.post("/todo", (req, res) => {
  const data = req.body;
  console.log(data);
  todos.push(data);

  res.send({ data });
});

app.patch("/todo/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.map(item => {
    if (item.id == id) {
      return {...req.body}
    } else {
      return item;
    }
  })
  res.send(todos)
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params
  todos = todos.filter(todo => todo.id != id)
  console.log(todos)
  res.send(todos)
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
