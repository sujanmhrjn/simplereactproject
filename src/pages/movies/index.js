import React from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import MainLayout from '../../Layouts/mainLayout';
import {  Form, Button, Input} from 'reactstrap';
import MovieCard from '../../components/MovieCard';
import MovieData from '../../utils/movie.json';
var timer = "";
class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
            error:"",
            movies:MovieData
        }
    }
    handleFormValidaiton = () => {
        let errMessage="";
        if(!this.state.search)  errMessage="Please enter your keyword(s)";
        return errMessage;
    }
    handleInputChange =(e)=>{
        clearTimeout(timer);
       timer = setTimeout(()=>{
            this.setState({
                search:e.target.value
            });
        },4000);
        
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
        const  err = this.handleFormValidaiton();

        this.setState({
            error:err
        }, ()=>{
            if(!err){
                alert("Searching...");
            }else{
                return false;
            }
        });
    }

    render(){
        const { error,movies,search} = this.state;
        const filteredMovies = movies.filter(movie=> movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
        return(
            <MainLayout>
                <div className="page-movies">
                    <Container>
                        <Row className="justify-content-center mb-5">
                            <Col lg={7}>
                                <Form inline onSubmit={this.handleFormSubmit} className="mb-2">
                                    <FormGroup>
                                        <Input type="text" name="search"  placeholder="Enter movie name or keyword" onChange={this.handleInputChange} />
                                    </FormGroup>
                                    <Button type="submit">Search</Button>
                                </Form>
                                {error && <p className="text-sm text-danger">{error}</p>}
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