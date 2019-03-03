// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import { withProfile } from 'components/HOC/withProfile';
// Instruments
import Styles from './styles.m.css';

@withProfile
export default  class Composer extends Component {
    static propTypes = {
        _createPosts: PropTypes.func.isRequired,
    };

    state = {
        comment: '',
    };

    _updateComment = event => {
        this.setState({
            comment: event.target.value,
        });
    }

    _handleFormSubmit = event => {
        event.preventDefault();
        this._submitComment();
    }

    _submitComment = event => {
        event.preventDefault();
        const { comment } = this.state;

        if(!comment) {
            return null;
        }

        this.props._createPost(comment);

        this.setState({
            comment: '',
        });
    }

    _submitOnEnter = event => {
        const enterKey = event.key === 'Enter';
        if (enterKey) {
            event.preventDefault();
            this._submitComment(event);
        }
    }

    render() {
        const { comment } = this.state;
        const { avatar, currentUserFirstName } = this.props;
        return (
            <section className={Styles.composer}>
                <section>
                    <img src={ avatar } />
                    <form onSubmit = { this._submitComment }>
                        <textarea 
                            placeholder = { `What's on your mind, ${currentUserFirstName}?` }
                            value = { comment }
                            onChange = { this._updateComment }
                            onKeyPress = { this._submitOnEnter }
                        />
                        <input type ="submit" value="Post"/>
                    </form>
                </section>            
            </section>
        );
    }
}
