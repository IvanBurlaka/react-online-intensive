// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

// Components
import { Consumer } from '../HOC/withProfile'; 

export default class Composer extends Component {
    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className={Styles.composer}>
                        <section>
                            <img src={ context.avatar } />
                            <form>
                                <textarea 
                                    placeholder = { `What's on your mind, ${context.currentUserFirstName}?` }
                                />
                                <input type ="submit" value="Post"/>
                            </form>
                        </section>            
                    </section>
                )}
            </Consumer>
        );
    }
}
