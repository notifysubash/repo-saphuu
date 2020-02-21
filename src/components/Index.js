import React, { Component } from 'react'
import MainImg from './MainImage'
import Cards from './Cards'
import YoutubeList from './Youtube/Playlist'


class Index extends Component {
    render() {
        return (
            <div className="container">
                <h1>Tisa's Playground</h1>
                <div className="row mt-5">
                    <MainImg></MainImg>
                    <Cards></Cards>
                    <YoutubeList></YoutubeList>
                </div>
            </div>
        )
    }
}
export default Index