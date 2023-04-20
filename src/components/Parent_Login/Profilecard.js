import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: -100px;
  border: 5px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h2`
  font-size: 28px;
  color: #333;
  margin-top: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #666;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #999;
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const ProfileCard = () => {
  return (
    <Card>
      <Image src="https://via.placeholder.com/200" />
      <Name>John Doe</Name>
      <Title>Web Developer</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus
        urna sed lacus malesuada luctus.
      </Description>
      <Button>Contact</Button>
    </Card>
  );
};

export default ProfileCard;
