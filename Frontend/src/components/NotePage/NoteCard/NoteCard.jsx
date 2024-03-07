import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./style.css";
import notebg from "../../../assets/note_bg.png";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import { useDispatch } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const NoteCard = ({ title, body, user, _id }) => {
  const dispatch = useDispatch();
  const [temptitle, setTitle] = useState("");
  const [tempbody, setBody] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleUpdate=()=>{
    dispatch(updateNotes(_id,{title:temptitle, body:tempbody}))
    onClose()
  }

  return (
    <Card backgroundImage={`url(${notebg})`} className="card">
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>
          <Flex gap={2}>
            <>
            <Button onClick={onOpen}>Update</Button>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Update your note</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <Input
                    value={temptitle}
                    placeholder="enter title"
                    onChange={(e) => setTitle(e.target.value)}
                  ></Input>
                  <Textarea
                    mt={8}
                    value={tempbody}
                    placeholder="type your note"
                    onChange={(e) => setBody(e.target.value)}
                  ></Textarea>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                    Update
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button onClick={() => {dispatch(deleteNotes(_id))}}>Delete</Button>
            </>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
