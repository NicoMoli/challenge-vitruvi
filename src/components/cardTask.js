import { Box, Button, SimpleGrid, Select, Center } from "@chakra-ui/react";

export const CardTask = ({ tasks, columnTitle, cardStatus}) => {
  return (
    <SimpleGrid columns={[1, null, 1]} spacing="40px">
      <Box bg="tomato" w="100%" p={4} color="white">
        {columnTitle}
      </Box>

      {tasks
        .filter((c) => c.statusId === cardStatus)
        .map((item) => (
          <Box key={item.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box              
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {item.name}
            </Box>
            <Box p={1} color="gray.600">{item.description}</Box>
            <Box p={1} color="gray.600"> Time estimated: {item.estimated} h</Box>
            <Box p={1} color="gray.600"> 
              Difficulty level:  HIGH
            </Box>

            <Button colorScheme="teal" variant="outline" m={2} size="xs">
              {" "}
              Add Task
            </Button>
            <Button colorScheme="red" variant="outline" m={2} size="xs">
              {" "}
              Remove Task
            </Button>

            <Center>
              <Select size="sm" width={40} variant="filled" placeholder="Change state">
                <option
                  disabled={cardStatus === 1 ? true : false}
                  value="option1"
                >
                  Planned
                </option>
                <option
                  disabled={cardStatus === 2 ? true : false}
                  value="option2"
                >
                  In Progress
                </option>
                <option
                  disabled={cardStatus === 3 ? true : false}
                  value="option3"
                >
                  Completed
                </option>
              </Select>
            </ Center>       
          </Box>
        ))}
    </SimpleGrid>
  );
};
