import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';
import { useNavigate} from 'react-router-dom'; 

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  text-align:center;
  
 `;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size:20px;
`;

const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
 
`;

const Register = () => {
  const navigate= useNavigate ()

  const handleRegister= () => {
    navigate('/login')
     }


  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"  required/>
          <Input placeholder="last name" required/>
          <Input placeholder="username" required/>
          <Input placeholder="email" required/>
          <Input type="password" placeholder="password" required/>
          <Input type="password" placeholder="confirm password" required/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
            <Checkbox {...label}   />

          </Agreement>
          <Button onClick={handleRegister}>CREATE </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
