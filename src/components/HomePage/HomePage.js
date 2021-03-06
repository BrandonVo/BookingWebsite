import React from 'react'

import { Flex } from 'reflexbox'
import {
  Heading,
  Banner,
  Container,
  Section,
  SectionHeader,
} from 'rebass'

const HomePage = () => (
  <Flex column style={{ flex: '1 0 auto' }}>
    <Banner
      style={{ minHeight: '75vh', backgroundAttachment: 'scroll' }}
      backgroundImage='http://weknowyourdreams.com/images/wedding/wedding-02.jpg'
      m={0}
    >
      <Heading size={2} big>
        discover, book, and pay for your Wedding
      </Heading>
    </Banner>
    <Container pb={3}>
      <Section pb={0}>
        <SectionHeader heading="About" />
        <p style={{ fontSize: '20px' }}>
            Text for about goes here
        </p>
      </Section>
    </Container>
  </Flex>
)

export default HomePage
