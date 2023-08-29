import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const LIMIT = 300;
interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, LIMIT) + "... ";
  return (
    <Text maxWidth="3xl">
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded((e) => !e)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
