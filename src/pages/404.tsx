import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "components/NavBar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>Oops</Heading>
        <Text px={2}>
          {isRouteError
            ? "this app not exist!"
            : "Unexpected error has occurred!"}
        </Text>
      </Box>
    </>
  );
};

export default Error;
