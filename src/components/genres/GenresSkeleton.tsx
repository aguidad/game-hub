import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenresSkeleton = () => {
  const skeletons = Array.from({ length: 9 }, (_, i) => i.toString());

  return (
    <>
      {skeletons.map((key) => (
        <HStack key={key} my={5}>
          <SkeletonCircle boxSize={10} />
          <SkeletonText flex={1} />
        </HStack>
      ))}
    </>
  );
};

export default GenresSkeleton;
