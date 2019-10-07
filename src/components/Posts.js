import React from 'react';
import PostsListItem from './PostsListItem';
import styled from 'styled-components';

const Posts = styled.div`
    margin: 18px 0;
    width: 100%;
    height: auto; 
`;

const PostsList = styled.ul`
    list-style: none;
    margin-bottom: 0;
    padding: 0;
`;

export default props => {
    let showPosts = null;
    const postsList = props.posts.slice(0, props.per).map((post) => (
        <PostsListItem key={post.id} {...post} />
    ));
    showPosts = props.posts.length > 0 ? postsList : null;
    return (
        <Posts>
            <PostsList>
                {showPosts}
            </PostsList>
        </Posts>
    );
};