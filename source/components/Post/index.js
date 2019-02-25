// Core
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Styles from './styles.m.css';

// Components
import { Consumer } from '../HOC/withProfile'; 

export default class Post extends Component {
    static propTypes  = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
    }

    render() {
        const { comment, created } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <span className = { Styles.cross } />
                        <img src={ context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                        <p>{comment}</p>
                    </section>
                )}
             </Consumer>
        );
    }
}
