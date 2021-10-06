import React, { useEffect, useState } from 'react';
import './App.css';
import Movierow from './MovieRow/Movierow';
import tmbd from './MovieAPI/tmbd';
import Featuremovie from './FeatureBanner/Featuremovie';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {

  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {

      let list = await tmbd.getHomeList(); 
      setMovieList(list);
      let orginals = list.filter(i => i.genre === 'Orignals');
      let randomChoosen = Math.floor(Math.random() * (orginals[0].items.results.length - 1));
      let choosen = orginals[0].items.results[randomChoosen];
      let choosenInfo = await tmbd.getmovieInfo(choosen.id, 'tv');
      setFeatureData(choosenInfo);
    }

    loadAll();

  }, []);

  useEffect(() => {
    const scrollListener = ( ) => {
      if(window.scrollY > 20){
        setBlackHeader(true);

      }else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener );

    return() =>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])


  

  

  

  return (
    <>
      <Header black= {blackHeader} />
      <div className="Page">
        {featuredData &&
          <Featuremovie item={featuredData} />}
        <section className="Lists">
          {movielist.map((item, key) => (
            <div>
              <Movierow key={key} title={item.title} items={item.items} />
            </div>
          ))}
        </section>
      </div>
      <Footer/>

    </>
  );
}

export default App;
