//importing libraries (React/ReactDOM)
import React, {Component} from  'react';
import ReactDom, { render } from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from lodash;

const API_KEY = //ADD YOUR API_KEY HERE.

//Creating a new component
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('Solidity');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos, // if function(data), then this.setState({videos:data});  but ES6 allows you to do this instead when both have the same name.
                selectedVideo: videos[0]
                });    
        });       
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
        return(
            <div> 
                <SearchBar onSearchTermChange={videoSearch}/> 
                <VideoDetail video = {this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos}/>
                
            </div>
        );
    }
}

/* Function based component
const App = () => {
    return(
        <div>
            <SearchBar/>
        </div>
    );
} */
//Rendering the component

ReactDom.render(<App />, document.querySelector('.container'))