import React, {useState, useEffect} from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import MainLayout from '../../Layouts/mainLayout';
import {  Form, Button, Input} from 'reactstrap';
import MovieCard from '../../components/MovieCard';
import MovieData from '../../utils/movie.json';
var timer = "";
const Movies = ()=>{
 
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [movies, setMovies] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState(null);
    
    useEffect(()=>{
        setMovies(MovieData);
    },[]);

    useEffect(()=>{
        const filteredResult = movies && movies.filter(movie=> movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        setFilteredMovies(filteredResult);
    },[movies, search]);

    const handleFormValidaiton = () => {
        let errMessage="";
        if(!search)  errMessage="Please enter your keyword(s)";
        return errMessage;
    }
    const handleInputChange =(e)=>{
        clearTimeout(timer);
       timer = setTimeout(()=>{
            setSearch(e.target.value);
        },4000);
        
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const  err =handleFormValidaiton();
        setError(err);
        if(!err){
            alert("All good");
        }else{
            return false;
        }
    }



       
        return(
            <MainLayout>
                <div className="page-movies">
                    <Container>
                        <Row className="justify-content-center mb-5">
                            <Col lg={7}>
                                <Form inline onSubmit={handleFormSubmit} className="mb-2">
                                    <FormGroup>
                                        <Input type="text" name="search"  placeholder="Enter movie name or keyword" onChange={handleInputChange} />
                                    </FormGroup>
                                    <Button type="submit">Search</Button>
                                </Form>
                                {error && <p className="text-sm text-danger">{error}</p>}
                            </Col>
                        </Row>

                        <Row>
                            {filteredMovies && filteredMovies.map((movie, i)=>{
                                return(
                                    <Col sm={6} md={4} lg={3} key={i}>
                                        <MovieCard url={`/movie/${movie.id}`} title={movie.title} poster={movie.posterurl}/>
                                    </Col>
                                )
                            })}
                       
                        </Row>

                    </Container>
                </div>
            </MainLayout>
        )
    
}
export default Movies;