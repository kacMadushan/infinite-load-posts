import React from 'react';
import styled from 'styled-components';

const LoadPosts = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
`;

const LoadMore = styled.a`
    display: block;
    width: 100%;
    padding: 8px 15px;
    margin-bottom: 15px;
    color: ${props => props.theme.primary} !important;
    font-weight: 400;
    font-size: 16px;
    border-radius: 3px;
    background-color: #e6ecf0;
    cursor: pointer;

    &:hover,
    &:focus {
        color: #ffffff !important;
        background-color: ${props => props.theme.primary}
    }
`;

export default props => (
    <LoadPosts>
        <LoadMore onClick={props.loadMorePosts}>Load More...</LoadMore>
    </LoadPosts>
);