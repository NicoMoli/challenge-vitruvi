import { Box, Button, SimpleGrid, Select } from "@chakra-ui/react";

export const CardTask = ({ tasks, columnTitle, cardStatus }) => {
  return (
    <SimpleGrid columns={[1, null, 1]} spacing="40px">
      <Box bg="tomato" w="100%" p={4} color="white">
        {columnTitle}
      </Box>

      {tasks
        .filter((c) => c.statusId === cardStatus)
        .map((item) => (
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {item.name}
            </Box>
            <Box color="gray.600">{item.description}</Box>
            <Button colorScheme="teal" variant="outline" fontSize={15}>
              {" "}
              Remove Task
            </Button>

            <Select size="sm" variant="filled" placeholder="Change state">
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
          </Box>
        ))}
    </SimpleGrid>
  );
};
