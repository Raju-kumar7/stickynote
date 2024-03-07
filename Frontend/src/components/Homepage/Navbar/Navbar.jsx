// "use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/users/user.type";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {auth} = useSelector((state)=>state.userReducer)
  // console.log(auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <>
      <Box  top={0} boxShadow={'rgb(38, 57, 77) 0px 20px 30px -10px;'} bg={'#B8D906'} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontSize={"2xl"} fontWeight={"bold"} cursor={"pointer"} onClick={()=>{navigate('/')}}>Note</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button display={auth?"block":"none"} onClick={()=>{navigate('/notes')}} bg={"yellow"} color={'green'}>All notes</Button>
              <Button display={auth?"none":"block"} onClick={()=>{navigate('/register')}} bg={"yellow"} color={'green'}>Singup</Button>
              <Button display={auth?"none":"block"} onClick={()=>{navigate('/login')}} bg={"yellow"} color={'green'}>Login</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>dispatch({type:LOGOUT})}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
