import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const PostDetail = () =>{
    //let [upcoming, setUpcomingmovies]  = useState([])
    const {id} = useParams();
    //console.log(id);

    // useEffect(() => {
    //     getupcomingMovie()
    // }, [])


    // let getupcomingMovie = async () =>{
    //     let response = await fetch ("https://api.themoviedb.org/3/movie/297802?api_key=6e64c8aa7804148fec2194d931cec67b&append_to_response=credits")
    //     let data = await response.json();
    //     setUpcomingmovies(data.results);
    // }
    return(
        <section className="bg-secondary p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        id : {id}
                    </div>
                </div>
            </div>

        </section>
    )
}
export default PostDetail