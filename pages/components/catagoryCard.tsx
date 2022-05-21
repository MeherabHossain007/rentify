import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    VStack,
  } from '@chakra-ui/react';
  
  export default function HomeCard({Title}) {
    return (
      <VStack
      justify={"center"}
      >
       <Box
          as={'a'}
          p={16}
          height={'150px'}
          w={'300px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'lg'}
          _hover={{
            boxShadow:'2xl',
          }}
          rounded={'lg'}
          pos={'relative'}
          display={"flex"}
          flexDirection="column"
          alignItems="center"
          >
          <Stack  alignContent={"center"} direction="row" flex={1}>
            <Heading color={'black.500'} fontSize={'lg'} textTransform={'uppercase'} fontWeight="bold">
              {Title}
            </Heading>
          </Stack>
        </Box> 
      </VStack>
        
    );
  }