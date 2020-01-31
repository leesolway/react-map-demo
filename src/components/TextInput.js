import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 4px;
  height: 20px;
  background: #f0f3f7;
  box-shadow: none;
  border: none;
  margin: 0;
  padding: 8px;
  font-size: 16px;
  color: #8596a6;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

const Image = styled.img`
  margin-right: 8px;
`;

const TextInput = ({ imageSrc, ...props }) => {
  return (
    <Wrapper>
      <Image src={imageSrc} />
      <Input {...props} />
    </Wrapper>
  );
};

export default TextInput;
