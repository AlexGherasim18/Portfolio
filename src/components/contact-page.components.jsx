import { Box, Heading, Link, Text } from "@chakra-ui/react"
import { keyframes } from "@chakra-ui/react";
import { useState } from "react";

const ContactPage = () => {
  const [copyEmail, setCopyEmail] = useState('alexandru.gherasim.dev18@gmail.com')
  const [showCopy, setShowCopy] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(copyEmail);
    setShowCopy(true);
    setTimeout(() => {
      setShowCopy(false)
    }, 2000)
  }

  const animationKeyfram = keyframes`
    from {opacity: 0; transform: translateY(20%)}
    to {opacity: 1; transform: translateY(0)}
  `;
  const animation = `${animationKeyfram} 1s ease-in-out forwards`
  return (
    <Box marginBottom='60px' animation={animation}>
      <Heading marginTop='120px' marginBottom='40px' fontSize='24px'>My socials</Heading>
      <Box margin='auto' w='500px' display='flex' flexDirection='column' alignItems='left'>  
        <Link href="https://www.linkedin.com/in/alexandru-gherasim/" fontSize='16px' color='blue.700' rel='norefferer' target='_blank'>
          https://www.linkedin.com/in/alexandru-gherasim/
        </Link>
        <Link href="https://github.com/AlexGherasim18" fontSize='16px' color='blue.700' rel='norefferer' target='_blank'>
          https://github.com/AlexGherasim18
        </Link>
      </Box>
      <Heading marginTop='120px' marginBottom='40px' fontSize='24px'>Email</Heading>
      <Text cursor='pointer' onClick={handleClick} fontSize='16px' color='blue.700'>{copyEmail}</Text>
      {showCopy && <Box fontSize='12px' bgColor='green.600' w='200px' marginX='auto' borderRadius='20px' marginTop='15px'>Email Copied in ClipBoard</Box>}
    </Box> 
  )
};

export default ContactPage;