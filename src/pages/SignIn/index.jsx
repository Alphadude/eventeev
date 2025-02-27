import React, { useState } from "react";
// import svg images and icons
import backgroundImg from "../../assets/images/Log-In.svg";
import Logo from "../../assets/images/Eventeev-logo.svg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
// import chakara ui components
import {
  Box,
  Center,
  Image,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Heading,
  Text,
  Divider,
  AbsoluteCenter,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Checkbox,
} from "@chakra-ui/react";

const SignIn = () => {
  const [clientData, setClientData] = useState({
    email: "",
    password: "",
  });

  // password visibility state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={`log-in-bg bg-cover bg-center`}>
      <Center flexDirection={"column"} paddingY={"10"} className="space-y-6">
        <Box>
          <Image src={Logo} alt="Eventeev 2025" />
        </Box>
        <Card size={"md"} className="w-[464px] h-[550px]" rounded={"xl"}>
          <CardHeader>
            <Heading
              size={"md"}
              textAlign={"center"}
              lineHeight={"7"}
              fontWeight={"bold"}
              height={"fit"}
            >
              Sign in
            </Heading>
            <Text
              fontWeight={"normal"}
              fontSize={"sm"}
              textAlign={"center"}
              lineHeight={"5"}
              marginTop={"3"}
            >
              Enter your credentials to access your account
            </Text>
          </CardHeader>
          <CardBody>
            <Button
              variant={"outline"}
              size={"lg"}
              rounded={"lg"}
              width={"full"}
            >
              <Center gap={"4"} alignItems={"center"}>
                <FcGoogle className="text-2xl" />
                <Text fontWeight={"semibold"} size={"sm"} lineHeight={"5"}>
                  Continue with Google
                </Text>
              </Center>
            </Button>
            <Box position="relative" paddingY="6">
              <Divider />
              <AbsoluteCenter bg={"white"} px="2" fontSize={"sm"}>
                OR
              </AbsoluteCenter>
            </Box>
            <FormControl marginY={"2.5"}>
              <FormLabel fontSize={"sm"} fontWeight={"medium"}>
                Email Address
              </FormLabel>
              <Input
                type="email"
                size={"lg"}
                value={clientData.email}
                focusBorderColor="orange.300"
              />
            </FormControl>
            <FormControl marginTop={"5"}>
              <FormLabel fontSize={"sm"} fontWeight={"medium"}>
                Password
              </FormLabel>
              <Input
                type={isPasswordVisible ? "text" : "password "}
                size={"lg"}
                value={clientData.password}
                focusBorderColor="orange.300"
              />
            </FormControl>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              marginTop={"5"}
              fontSize={"sm"}
            >
              <Checkbox
                colorScheme="orange"
                // iconColor="#EB5017"
                fontWeight={"medium"}
                className="text-sm"
                lineHeight={"5"}
              >
                Remember me for 30 days
              </Checkbox>
              <Link
                to={{
                  pathname: "/",
                }}
                className="font-medium leading-[20.3px]"
                style={{ color: "#EB5017" }}
              >
                Forgot Password?
              </Link>
            </Flex>
          </CardBody>
          <CardFooter>
            <Button
              variant={"solid"}
              size={"lg"}
              color={"white"}
              bg={"#EB5017"}
              colorScheme="orange"
              rounded={"lg"}
              width={"full"}
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>
        <Center>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            className="bg-white h-[52px] w-[266px] py-4 px-6 space-x-1 rounded-[30px] text-sm leading-5"
          >
            <Text className="font-normal">Don't have an account?</Text>
            <Link
              to={{
                pathname: "/signup",
              }}
              className="font-semibold leading-[20.3px] text-[#EB5017]"
              style={{ color: "#EB5017" }}
            >
              Sign up
            </Link>
          </Flex>
        </Center>
      </Center>
    </div>
  );
};

export default SignIn;
