// Core
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';
import Like from '../Like/index';
import { withProfile } from 'components/HOC/withProfile';

@withProfile
export default class Post extends Component {
    static propTypes  = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
    }

    render() {
        const { comment, created, _likePost, _deletePost, id, likes, currentUserFirstName, currentUserLastName, avatar } = this.props;

        return (
            <section className = { Styles.post }>
                <span onClick = { () => { _deletePost(id) } } className = { Styles.cross } />
                <img src={ avatar } />
                <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like
                    _likePost = { _likePost }
                    id = { id }
                    likes = { likes }
                />
            </section>
        );
    }
}
