import React, {Component} from 'react';

import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            {id: '123', comment: 'Hi there!', created: 1526825076849}, 
            {id: '456',comment: 'Приветик!', created: 1526825077500}  
        ]
    };
    
    render() {
        const {posts} = this.state; 
        const {isSpinning} = this.state.posts; //
        
        console.log('Feed this.state=',this.state);
        console.log('Feed this.state.posts=',this.state.posts);
        console.log('isSpinning=',isSpinning)

        const postsJSX = posts.map((post) => {
            console.log('Feed post.id=',post.id);
            return <Post key = {post.id} {...post} />;
        });

        return (          
        <section className = {Styles.feed}>
            <Spinner isSpinning />            
            <StatusBar />
            <Composer />
            {postsJSX}
        </section>
        );
    }
}