import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import check from './img/check.svg';
import verified from './img/verified.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = verified;
        if(item.isComplete) {
            url = check;
        }
        let className = classNames({'todo-complete': item.isComplete})
        return (
            <li onClick={onClick} className="todo-item">
                <div className="view">
                    <img className="check-img" src={url} alt="" />
                    <span className={className}> {item.title} </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;

