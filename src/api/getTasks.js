import tasks from "../mocks/tasksMocks.json"

const getTasks = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(tasks)
    }, 1000)
  })
}

export default getTasks
