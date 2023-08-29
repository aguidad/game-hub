import { Image, ImageProps, Tooltip } from "@chakra-ui/react";

import bullsEye from "assets/bulls-eye.webp";
import thumbs from "assets/thumbs-up.webp";
import meh from "assets/meh.webp";

const Emoji = ({ rating }: { rating: number }) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbs, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
  };
  return (
    <Tooltip label={emojiMap[rating]?.alt}>
      <Image boxSize="20px" {...emojiMap[rating]} />
    </Tooltip>
  );
};

export default Emoji;
