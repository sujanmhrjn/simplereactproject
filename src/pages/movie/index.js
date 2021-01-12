import React from 'react';
import MainLayout from '../../Layouts/mainLayout';
import { Container, Row, Col, Form, FormGroup , Button, Input} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import MovieCard from '../../components/MovieCard';

import MovieData from '../../utils/movie.json';
// import _ from 'lodash';
var timer = "";
class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            movies: MovieData,
            search:"",
            
        }
    }
    
    handleSearchBox = (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            this.setState({search:e.target.value});
        }, 1000); 

        // _.debounce(()=>{this.setState({search:e.target.value});}, 1000);
    }
    render(){
        const {movies,search} = this.state;
        const filteredMovies  = movies.filter(movie=> {
            return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        });
       
        return(
            <MainLayout>
                <div className="page-movies">
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col lg={7}>
                                <Form inline>
                                    <FormGroup>
                                        <Input type="search" name="search"  placeholder="Enter Movie Name" onChange={this.handleSearchBox}/>
                                    </FormGroup>
                           
                                    <Button><FaSearch/> Search</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            {filteredMovies.map((movie, i)=>{
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
}
export default Movies;