import React, {Component} from 'react'

import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'

import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
//const MOVIE_VIDEO_URL = "append_to_response=video&include_adult=false"
const SEARCH_URL = "search/movie?language=fr&include_adult=false"

const API_KEY = "api_key=dffb11db85bf733d50f1a50a26173b98";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {movieList:{}, currentMovie:{}}
    }

    componentWillMount() {
        this.initMovies();
    }

    initMovies() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
            this.setState({movieList:response.data.results.slice(1, 6), currentMovie:response.data.results[0]}, function() {
                this.applyVideoToCurrentMovie();
            })
        }.bind(this));
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
            const youtube_key =response.data.videos.results[0].key;
            let currentMovieState = this.state.currentMovie;
            currentMovieState.videoId = youtube_key;
            this.setState({currentMovie:currentMovieState});
        }.bind(this));
    }

    onClickListItem(movie){
        this.setState({currentMovie:movie}, function(){
            this.applyVideoToCurrentMovie()
            this.setRecommendation()
        })
    }

    setRecommendation(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function(response){
            this.setState({movieList:response.data.results.slice(0, 5)})
        }.bind(this));
    }

    onClickSearch(searchText){
        if (searchText){
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response){
                //si on trouve des data
                if(response.data && response.data.results[0]){
                    //si le film trouvé est different de l actuel
                    if(response.data.results[0].id !== this.state.currentMovie.id){
                        this.setState({currentMovie:response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie();
                            this.setRecommendation();
                        })
                    }
                }
            }.bind(this));
        }
    }

    render() {
        const renderVideoList = () => {
            if (this.state.movieList.length >= 5){
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem.bind(this)} />
            }
        }
        
        const renderVideo = () => {
            if(this.state.currentMovie.videoId)
                 return (
                    <div>
                        <Video videoId={this.state.currentMovie.videoId}/>
                        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                    </div>
                );  
            else
                return <div>Pas de donnée</div> ;  
        }

        return (
            <div>
                <div className="search_bar">
                    <SearchBar callback={this.onClickSearch.bind(this)} />
                </div>
                <div className="row">
                    <div className="col-md-8">
                        { renderVideo() }
                    </div>
                    <div className="col-md-4">
                        { renderVideoList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
