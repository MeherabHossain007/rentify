import React from 'react'
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Image,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
      <Image
      alt={'Logo'}
      boxSize={100}
      objectFit={'contain'}
      height={32}
      className="img-responsive"
      src={'https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/Asset%208.png?alt=media&token=0b442e59-df26-485a-acf2-87930906e0d0'}
      />
    );
  };
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          py={4}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Text textAlign={'center'}>© 2021 BPay Limited. All rights reserved</Text>
          
        </Box>
      </Box>
    );
  }