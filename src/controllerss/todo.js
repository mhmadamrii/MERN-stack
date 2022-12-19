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

exports.getTodos = async(req, res) => {
  try {
    res.send({
      status: 'success',
      data: {
        todos,
      }
    })
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'internal server error'
    })
  }
}

exports.getTodo = async(req, res) => {
  try {
    const id = req.params.id
    const index = id - 1

    res.send({
      status: 'success',
      data: {
        todo: todos[index]
      }
    })
  } catch (error) {
    res.send({
      status: 'failed',
      message: 'internal server error'
    })
  }
}
