import React, {Component} from 'react';

import { Consumer } from 'components/HOC/withProfile';

import Styles from './styles.m.css';

import moment from 'moment';

export default class Post extends Component {
    render () {
      
    return (            
        <Consumer>
            {(context) => (
                <section className = {Styles.post}> 
                    <img src = {context.avatar} />
                    <a>{context.currentUserFirstName} {context.currentUserLastName}</a>
                    <time>{moment().format('MMMM DD h:mm:ss a')}</time>
                    <p>Howdy!</p>
                </section>
            )}
        </Consumer>
        );
    }
}
