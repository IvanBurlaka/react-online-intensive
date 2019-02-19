// Core
import React, { Component } from 'react';

// Components
import Composer from 'components/Composer';
import Post from 'components/Post';
import StatusBar from 'components/StatusBar';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
	state = {
		posts: [
			{ id: '123', comment: 'Hi there!', created: 1550324484568 }, 
			{id: '456', comment: 'wsaup biatch!', created: 1550324484568},
		],
		isSpinning: true,
	};
    render() {
    	const { posts, isSpinning } = this.state;

    	const postsJSX = posts.map((post) => {
    		return <Post 
    			key = { post.id } 
    			comment = { post.comment }
    			created = { post.created }
			/>
    	});
        return (
            <section className={Styles.feed}>
            	<Spinner isSpinning={isSpinning}/>
            	<StatusBar/>
                <Composer/>
                {postsJSX}
            </section>
        );
    }
}
