import React from 'react'
import {Card, Tooltip,Typography} from '@mui/material'
import { Box, styled } from '@mui/system'

const  Image = styled('img')({
    height: 300,
    width: '100%',
    objectFit: 'cover'
})
 


const Cardcharacter = ({character}) => {
  return (
   <Card>
      <Tooltip title={
        <Box>
           <Typography>Name: {character.name}</Typography>
           <Typography>Real name: {character.portrayed}</Typography>
           <Typography>Nickname: {character.nickname}</Typography>
           <Typography>Birthday: {character.birthday}</Typography>
           <Typography>Status: {character.status}</Typography>
        </Box>
      }
        arrow placement='top'
      >
      <Image src={character.img} alt={character.name}/>

      </Tooltip>        
   </Card>
  )
}

export default Cardcharacter
