import { Badge, Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  items?: string[];
  badge?: number;
}
const Attribute = ({ title, items, badge }: Props) => {
  return (
    <Box>
      <Text color="gray.600" fontWeight="bold">
        {title}
      </Text>
      <Box mx={1}>
        {items?.map((item) => (
          <Text key={item.toString()}>{item}</Text>
        ))}
        {!!badge && (
          <Badge borderRadius={5} px={2} colorScheme="green">
            {badge}
          </Badge>
        )}
      </Box>
    </Box>
  );
};

export default Attribute;
