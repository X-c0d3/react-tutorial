import React, { Component } from 'react'

import styled from 'styled-components'

const Text = styled.span`
    font-size: 20px;
    color: ${props => props.Completed ? 'green' : 'black'}
`

class TodoItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            done: !this.state.done
        });
    }

    render(){
       let { text} = this.props
       return (
            <div>
                <input onClick={this.toggle} type="checkbox" value={this.state.done} />
           <Text Completed={this.state.done}>text</Text>  
           </div>
      )
    }
}

export default TodoItems