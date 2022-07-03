import React from 'react'
import { AppBar, Toolbar ,styled, InputBase,Box} from '@mui/material'
import logo from '../Assets/Image/logo.png'
import SearchIcon from '@mui/icons-material/Search';

 const StyledHeader = styled(AppBar)`
      background: #000;
      padding: 10px;
 `

 const StyledComponent = styled(Box)`
 background-color: rgb(255,255,255, 0.15);
 margin-left: 20px;
 border-radius: 5px;
 position: relative;
`
const InputBox = styled(InputBase)`
   color: inherit;
   margin: 0 50px;
`
const StyledIcon = styled(SearchIcon)`
    position: absolute;
    top:3px;
    margin-left: 10px;

`




const Header = ({setText}) => {
  const getText = (e) => {
    setText(e.target.value)
  }
  return (
    <StyledHeader position='static'>
    <Toolbar>
    <img src={logo} alt="logo" style={{width: 100}}/>
    <StyledComponent>
    <StyledIcon />
    <InputBox placeholder="...search by name" onChange={getText}/>
    </StyledComponent>
    </Toolbar>
 </StyledHeader>
  )
}

export default Header
