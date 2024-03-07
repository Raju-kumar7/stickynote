import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../components/constants/config";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const { token, auth } = useSelector(
    (state) => state.userReducer
    );
    console.log(auth, token)
    if(auth){
      navigate("/notes")
    }

  const handleSingup = async() => {
    let data = await axios.post(BASE_URL+"/user/register",{
      name, email, password
    })
    let {message, status} = data.data
    console.log(data)
    if (status===1) {
      alert(message)
      navigate("/login")
    }else{
      alert(message)
    }
  };
  return (
    <>
      <Flex w={"100%"} padding={4}>
        <Image
          wi={"50%"}
          src={
            "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1676630553~exp=1676631153~hmac=6cbdb020ef439ca463660edbc265da0d05f487d529f69f814ee3f5de6e0f54cc"
          }
        ></Image>
        <VStack w={"50%"}>
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Sign in to your account</Heading>

              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    
                    <Button
                      onClick={handleSingup}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </VStack>
      </Flex>
      
    </>
  );
};

export default SignupPage;
