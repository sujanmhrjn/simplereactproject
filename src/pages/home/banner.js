import React,{useState, useEffect} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Banner1 from '../../assets/images/banner-1.jpg';
import Banner2 from '../../assets/images/banner-2.jpg';
import Banner3 from '../../assets/images/banner-3.jpg';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const Banner= ()=>{
    const [movies] = useState( [
            {
                image:Banner1,
                name:"Anything is possible",
                url:""
            },
            {
                image:Banner2,
                name:"Wonders of the sea",
                url:""
            },
            {
                image:Banner3,
                name:"Bell Canto",
                url:""
            }
        ]
    );
    // const [age, setAge]=useState(11);
    // //componentdidmount alternate useEffect hooks
    // useEffect(()=>{
    //    setAge(23) 
    // },[]);
    
    return(
        <div className="c-banner">
        
            <CarouselProvider 
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={movies.length}
                    interval={3000}
                    isIntrinsicHeight={true}
            >
                    <Slider>
                    {movies.map((movie, i)=>{
                        return (
                            <Slide key={i} index={i}>
                                <div className="banner-item" >
                                    <img src={movie.image} alt={movie.name} />
                                </div>
                            </Slide>
                        )
                    })}
                    
                </Slider>
                <ButtonBack>
                    <CgChevronLeft/>
                </ButtonBack>
                <ButtonNext>
                    <CgChevronRight/>
                </ButtonNext>
            </CarouselProvider>
        </div>
    );
 
}
export default Banner;