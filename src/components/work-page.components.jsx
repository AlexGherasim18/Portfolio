import { Box, Grid, GridItem, Heading, Image, useColorMode, Icon, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Fragment } from "react";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

const WorkPage = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const animationKeyfram = keyframes`
    from {opacity: 0; transform: translateY(20%)}
    to {opacity: 1; transform: translateY(0)}
  `;
  const animation = `${animationKeyfram} 1s ease-in-out forwards`
  const linkStyle = {
    borderRadius: '30%',
    paddingY: '10px',
    paddingX: '15px',
    fontSize:'26px',
    _hover: {
        bgColor: colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.900',
        color: 'whiteAlpha.900'
    }
  }
  return (
    <Fragment>
    <Heading as='h2' fontSize='24px' marginTop='150px' marginBottom='30px' animation={animation}>My Projects</Heading>
    <Box width='960px' margin='auto' animation={animation} marginBottom='60px'>
      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <GridItem borderRadius='30px' bgColor={colorMode === 'light' ? 'orange.100' : 'gray.400'} paddingY = '30px' display='flex' flexDirection='column' alignItems='center' color='blackAlpha.900'>
          <Image borderRadius='30px' w='360px' h='200px' src={require('../avatar/starbucks.png')} alt='starbucks'/>
          <Heading fontSize='18px' paddingTop='10px'>Starbucks Clone</Heading>
          <Text marginTop='6px'>Tech: React, Styled-Components, Firebase</Text>
          <Box paddingTop='8px' display='flex' flexDirection='row' justifyContent='space-between'>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://tubular-douhua-ecad65.netlify.app/" target='_blank'>
                <Icon as={BsLink45Deg}/>
              </a>
            </Box>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://github.com/AlexGherasim18/Starbucks-Clone" target='_blank'>
                <Icon as={BsGithub}/>
              </a>
            </Box>
          </Box>
        </GridItem>

        <GridItem borderRadius='30px' bgColor={colorMode === 'light' ? 'orange.100' : 'gray.400'} paddingY='30px' display='flex' flexDirection='column' alignItems='center' color='blackAlpha.900'>
          <Image borderRadius='30px' w='360px' h='200px' src={require('../avatar/weather-app.png')} alt='weather'/>
          <Heading fontSize='18px' paddingTop='10px'>Weather App</Heading>
          <Text marginTop='6px'>Tech: HTML, Sass, JavaScript</Text>
          <Box paddingTop='15px' display='flex' flexDirection='row' justifyContent='space-between'>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://peaceful-moxie-5759b3.netlify.app/" target='_blank'>
                <Icon as={BsLink45Deg}/>
              </a>
            </Box>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://github.com/AlexGherasim18/Weather" target='_blank'>
                <Icon as={BsGithub}/>
              </a>
            </Box>
          </Box>
        </GridItem>

        <GridItem borderRadius='30px' bgColor={colorMode === 'light' ? 'orange.100' : 'gray.400'} paddingY='30px' display='flex' flexDirection='column' alignItems='center' color='blackAlpha.900'>
          <Image borderRadius='30px' w='360px' h='200px' src={require('../avatar/advice-generator.png')} alt='advice'/>
          <Heading fontSize='18px' paddingTop='10px'>Advice Generator</Heading>
          <Text marginTop='6px'>Tech: HTML, CSS, JavaScript</Text>
          <Box paddingTop='15px' display='flex' flexDirection='row' justifyContent='space-between'>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://teal-dasik-47f45a.netlify.app/" target='_blank'>
                <Icon as={BsLink45Deg}/>
              </a>
            </Box>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://github.com/AlexGherasim18/Advice-Generator" target='_blank'>
                <Icon as={BsGithub}/>
              </a>
            </Box>
          </Box>
        </GridItem>

        <GridItem borderRadius='30px' bgColor={colorMode === 'light' ? 'orange.100' : 'gray.400'} paddingY='30px' display='flex' flexDirection='column' alignItems='center' color='blackAlpha.900'>
          <Image borderRadius='30px' w='360px' h='200px' src={require('../avatar/to-do-list.png')} alt='todo'/>
          <Heading fontSize='18px' paddingTop='10px'>ToDo App</Heading>
          <Text marginTop='6px'>Tech: HTML, CSS, JavaScript</Text>
          <Box paddingTop='15px' display='flex' flexDirection='row' justifyContent='space-between'>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://tiny-bombolone-4d7ae5.netlify.app/" target='_blank'>
                <Icon as={BsLink45Deg}/>
              </a>
            </Box>
            <Box sx={linkStyle}>
              <a rel="noreferrer" href="https://github.com/AlexGherasim18/My-To-Do-List" target='_blank'>
                <Icon as={BsGithub}/>
              </a>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
    <Box fontSize='14px' color='gray.500'>&#169; Alexandru Gherasim. All Rights Reserved.</Box>
    </Fragment>
  )
}

export default WorkPage;