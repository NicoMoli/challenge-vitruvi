import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

export const CreateTaskModal = ({
  initialRef,
  finalRef,
  isOpen,
  onCloseModal,
}) => {
  const validateName = (value) => {
    let error;
    if (!value) {
      error = `Name is required`;
    }
    return error;
  };

  const validateDescription = (value) => {
    let error;
    if (!value) {
      error = `Description is required`;
    }
    return error;
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onCloseModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{ name: "", description: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => (
                <Form>
                  <Field name="name" validate={validateName}>
                    {({ field, form }) => (
                      <Box>
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input {...field} id="name" placeholder="name" />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      </Box>
                    )}
                  </Field>
                  <Field name="description" validate={validateDescription}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.description && form.touched.description
                        }
                      >
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input
                          {...field}
                          id="description"
                          placeholder="Description"
                        />
                        <FormErrorMessage>
                          {form.errors.description}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="estimate">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="estimate">Estimate</FormLabel>
                        <Input
                          {...field}
                          type="number"
                          id="estimate"
                          placeholder="estimate"
                        />
                        <FormErrorMessage>
                          {form.errors.estimate}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <ButtonGroup mt={10}>
                    <Button
                      colorScheme="teal"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button onClick={onCloseModal}>Cancel</Button>
                  </ButtonGroup>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
