import { Search } from "@mui/icons-material";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link, useNavigate} from 'react-router-dom'; 
import { useSelector } from "react-redux";
import { mobile } from "../responsive";
 
const Container = styled.div `
height: 80px;
${mobile({ height: "50px" })}
`
const Wrapper= styled.div `
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}

`
const Left= styled.div `
display: flex;
align-items: center;
 flex:1;

`
const Language= styled.span `
font-size: 14 px ; 
cursor: pointer;
${mobile({ display: "none" })}

`
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items:center;
margin-left: 25px;
padding:5px;
`
const Input= styled.input`
border:none;
${mobile({ width: "50px" })}

`
const Center=styled.div `
text-align:center;
display: flex; 
align-items: center;
justify content: center;
flex:1;
margin-left:90px;
 `
const Logo=styled.h1 `
font-weight: bold;
font-size:35px;
cursor:pointer;
${mobile({ fontSize: "24px" })}

`
const Logo1=styled.h1 `
font-weight:lighter;
font-size:35px;
margin-left:5px;
cursor:pointer;
`
const Right=styled.div `
display:flex;
align-items:center;
justify-content:space-between;
flex:1;
${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem=styled.div `
display:flex;
cursor:pointer;
margin:5px; 
color: black;
${mobile({ fontSize: "12px", marginLeft: "10px" })}

`
const Reacts=styled.div `
display:flex;
align-items:center;
justify-content:space-between;
 `

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const navigate= useNavigate ()
  const handleLogin= () => {
  navigate('/login')
   }
const handleRegister= () => {
  navigate('/register')
   }
   
   const handleHome= () => {
    navigate('/')
     }
   
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>FR</Language>
            <SearchContainer>
              <Input placeholder="Search"/>
              <Search style={{color:"gray",fontSize:16}} />
            </SearchContainer>
          </Left>
          <Center onClick={handleHome}>
             <Logo>SHOPPY </Logo> <Logo1>STORE</Logo1>
          </Center>
          <Right>
            <MenuItem onClick={handleRegister}>REGISTER</MenuItem>
            <MenuItem onClick={handleLogin}>SIGN IN </MenuItem>
                        <MenuItem><a href="#about">ABOUT </a> </MenuItem> 
           
            <MenuItem ><a  href="#contact">   CONTACT  </a></MenuItem>
            <MenuItem>
            <Reacts>
            <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
             <ShoppingCartOutlinedIcon />
            </Badge>
            </Link>
            
            <Badge badgeContent={2} color="primary" sx={{ m: 2 }} >
             <FavoriteBorderOutlinedIcon />
            </Badge>
            </Reacts>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}
export default Navbar