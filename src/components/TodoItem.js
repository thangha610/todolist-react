import React, { Component } from 'react';
import './TodoItem.css'
import classNames from 'classnames';
class TodoItem extends Component {
    render() {
        const { item } = this.props;
        let className = classNames('todo-item', {'todo-complete' : item.isComplete})
        return (
            <div className={ className }>
                <p> { item.title } </p>
            </div>
        )
    }
}

export default TodoItem;

