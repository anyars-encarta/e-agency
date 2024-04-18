import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.div`
    height: 50px;
    position: fixed;
    width: 100vw;
    z-index: 1;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
    cursor: pointer;
`
const Menu = styled.ul`
    display: flex;
    list-style-type: none;
`
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
`
const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Logo>AnyarsAgency</Logo> */}
                    <Link to="intro" smooth={true} duration={500}><Logo>EncartaAgency</Logo></Link>
                    <Menu>
                        {/* <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem> */}
                        <Link to="intro" smooth={true} duration={500}><MenuItem>Home</MenuItem></Link>
                        <Link to="feature" smooth={true} duration={500}><MenuItem>Features</MenuItem></Link>
                        <Link to="service" smooth={true} duration={500}><MenuItem>Services</MenuItem></Link>
                        <Link to="price" smooth={true} duration={500}><MenuItem>Pricing</MenuItem></Link>
                        <Link to="contact" smooth={true} duration={500}><MenuItem>Contact</MenuItem></Link>
                    </Menu>
                </Left>

                    <Button>JOIN TODAY</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar