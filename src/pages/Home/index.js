/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

// import DefaultPage from '../../components/DefaultPage';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import MainBanner from '../../components/MainBanner';
import Carousel from '../../components/Carousel';

import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getCategoriesAndVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <MainBanner
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />

              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Home;
