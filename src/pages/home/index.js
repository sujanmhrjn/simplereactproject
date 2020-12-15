import React,{Component} from 'react';
import MainLayout from '../../Layouts/mainLayout';
import Banner from './banner';
import MoviesList from './movieList';

class HomePage extends Component{
   render(){
       return (
            <MainLayout>
              <Banner/>
             <MoviesList/>
            </MainLayout>
        );
   }
}
export default HomePage;

