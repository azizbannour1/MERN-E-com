import styled from "styled-components";

const Container=styled.div `
height:30px;
background-color:black;
display:flex;
align-items:center;
justify-content:center;
`
const Deal= styled.h1 `
font-size:18px;
color:white;
font-weight:lighter;
` 

const Announcement = () => {
  return (
    <Container>
        <Deal>Free Shipping all around the world starting from 100$ !</Deal>
    </Container>
  )
}

export default Announcement