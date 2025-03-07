import { Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  

  return (
    <VStack>
    <Image src={imageSrc} />
    <Text fontWeight="bold">{title}</Text>
    <Text>{description}</Text>
    <Link href="#">
      See More
      <FontAwesomeIcon icon={faArrowRight} size="1x"/>
    </Link>
  </VStack>
  );
};

export default Card;
