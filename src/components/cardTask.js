import {
  Box,
  Button,
  SimpleGrid,
  Select,
  Center,
  useDisclosure,
} from "@chakra-ui/react"
import { useRef } from "react"
import { CreateTaskModal } from "./createTaskModal"

export const CardTask = ({
  tasks,
  columnTitle,
  cardStatus,
  saveTask,
  removeTask,
  changeState,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  const finalRef = useRef()

  const handleChangeState = (e, id) => {
    changeState(id, Number(e.target.value))
  }

  const handleClose = () => onClose()

  return (
    <Box>
      <SimpleGrid columns={[1, null, 1]} spacing="40px">
        <Box bg="tomato" w="100%" p={4} color="white">
          {columnTitle}
        </Box>

        {tasks
          ?.filter((c) => c.statusId === cardStatus)
          .map((item) => (
            <Box
              key={item.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.name}
              </Box>
              <Box p={1} color="gray.600">
                {item.description}
              </Box>
              <Box p={1} color="gray.600">
                {" "}
                Time estimated: {item.estimated} h
              </Box>
              <Box p={1} color="gray.600">
                Difficulty level: HIGH
              </Box>

              <Button
                colorScheme="teal"
                variant="outline"
                m={2}
                size="xs"
                onClick={onOpen}
              >
                {" "}
                Add Task
              </Button>
              <CreateTaskModal
                initialRef={initialRef}
                finalRef={finalRef}
                isOpen={isOpen}
                saveTask={saveTask}
                onCloseModal={handleClose}
              />
              <Button
                colorScheme="red"
                variant="outline"
                m={2}
                size="xs"
                onClick={() => removeTask(item.id)}
              >
                {" "}
                Remove Task
              </Button>

              <Center>
                <Select
                  size="sm"
                  width={40}
                  variant="filled"
                  placeholder="Change state"
                  onChange={(e) => handleChangeState(e, item.id)}
                >
                  <option disabled={cardStatus === 1} value="1">
                    Planned
                  </option>
                  <option disabled={cardStatus === 2} value="2">
                    In Progress
                  </option>
                  <option disabled={cardStatus === 3} value="3">
                    Completed
                  </option>
                </Select>
              </Center>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  )
}
