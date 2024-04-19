import React, { useState } from 'react';
import styled from 'styled-components';
import How from '../assets/img/how.png';
import MiniCard from './MiniCard';
import Play from '../assets/img/play.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    position: relative;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Image = styled.img`
    // display: ${props => props.open && 'none'};
    height: 100%;
    width: 80%;
    margin-left: 100px;
`;

const Video = styled.video`
    // display: ${props => !props.open && 'none'};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
        padding: 10px;
    }
`;

const Title = styled.h1`
    // font-size: 70px;
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
`;

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    cursor: pointer;
    margin-top: 50px;
    display: flex;
    align-items: center;
`;

const PlayIcon = styled.img`
    width: 20px;
    margin-right: 10px;
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30px;
`;

const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <Container id='service'>
            <Left>
                {/* <Image open={open} src={How} />
                <Video open={open} autoPlay loop controls src="https://www.loom.com/share/4a2c119a3ce944cc8bb1beefbd2ff119?sid=fda2d9b6-cc8d-488a-945c-6fff9b66fc57" /> */}
                {open ? (
                    <Video autoPlay loop controls src="https://www.loom.com/share/4a2c119a3ce944cc8bb1beefbd2ff119?sid=fda2d9b6-cc8d-488a-945c-6fff9b66fc57" />
                ) : (
                    <Image src={How} />
                )}
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple Process to Start</Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to looking for a partner of their digital media, design &
                        development, lead generation and communications requirements. We work
                        with you, not for you. Although we have great resources.
                    </Desc>

                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}><PlayIcon src={Play} />How it Works</Button>
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video autoPlay loop controls src="https://www.loom.com/share/4a2c119a3ce944cc8bb1beefbd2ff119?sid=fda2d9b6-cc8d-488a-945c-6fff9b66fc57" />
                    <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
                </Modal>
            )}
            <AnimatedShapes />
        </Container>
    )
};

export default Service