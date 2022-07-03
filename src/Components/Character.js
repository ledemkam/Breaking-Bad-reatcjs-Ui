import { Box,Grid } from '@mui/material'
import {useEffect,useState}  from 'react'
import { fetchData } from '../Assets/ServiceApi/Api'
import Cardcharacter from './Cardcharacter'

const Character = ({text}) => {

    const [characters,setCharacters] = useState([])

    useEffect(() => {
        getData()
     },[text])

     const getData = async () => {
        let reponse = await fetchData(text);
        console.log(reponse.data)
        setCharacters(reponse.data)
     }
  return (
      <Box style={{margin: 20}}>
         <Grid container spacing={4}>
         {
            characters.map(character => (
               <Grid item xs={3}>
                 <Cardcharacter character={character} key={character.char_id}/>
               </Grid>
                ))
         }
         </Grid>
      </Box>
  )
}

export default Character
