import React, { useEffect, useState } from 'react';
import Post from './Post';

const Homepage = ()=> {
    let [users, setUsers]  = useState([])
    let [topRated, setTopRated]  = useState([])    
    let [popular, setPopular]  = useState([])
    let [nowPlaying, setNowPlaying]  = useState([])


    useEffect(() => {
       getUsers()
       getTopRated()
       getPopular()
       getNowPlaying()
    }, [])


    let getUsers = async () => {
        //let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ec8abf5a2d8ae8115a415519338e1dec&language=en-US&page=1')
        let data = await response.json();
        setUsers(data.results);
    }

    let getTopRated = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ec8abf5a2d8ae8115a415519338e1dec&language=en-US&page=1')
        let data = await response.json();
        setTopRated(data.results);
    }

    let getPopular = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ec8abf5a2d8ae8115a415519338e1dec&language=en-US&page=1')
        let data = await response.json();
        setPopular(data.results);
    }

    let getNowPlaying = async () => {
        let response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=ec8abf5a2d8ae8115a415519338e1dec&language=en-US&page=1')
        let data = await response.json();
        setNowPlaying(data.results);
    }

    return (
        <section className="p-5">
                <div className="container">
                    <div className="row">
                       <div className="col-lg-12">
                           <h4 className="my-3">Upcoming Movies</h4>
                           <div class="custom-slider-container">
                                <ol class="people people-scroller">
                                    {users.map((user,i) => (
                                        <Post key={i} post={user}/>
                                    ))}
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-lg-12">
                           <h4 className="my-3">Top Rated Movies</h4>
                           <div class="custom-slider-container">
                                <ol class="people people-scroller">
                                    {topRated.map((movie,i) => (
                                        <Post key={i} post={movie}/>
                                    ))}
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-lg-12">
                           <h4 className="my-3">Popular Movies</h4>
                           <div class="custom-slider-container">
                                <ol class="people people-scroller">
                                    {popular.map((movie,i) => (
                                        <Post key={i} post={movie}/>
                                    ))}
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-lg-12">
                           <h4 className="my-3">Now Playing Movies</h4>
                           <div class="custom-slider-container">
                                <ol class="people people-scroller">
                                    {nowPlaying.map((movie,i) => (
                                        <Post key={i} post={movie}/>
                                    ))}
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
    
}
export default Homepage
