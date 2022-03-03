import { Box, Flex, IconButton, Link, Spacer, Stack, Text } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

function Navbar(props) {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // Responsive Icons
  const MenuIcon = () => (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={isDark ? "#F0F0F0" : "#1A1A1A" }
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill={isDark ? "#F0F0F0" : "#1A1A1A" }
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );

  const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  };

  const MenuLinks = ({ isOpen }) => {
    return (
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={{ sm: "column", md: "row", lg: "row", xl: "row", '2xl': "row"}}
          pt={[4, 4, 0, 0]}
          // wrap="wrap"
        >
          <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem" as={ReactLink} to='/projects'>Projects</Link>
          <Link fontStyle="normal" fontWeight="200" fontSize="1.125rem" as={ReactLink} to='/skills'>Skills</Link>
          <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Stack>
      </Box>
    );
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex direction="row" justify="center" align="center" width="100%" pb="5em" {...props} wrap="wrap">
      <Box>
        <Text fontStyle="normal" fontWeight="200" fontSize="1.5rem">
          <Link as={ReactLink} to='/' style={{ textDecoration: 'none' }}>
            KCC.
          </Link>
        </Text>
      </Box>
        
      <Spacer />

      <MenuToggle toggle={toggle} isOpen={isOpen} />

      <MenuLinks isOpen={isOpen} />
    </Flex>
  )
}

export default Navbar