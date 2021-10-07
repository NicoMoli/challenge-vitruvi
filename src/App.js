import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { CardTask } from "./components/cardTask";
import { useState } from "react";

function App() {
  const tasksMock = [
    {
      id: 1,
      name: "Task Planned 1",
      description: "Task to do with devs",
      estimated: "2",
      status: "planned",
      statusId: 1,
    },
    {
      id: 2,
      name: "Task Planned 2",
      description: "Task to do with devs",
      estimated: "4",
      status: "planned",
      statusId: 1,
    },
    {
      id: 3,
      name: "Task Planned 3",
      description: "Task to do with devs",
      estimated: "5",
      status: "planned",
      statusId: 1,
    },
    {
      id: 4,
      name: "Task In Progress 1",
      description: "Task to do with devs",
      estimated: "2",
      status: "In Progress",

      statusId: 2,
    },
    {
      id: 5,
      name: "Task In Progress 2",
      description: "Task to do with devs",
      estimated: "8",
      status: "In Progress",
      statusId: 2,
    },
    {
      id: 6,
      name: "Task In Progress 3",
      description: "Task to do with devs",
      estimated: "9",
      status: "In Progress",
      statusId: 2,
    },
    {
      id: 7,
      name: "Task Completed 1",
      description: "Task to do with devs",
      estimated: "9",
      status: "Completed",
      statusId: 3,
    },
    {
      id: 8,
      name: "Task Completed 2",
      description: "Task to do with devs",
      estimated: "4",
      status: "Completed",
      statusId: 3,
    },
    {
      id: 9,
      name: "Task Completed 3",
      description: "Task to do with devs",
      estimated: "5",
      status: "Completed",
      statusId: 3,
    },
  ];

  //TODO: add Wrap component
  const [tasks, setTasks] = useState(tasksMock);

  const handleNewTask = (value) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      name: value.name,
      description: value.description,
      estimated: value.estimate,
      status: "Planned",
      statusId: 1,
    };
    const tasksNews = [...tasks];
    tasksNews.push(newTask);
    setTasks(tasksNews);
  };

  const handleRemove = (id) => {
    const newTasks = [...tasks];
    var index = newTasks.findIndex((c) => c.id === id);
    if (index !== -1) newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Heading className="App-header">Challenge Vitruvi</Heading>

        <Box bg="grey" w="100%" p={4} color="white">
          TASKS
        </Box>

        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <CardTask
            tasks={tasks}
            saveTask={handleNewTask}
            removeTask={handleRemove}
            cardStatus={1}
            columnTitle={"Planned"}
          />
          <CardTask
            tasks={tasks}
            saveTask={handleNewTask}
            removeTask={handleRemove}
            cardStatus={2}
            columnTitle={"In Progress"}
          />
          <CardTask
            tasks={tasks}
            saveTask={handleNewTask}
            removeTask={handleRemove}
            cardStatus={3}
            columnTitle={"Completed"}
          />
        </SimpleGrid>
      </div>
    </ChakraProvider>
  );
}

export default App;
