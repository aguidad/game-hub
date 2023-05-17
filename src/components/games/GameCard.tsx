import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Tooltip,
} from "@chakra-ui/react";

import { IconType } from "react-icons";
import { AiFillAndroid, AiFillApple, AiOutlineGlobal } from "react-icons/ai";
import { BsPlaystation, BsXbox } from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { HiDesktopComputer } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import Game from "entities/Game";
import croppedImageUrl from "utils/image-url";

import Emoji from "./Emoji";
import GameCardContainer from "./GameCardContainer";

const icons: { [key: string]: IconType } = {
  pc: HiDesktopComputer,
  playstation: BsPlaystation,
  xbox: BsXbox,
  android: AiFillAndroid,
  mac: AiFillApple,
  linux: DiLinux,
  nintendo: SiNintendo,
  ios: MdPhoneIphone,
  web: AiOutlineGlobal,
};

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { name, background_image, parent_platforms } = game;
  const soccer = game.metacritic;
  const soccerColor = soccer > 75 ? "green" : soccer > 60 ? "yellow" : "";

  return (
    <GameCardContainer>
      <Card>
        <Image src={croppedImageUrl(background_image)} h="60%" />
        <CardBody px={1} py={5}>
          <HStack mb={3} justify="space-between">
            <HStack>
              {parent_platforms?.map(({ platform: { id, slug, name } }) => {
                return (
                  <Tooltip key={id} hasArrow label={name}>
                    <span>
                      <Icon as={icons[slug]} color="gray.500" />
                    </span>
                  </Tooltip>
                );
              })}
            </HStack>
            <Badge colorScheme={soccerColor} borderRadius={3} px={2}>
              {soccer}
            </Badge>
          </HStack>

          <HStack justify="space-between">
            <Tooltip label={name}>
              <Heading fontSize="lg" noOfLines={1}>
                {name}
              </Heading>
            </Tooltip>
            <Emoji rating={game.rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
