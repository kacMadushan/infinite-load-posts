import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Posts from './components/Posts';
import LoadPosts from './components/LoadPosts';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            per: 5,
        }
    };

    componentDidMount() {
        this.loadPosts()
    }

    loadPosts = () => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(response => response.json())
            .then(posts => this.setState({
                posts: [...posts, ...posts]
            }))
    };

    loadMorePosts = () => {
        this.setState((prevState) => ({
            per: prevState.per + 3,
        }), this.loadPosts)
    }

    render() {
        const { per, posts } = this.state;
        return (
            <div className="container">
                <Wrapper>
                    <Header
                        title="Front-end Web Development"
                        subTitle="Learn frontend web development with short posts."
                    />
                    <Posts
                        per={per}
                        posts={posts}
                    />
                    <LoadPosts
                        loadMorePosts={this.loadMorePosts}
                    />
                </Wrapper>
            </div>
        );
    }
};

export default App;