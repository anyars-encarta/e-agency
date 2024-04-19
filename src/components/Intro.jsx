import React from 'react';
import styled from 'styled-components';
import man from '../assets/img/man.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    padding: 20px;
    margin-top: 70px;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;
const Title = styled.h1`
    width: 60%;
    font-size: 60px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px;
    }
`;
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;
const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items-center;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
`;
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;
const Right = styled.div`
    width: 40%;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;
const Image = styled.img`
    width: 100%;
`;

const Intro = () => {
  return (
    <Container id='intro'>
        <Left>
            <Title>Adventures in Creative Age</Title>
            <Desc>We beleive that designing products and services in close partnership
                with our clients is the only way to have a real impact on their 
                business.
            </Desc>

            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call us (+233) 24 211 9972 </Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>

        <Right><Image src={man}></Image></Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro