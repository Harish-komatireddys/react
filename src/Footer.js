import React from "react";

const Footer = () =>{
    return(
        <section className="footer-bg p-5"> 
           <div className="container">
               <div className="row">
                   <div className="col-lg-4">
                       <div className="color-black">
                          <h4>TheBiographys</h4>
                          <p>Our aim to give the viewers knowledge about celebrities  the people trending in news and the famous personalities all around the world.</p>

                       </div>
                   </div>
                   <div className="col-lg-4">
                       <h4 className="footer-heading-title">Categories</h4>
                       <ul className="footer-links">
                           <li>
                               <a href="/">Actors</a>
                           </li>
                           <li>
                               <a href="/">Actress</a>
                           </li>
                       </ul>
                   </div>
                   <div className="col-lg-4"></div>
               </div>

           </div>
        </section>

    );
}
 export default Footer;