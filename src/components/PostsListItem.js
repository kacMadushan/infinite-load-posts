import React from 'react';
import styled from 'styled-components';

const PostsListItem = styled.li`
    display: block;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 6px;
    border: 1px solid #e6ecf0;
    background-color: #ffffff;
`;

const PostTitle = styled.h2`
    color: ${props => props.theme.primary};
    font-weight: 600;
    font-size: 24px;
    text-transform: capitalize;
`;

const PostBody = styled.p`
    color: #697a89;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 0;
`;

export default props => (
    <PostsListItem>
        <PostTitle>{props.title}</PostTitle>
        <PostBody>{props.body}</PostBody>
    </PostsListItem>
);
