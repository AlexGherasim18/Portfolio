import { Box, Grid, Icon, Heading, transition } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import {FaReact, FaHtml5, FaCss3Alt, FaSass} from 'react-icons/fa';
import {SiJavascript, SiFirebase, SiChakraui, SiJest, SiStyledcomponents} from "react-icons/si";
import myCV from "../assets/alexandruGherasimCV.pdf"

const SkillsPage = () => {
  const animationKeyfram = keyframes`
    from {opacity: 0; transform: translateY(20%)}
    to {opacity: 1; transform: translateY(0)}
  `;
  const animation = `${animationKeyfram} 1s ease-in-out forwards`;
  const handleIcons = {
    width: '80px',
    height: '80px',
    border: '2px',
    borderRadius: '10px',
    borderColor: 'blackAlpha.500',
    borderStyle: 'solid',
    padding: '10px',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);',
    transition: 'transform 0.6s',
    _hover: {
      transform: 'translateY(-10%)'
    }
  }
  return (
    <Box animation={animation} marginTop='120px'>
      <Heading as='h2' fontSize='24px' marginBottom='40px'>Skills</Heading>
      <Grid templateColumns='repeat(4, 1fr)' gap={3} w='500px' margin='auto'>
        <Icon as={FaHtml5} sx={handleIcons}/>
        <Icon as={FaCss3Alt} sx={handleIcons}/>
        <Icon as={FaSass} sx={handleIcons}/>
        <Icon as={SiJavascript} sx={handleIcons}/>     
        <Icon as={FaReact} sx={handleIcons}/>
        <Icon as={SiFirebase} sx={handleIcons}/>
        <Icon as={SiStyledcomponents} sx={handleIcons}/>
        <Icon as={SiChakraui} sx={handleIcons}/>
        <Icon as={SiJest} sx={handleIcons}/>
      </Grid>

      <a href={myCV} download='alexandruGherasimCV.pdf'>
        <Box marginX='auto' marginTop='60px' borderRadius='10px' bgColor='green.600' width='160px' height='40px' display='flex' justifyContent='center' alignItems='center' cursor='pointer' _hover={{bgColor: 'green.900'}}>Check My CV</Box>
      </a>
    </Box>
  )
};

export default SkillsPage;