import React, { Component } from 'react'
import TodoItems from './TodoItems'
class TodoList extends Component {
    render(){
        let { items } = this.props;
       return (
            <div>
                <ul>
                   { 
                       items.map((todo,i) => 
                        <li key={i} >
                            <TodoItems  text={todo} />
                        </li>)
                   
                    }
                </ul>
           </div>
      )
    }
}

export default TodoList