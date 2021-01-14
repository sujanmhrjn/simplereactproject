import React from 'react';
import MainLayout from '../../Layouts/mainLayout';
import Banner from './banner';
import MoviesList from './movieList';

const HomePage = () =>{
    return (
        <MainLayout>
          <Banner/>
          <MoviesList/>
        </MainLayout>
    );
}
export default HomePage;

