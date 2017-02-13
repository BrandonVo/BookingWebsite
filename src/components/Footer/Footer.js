import React from 'react'
import {
  Toolbar,
  Space,
  NavItem,
} from 'rebass'
import { Box } from 'reflexbox'

const Footer = () => (
  <Box style={{ flex: 'none' }}>
    <Toolbar backgroundColor="white">
      <Space auto />
      <NavItem color="black" href="https://gatherologie.com">
        © 2016 gatherologie
      </NavItem>
    </Toolbar>
  </Box>
)

export default Footer
