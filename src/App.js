import React, { Component } from 'react';


//Tutorials
//###################################################
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";

import Header from './Header'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import BookItems from './BookItems'
import Footer from './Footer'


import { connect } from 'react-redux';
import { updateUser } from './actions/user-action';



const API_KEY = 'AIzaSyDHfbr14FlehxCcAn02QNXY8XBdhlaPS-Y';

//###################################################

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedVideo: null,
      currentTime: 0,
      todoItems: []
    }

    this.videoSearch("surfboards");

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.handleFooterClicked = this.handleFooterClicked.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  onUpdateUser(){
    this.props.onUpdateUser('JIB');
  }

  handleFooterClicked(time){
    this.setState({ currentTime: time});
  }

  addTodo(newTodo){
    this.setState({
      todoItems: this.state.todoItems.concat([newTodo])
    });
  }

  render() {
    let { currentTime,todoItems } = this.state;
    return (

      <div>
        <SearchBar />

         <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
        
   <div className="App">
        <Header currentUser="Watchara" isLoggedIn={true} />
        <p className="App-intro">
         Current Time : { this.state.currentTime}
        </p>
  
        <div onClick={this.onUpdateUser}> Update User</div>
        User {this.props.user}

        <br/>
        <TodoInput onAddTodo={this.addTodo} />
        <TodoList items={todoItems}/>
        <BookItems book={{ name: '', author: 'JK'}}/>
        <Footer onTimeClick={this.handleFooterClicked}/>
      </div>
        </div>
   
    );
  }
}

//export default App;

//Tutorials
//###################################################
const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapActionToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionToProps)(App);
//###################################################
