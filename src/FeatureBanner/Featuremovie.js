import React from 'react'
import './Featuremovie.css';

const Featuremovie = ({ item }) => {
    console.log(item)

    return (
        <section className="featured"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url("https://wallpaperaccess.com/full/1096675.png")`
            }}>
            <div className="featured-vertical">
                <div className="featured-hori">
                    <div className="featured-name">La Casa De Papel</div>
                        <div className="featured-language">Language - 
                        English
                        </div>
                        <div className="featured-vote">  imdb-
                            8.2
                        </div>
                   

                        <div className="featured-buttons" >
                            <a href="https://www.youtube.com/watch?v=GV3HUDMQ-F8" className="featured-watchbtn" >▶ Watch Now</a>
                            <a href="https://www.youtube.com/watch?v=GV3HUDMQ-F8" className="featured-watchlist"> + Add to Watchlist</a>
                        </div>
                       
                    

                </div>

            </div>

        </section>
    )
};

export default Featuremovie;