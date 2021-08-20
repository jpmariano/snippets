import React, { Component } from 'react';
import axios from 'axios'; //1 import axios for http ajax request with promisses

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount () { //2. best place to do http get 
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4); //to fetch only 4 post
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } );
    }

    postSelectedHandler = (id) => { //1B. Create a click method handler
        this.setState({selectedPostId: id});
    }

    render () {
        const posts = this.state.posts.map(post => { //3. output the post using map method
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />; //2B. when clicked
        });

        return (
            <div>
                <section className="Posts">
                    {posts} {/*4. output the posts*/}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />{/*3B update the fullpost*/}
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;