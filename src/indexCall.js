import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';//Used for debounce like delay in callback

const API_KEY = 'AIzaSyApFd7gI90nkwgOjzgsqq_y2uamSutOvBM';//Youtube API key

//Extending Component class to App and using all the methods of Component class
class App extends Component {
/*constructor and super class is mandatory if we define Component as class based
constructor is used for declaration and state definition
*/
  constructor(props){
    super(props);

//State is used as a place holder where once state data is changed it will automatically render the DOM element and each class has there own state
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('rajni');
  }
  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos:videos,//if key and value are same then we can give directly videos rather key:value
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return (
      <div>
        <SearchBar onSearchChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
