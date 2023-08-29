import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GamesSkeletons = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton h={"200px"} />
        <CardBody px={2} py={5}>
          <SkeletonText />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GamesSkeletons;
