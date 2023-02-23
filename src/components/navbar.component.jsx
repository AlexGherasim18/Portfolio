import { Box, Icon, Button, Flex } from "@chakra-ui/react"
import {BsFillPenFill} from 'react-icons/bs'
import ToggleColorMode from "./toggle-color-mode.component";
import { useColorModeValue } from "@chakra-ui/react";

const NavBar = ({onPageChange}) => {
  const bg = useColorModeValue('orange.100', 'gray.900')

  return (
    <Box className='navbar' bg={bg} position='fixed' top='0' left='0' w='100%' zIndex='100'>
      <Flex margin='auto' width='920px' alignItems='center' justifyContent='space-between'>
        <Box display={'flex'} alignItems='center' paddingY='6px'>
          <Button variant='ghost' fontSize='18px' onClick={() => onPageChange('homePage')}> 
            <Icon as={BsFillPenFill} marginRight='10px'/>
            <Box>Alex Gherasim</Box>
          </Button>

          <Box marginLeft='40px'>
            <Button variant='link' marginRight='20px' onClick={() => onPageChange('workPage')}>Work</Button>
            <Button variant='link' marginRight='20px' onClick={() => onPageChange('skillsPage')}>Skills & CV</Button>
            <Button variant='link' onClick={() => onPageChange('contactPage')}>Contact me</Button>
          </Box>
        </Box>

        <ToggleColorMode/>
      </Flex>
  </Box>
  )
};

export default NavBar