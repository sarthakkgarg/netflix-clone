import React from 'react'
import './Movierow.css'


const Movierow = ({title, items}) => {
    console.log(items.results)
    return (
        <div>
            <div className="movierow">
            <h2>{title}</h2>
          
            <div className="listarea">
                <div className="list">
                {items.results.length > 0 && items.results.map((item,key) =>(
                    <a href="https://www.youtube.com/watch?v=Hs-1_HNALhw" key={key} className="item">
                        
                    < img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                    </a>
                ))}
                </div>
            </div>
        </div>
        </div>
    );
}
export default Movierow;