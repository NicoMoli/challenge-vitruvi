import "./App.css"
import { ChakraProvider, Box, SimpleGrid, Heading } from "@chakra-ui/react"

import { CardTask } from "./components/cardTask"
import { useEffect, useState } from "react"
import getTasks from "./api/getTasks"

function App() {
  const [tasks, setTasks] = useState()
  const [error, setError] = useState(null)

  const status = [
    {
      id: 1,
      statusName: "Planned",
    },
    {
      id: 2,
      statusName: "In Progress",
    },
    {
      id: 3,
      statusName: "Completed",
    },
  ]

  useEffect(async () => {
    try {
      const tasksReceived = await getTasks()
      setTasks(tasksReceived)
    } catch (error) {
      console.log("Error ", error)
      setError(error)
    }
  }, [])

  const handleNewTask = (value) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      name: value.name,
      description: value.description,
      estimated: value.estimate,
      status: "Planned",
      statusId: 1,
    }

    const tasksNews = [...tasks]
    tasksNews.push(newTask)
    setTasks(tasksNews)
  }

  const handleRemove = (id) => {
    const newTasks = [...tasks]
    const index = newTasks.findIndex((c) => c.id === id)
    if (index !== -1) newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const changeState = (id, statusId) => {
    const newTasks = [...tasks]

    const tasksWithStateChanged = newTasks.map((item) =>
      item.id === id
        ? {
            ...item,
            status: status.find((c) => c.id === statusId).statusName,
            statusId: statusId,
          }
        : item
    )

    setTasks(tasksWithStateChanged)
  }

  return (
    <ChakraProvider>
      <div className="App">
        {!error ? (
          <Box>
            <Heading m={4}>TASK BOARD</Heading>

            <SimpleGrid columns={[2, null, 3]} spacing="40px">
              <CardTask
                tasks={tasks}
                saveTask={handleNewTask}
                removeTask={handleRemove}
                changeState={changeState}
                cardStatus={1}
                columnTitle={"Planned"}
              />
              <CardTask
                tasks={tasks}
                saveTask={handleNewTask}
                removeTask={handleRemove}
                changeState={changeState}
                cardStatus={2}
                columnTitle={"In Progress"}
              />
              <CardTask
                tasks={tasks}
                saveTask={handleNewTask}
                removeTask={handleRemove}
                changeState={changeState}
                cardStatus={3}
                columnTitle={"Completed"}
              />
            </SimpleGrid>
          </Box>
        ) : (
          <Box> Ha ocurrido un error inesperado!</Box>
        )}
      </div>
    </ChakraProvider>
  )
}

export default App
