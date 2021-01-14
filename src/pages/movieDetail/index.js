import React, {useEffect, useState} from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import MainLayout from '../../Layouts/mainLayout';
import { FaCalendar, FaChevronLeft, FaClock, FaStar } from "react-icons/fa";

import { Link } from 'react-router-dom';

import MovieData from '../../utils/movie.json';

const MovieDetail = (props) =>{
   
    const [movies] = useState(MovieData);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(()=>{
       const _id = props.match.params.id; 
       const movie =movies.filter((item)=> item.id === _id );
        
       setSelectedMovie(movie[0]); 
    },[]);
    return(
        <MainLayout>
        {selectedMovie && <div className="page-movie-detail pt-4">
            <Container>
                <Jumbotron>
                    <Row>
                        <Col lg="3">
                            <div className="image">
                                <img src={selectedMovie.posterurl} alt={selectedMovie.title}/>
                            </div>
                        </Col>
                        <Col lg="8">
                            <div className="text">
                                <Link to="/movies" className="c-breadcrumb"><FaChevronLeft/> All Movies</Link>
                                <h2>{selectedMovie.title}</h2>
                                <div className="d-flex">
                                    <div className="release-date">
                                        <FaCalendar/> {selectedMovie.releaseDate}
                                    </div>
                                    <div className="rating">
                                        <FaStar/> {selectedMovie.imdbRating}
                                    </div>
                                    <div className="duration">
                                        <FaClock/> {selectedMovie.duration?selectedMovie.duration:"NAN"}
                                    </div>
                                </div>

                                <div className="categories d-flex">
                                    {selectedMovie.genres.map((item,i)=> {
                                        return  <div key={i}>{item}</div>
                                    }) }
                        
                                </div>
                                <div className="description">
                                    {selectedMovie.storyline}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>
        }

        {!selectedMovie  && <div className="container"><p>Loading...</p></div>}
        </MainLayout>
    )
    
}
export default MovieDetail;