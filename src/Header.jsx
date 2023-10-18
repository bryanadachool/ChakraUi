import React from "react";
import { Box, Button, Center, Container, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      bgImage="url('descarga.jpg')" // Cambia la URL de la imagen de fondo
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      h="50vh"
      color="white"
      position="relative"
    >
      <Container>
        <Center h="100%">
          <Box textAlign="center">
            <Text color="black"fontSize="50px">domina la programacion</Text>
            
            <Button
              bg="#555"
              color="white"
              _hover={{ bg: "#333" }}
              size="lg"
              mr={4}
            >
              Ver Detalle
            </Button>
            <Button
              bg="#555"
              color="white"
              _hover={{ bg: "#333" }}
              size="lg"
            >
              Ver Video
            </Button>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}

export default Header;