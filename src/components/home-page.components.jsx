import { Box, Container, Heading, useColorModeValue, Avatar, Flex, Text } from "@chakra-ui/react"
import { keyframes } from "@chakra-ui/react";


const HomePage = () => {
  const bg = useColorModeValue('orange.50', 'gray.900')
  const animationKeyfram = keyframes`
  from {opacity: 0; transform: translateY(20%)}
  to {opacity: 1; transform: translateY(0)}
`;
const animation = `${animationKeyfram} 1s ease-in-out forwards`
  return (
    <Container marginTop='160px' animation={animation}>
      <Box bgColor={bg} padding='20px' borderRadius='10px' marginBottom='45px'>
        Hello, welcome to my portfolio website!
      </Box>
      <Flex flexDirection='row' justifyContent='space-between'>
        <Heading as='h2' fontSize='28px'>
          Alexandru Gherasim
          <Text fontSize='initial' fontWeight='light' marginTop='5px'>Self-taught Front-End Developer</Text>
        </Heading>
        <Avatar size='2xl' src={require('../avatar/selfie.jpg')} alt="alex"/>
      </Flex>
      <Heading as='h4' textAlign='left' fontSize='22px' marginTop='20px' textDecoration='underline'>
        About me
      </Heading>
      <Box textAlign='left' marginTop='10px'>
        I graduated from University Of Medicine and Pharmacy "Grigore T. Popa" Iasi, with a major in Physical Therapy. During my professional career I found my passion for programming and accomplished a couple of projects that are presented in Work Section.
        <br /><br />
        I am looking forward to improve my skills and develop new ones alongside a professional team.
      </Box>

      <Heading as='h4' textAlign='left' fontSize='22px' marginTop='20px' textDecoration='underline'>
        Hobbies
      </Heading>
      <Box textAlign='left' marginTop='10px' marginBottom='60px'>
        Walks, Movies, Gym, Basketball, Anatomy, Music, Coding
      </Box>

      <Box fontSize='14px' color='gray.500'>&#169; Alexandru Gherasim. All Rights Reserved.</Box>
    </Container>

  )
};

export default HomePage