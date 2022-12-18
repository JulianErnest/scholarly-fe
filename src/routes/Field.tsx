import React from 'react';
import styled from '@emotion/styled';

interface Props {
  question: string;
}


const Field: React.FC<Props> = ({ question }) => {
    const MyElement = styled.div`
        border: '1px solid gray',
        padding: '16px',
    `;
    
  return (
    
    <MyElement>{question}</MyElement>
  );
};

export default Field;