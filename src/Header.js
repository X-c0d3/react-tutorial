import React, { Component } from 'react'


class Header extends Component {

    constructor(props){
        super(props)
        this.handleHeaderClicked = this.handleHeaderClicked.bind(this);
    }
    handleHeaderClicked(){
        alert(1);
    }
    render(){

        let {currentUser, isLoggedIn} = this.props;
        return (
            <div onClick={() => this.handleHeaderClicked()}>
                Header : { isLoggedIn &&  currentUser }
            </div>
        );
    }
}

export default Header