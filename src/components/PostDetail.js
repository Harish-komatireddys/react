import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () =>{
    let [upcoming, setUpcomingmovies]  = useState([])
    
    useEffect(() => {
        getupcomingMovie()
    }, [])


    let getupcomingMovie = async () =>{
        let response = await fetch ("https://api.themoviedb.org/3/movie/297802?api_key=6e64c8aa7804148fec2194d931cec67b&append_to_response=credits")
        let data = await response.json();
        setUpcomingmovies(data.results);
    }
    return(
        <section className="bg-gradinat p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-3">
                                <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg" alt="" title="" className="img-fluid br-12"/>
                            </div>
                            <div className="col-lg-9">
                                <div className="details-sections">
                                    <h1><Link to="/">The Flash</Link><span>(2014)</span> </h1>
                                    <div className="movie-deatils">
                                        <span className="border p-1">U/A</span>
                                        <span className="ms-2">06/25/2021 (IN)</span>
                                        <span>&nbsp; | &nbsp;</span>
                                        <span>
                                            <Link>Action, </Link>
                                            <Link>Crime, </Link>
                                            <Link>Thriller</Link>
                                        </span>
                                        <span>&nbsp; | &nbsp;</span>
                                        <span>2h 23m</span>
                                    </div>
                                    <div className="mb-24px">
                                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Play Trailer</button>
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header_info">
                                        <h4 className="tagline"><i>Justice is coming.</i></h4>
                                        <h3 className="disc-heading">Overview</h3>
                                        <div className="overview">
                                            <p>Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default PostDetail