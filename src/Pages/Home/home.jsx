import React from "react"
import { Container, Flex } from "@chakra-ui/layout"
import Detail from "./detail"
import Card from "./card"

const Home = () => {
  return (
    <Container maxWidth="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 19]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Detail />
        <Card />
      </Flex>
    </Container>
  )
}

export default Home
