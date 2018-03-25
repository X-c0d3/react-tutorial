import _ from 'lodash'
import React, { Component } from 'react';


//Tutorials
//###################################################
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//Redux
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';


const API_KEY = 'AIzaSyDHfbr14FlehxCcAn02QNXY8XBdhlaPS-Y';

//###################################################

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    }

    this.videoSearch("typescript");

  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }



  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); 
    return (

      <div>
        
      <BookList />
      <BookDetail />
       <br/>

         {/* <SearchBar onSearchTermChange={ videoSearch } />
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} /> */}
        
  
      </div>
   
    );
  }
}

export default App;


//export default connect(mapStateToProps, mapActionToProps)(App);
//###################################################
