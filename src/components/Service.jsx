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
`;

const Left = styled.div`
    width: 50%;
    position: relative;
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
`;

const Right = styled.div`
    width: 50%;
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
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

const Service = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container id='service'>
            <Left>
                {/* <Image open={open} src={How} />
                <Video open={open} autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761" /> */}
                {open ? (
                    <Video autoPlay loop controls src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761" />
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
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}><PlayIcon src={Play} />How it Works</Button>
                </Wrapper>
            </Right>
            <AnimatedShapes />
        </Container>
    )
};

export default Service