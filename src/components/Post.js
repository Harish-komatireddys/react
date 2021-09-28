import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';


const Post = (props) => {
    
    const poster = `https://image.tmdb.org/t/p/w342${props.post.poster_path}`;
    return ( 
        <li class="people-card movie-list">
            <div className="">
                <img src={poster} className="card-img-top" alt=""/>
                <div className="card-body">
                    <div>
                       <h2 className="people-title"><Link to="/PostDetail">{props.post.original_title}</Link></h2>
                    </div>
                </div>
            </div>
        </li>     
        
    )
}

export default Post;