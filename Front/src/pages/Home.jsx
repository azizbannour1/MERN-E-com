import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Products from "../components/Products";
import styled from "styled-components";
import Layout from "../layout";

const SelectCategorie= styled.h1`
margin-top:25px;
margin-left:25px;
display:flex; 
align-items:center;
justify-content: center;
`
const SelectProduct= styled.h1`
display:flex; 
align-items:center;
justify-content: center;
`
const Home = () => {
  return (
    <div>
    <Announcement/>
    <Layout>
    <Slider/> 
    <SelectCategorie> START BY SELECTING YOUR CATEGORY! </SelectCategorie>
    <Categories/>
    <SelectProduct>CHECK OUT OUR POPULAR PRODUCTS OF THE WEEK!</SelectProduct>
    <Products />
    <Footer/>
    </Layout>
    </div>
  )
}

export default Home