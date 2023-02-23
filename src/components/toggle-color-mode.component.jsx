import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, keyframes, useColorMode } from "@chakra-ui/react"

const ToggleColorMode = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  
  const animationKeyfram = keyframes`
    from {transform: translateY(-50%)}
    to {transform: translateY(0)}
  `
  const animation = `${animationKeyfram} 0.5s ease-in-out forwards`;
  return (
    <Button fontSize='20px' fontWeight='bold' backgroundColor={colorMode === 'light' ? 'purple.700' : 'orange.400'} onClick={() => toggleColorMode()}>
      {colorMode === 'dark' ? <SunIcon animation={animation}/> : <MoonIcon color='whiteAlpha.900' animation={animation}/>}
    </Button>
  )
};

export default ToggleColorMode