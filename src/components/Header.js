import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: block;
    text-align: center;
    margin: 30px 0;
    width: 100%;
    height: auto;
`;

const Title = styled.h1`
    color: ${props => props.theme.primary};
    font-weight: 800;
    font-size: 38px;
`;

const SubTitle = styled.p`
    color: #1a1e21;
    font-weight: 400;
    font-size: 16px;
`;

export default props => (
    <Header>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
    </Header>
);