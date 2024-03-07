import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import NoteCard from "../components/NotePage/NoteCard/NoteCard";
import { IoAddOutline } from "react-icons/io5";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const NotesPage = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { data } = useSelector((state) => state.noteReducer);
  console.log(data);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const handleCreate = () => {
    dispatch(createNotes({ title, body }));
    onClose();
    setTitle("");
    setBody("");
  };

  useEffect(() => {
    setNote(data);
  }, [data]);

  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        margin={"auto"}
        w={"80%"}
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {note?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>
      <IconButton
        position={"absolute"}
        w={"80px"}
        h={"80px"}
        borderRadius={"50%"}
        left={0}
        top={0}
        onClick={onOpen}
        marginX={10}
        marginY={44}
        bg={"yellowgreen"}
      >
        <IoAddOutline />
      </IconButton>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              value={title}
              placeholder="enter title"
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
            <Textarea
              mt={8}
              value={body}
              placeholder="type your note"
              onChange={(e) => setBody(e.target.value)}
            ></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreate}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NotesPage;
