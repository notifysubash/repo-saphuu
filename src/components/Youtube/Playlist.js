import React, { Component } from 'react'
import axios from 'axios'
const YoutubeApiKey = 'AIzaSyAIfzs5S9nQALNuu621KOoU59XVamWESF8'
const PlayListId = 'PLVVf5a-Es8SPnl4IqAz0g5JIEIMKxjAzn'
const Param = 'playlistItems?part=snippet'
const baseUrl = 'https://www.googleapis.com/youtube/v3/'
var finalYoutubeURL = `${baseUrl}${Param}&playlistId=${PlayListId}&key=${YoutubeApiKey}`
class Playlist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       playListItems:[],
       errorMessage:''

    }
  }
  componentDidMount(){
    console.log(finalYoutubeURL)
    axios.get(finalYoutubeURL)
      .then(response=>{
        console.log(response.data.items)
        this.setState({playListItems: response.data.items})
      })
      .catch(error=>{
        console.log(error)
        this.setState({errorMessage: 'Error retrieving data'})
      })
  }
    render() {
    
      const {playListItems, errorMessage} = this.state
        return (                
              
                /* <div className="row mt-5">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/73a5wQrLApQ" allowfullscreen></iframe>
                  </div>
                </div> */
        
          
               playListItems.length ?
               playListItems.map(item=>
                <div key={item.snippet.resourceId.videoiId} className="col-lg-4 mb-4 grid-margin">
                  <div className="imgHolder">
                    <img src={item.snippet.thumbnails.medium.url} className="img-responsive cover"></img>
                    <div>
                      {item.snippet.title}
                    </div>
                  </div>
                </div>
               )
               :
               null

          
        
        
        )
    }
}

export default Playlist
