import { useColorModeValue } from "@chakra-ui/react";

export default (light?: any, dark?: any) => {
  return useColorModeValue(light || undefined, dark || undefined);
};
