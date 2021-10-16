import React from "react"
import {
  Heading,
  VStack,
  Text,
  HStack,
  AspectRatio,
  Image,
  Button,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"

import skateboard from "../../sources/skateboard.jpg"
const Card = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
  const textColor = useColorModeValue("gray.600", "gray.400")
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Tu Tarjeta</Heading>
        <Text>
          ¿El precio es demasiado duro para tus ojos?
          <Button
            variant="link"
            colorScheme="black"
            onClick={() => {
              toggleColorMode()
            }}
          >
            Puedes cambiar el Tema
          </Button>
        </Text>
      </VStack>
      <HStack spacing={3} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src={skateboard} alt="Paatienta" />
        </AspectRatio>

        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Monedero</Heading>
            <Text color={textColor}>PNYCOMP27541</Text>
          </VStack>

          <Heading size="md" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>

      <VStack spacing={3} w="full" alignItems="stretch">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Subtotal</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Transporte</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Estimacion de impuestos</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={textColor}>Total</Text>
        <Heading size="lg">$162.73</Heading>
      </HStack>
    </VStack>
  )
}

export default Card
