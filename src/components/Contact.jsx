import React from 'react';
import styled from 'styled-components';
import ContactBackground from '../assets/img/contact.png';
import Send from '../assets/img/send.png';
import Map from '../assets/img/map.png';
import Phone from '../assets/img/phone.png';

const Container = styled.div`
    height: 90%;
    background: url(${ContactBackground});
    // opacity: 0.1;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const FormContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    margin: 70px ;
    margin-top: 0;

    @media only screen and (max-width: 480px) {
        margin: 0 20% 10px 20%;
    }
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 480px) {
        height: 50%;
        margin-right: 0;
    }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        height: 50%;
    }
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        padding: 5px;
    }
`;

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        padding: 5px;
        margin-top: 20px;
    }
`;

const Button = styled.button`
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
    justify-content: space-around;

    @media only screen and (max-width: 480px) {
        padding: 5px;
        font-size: 14px;
        margin-top: 10px;
    }
`;

const SendImage = styled.img`
    width: 20px;
    height: 20px;
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-top: 20px;
    }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;

    @media only screen and (max-width: 480px) {
        width: 15px;
    }
`;

const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;

    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

const Contact = () => {
  return (
    <Container id='contact'>
        <Wrapper>
            <FormContainer>
                <Title>Questions ? <br/> Let's Get In Touch</Title>
                <Form>
                    <LeftForm>
                        <Input type='text' name='name' placeholder='Your Name' />
                        <Input type='text' name='email' placeholder='Your Email' />
                        <Input type='text' name='subject' placeholder='Subject' />
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder='Your Message'/>
                        <Button><SendImage src={Send} />Send</Button>
                    </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map} />
                    <Text>P. O. Box 50, Nalerigu via Gambaga, North East Region, Ghana</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone} />
                    <Text>+233 242 11 9972</Text>
                    <Text>+233 202 59 4960</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send} />
                    <Text>anyarsencarta@gmail.com</Text>
                    <Text>anyars@bmcnalerigu.org</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact