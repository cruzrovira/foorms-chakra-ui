import React from "react"
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/form-control"

const Detail = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start" w="full">
        <Heading size="2xl">Tus detalles</Heading>
        <Text>Sí ya tiene una cuenta, haga clic aquí para iniciar sesión.</Text>
        <SimpleGrid columns={2} columnGap={3} rowGap={3} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input placeholder="Oscar" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Apellido</FormLabel>
              <Input placeholder="Rovira" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Direccion</FormLabel>
              <Input placeholder="Canton Agua Escondidad" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Ciudad</FormLabel>
              <Input placeholder="La union" />
            </FormControl>
          </GridItem>

          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Pais</FormLabel>
              <Select placeholder="Selecione un pais">
                <option value="es">El Salvador</option>
                <option value="usa">Usa</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultIsChecked>Enviar a la dirección de cobro</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button size="lg" w="full">
              Realizar pedido
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </VStack>
  )
}

export default Detail
