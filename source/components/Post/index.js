// Core
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';
import { func, string, number, array } from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';
import Like from 'components/Like';

export default class Post extends Component {
    static propTypes  = {
        id: string.isRequired,
        comment: string.isRequired,
        created: number.isRequired,
        _likePost: func.isRequired,
        likes: array.isRequired,
    }

    render() {
        const { comment, created, _likePost, id, likes } = this.props;

        return ( 
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <img src={ context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                        <Like 
                            id = { id } 
                            likes= { likes } 
                            _likePost = { _likePost } 
                            { ...context }
                        />
                    </section>
                )}
             </Consumer>
        );
    }
}
