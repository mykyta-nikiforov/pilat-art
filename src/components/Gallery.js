import React from "react";
import styles from "./Gallery.module.css"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function Gallery() {
    return (
        <div>
            <CarouselProvider naturalSlideWidth={400}
                              naturalSlideHeight={200}
                              totalSlides={3}>
                <Slider className={styles.slider}>
                    <Slide index={0}>
                        <ImageWithZoom src="/pictures/1.jpg"/>
                    </Slide>
                    <Slide index={1}>
                        <ImageWithZoom src="/pictures/2.jpg"/>
                    </Slide>
                    <Slide index={2}>
                        <ImageWithZoom src="/pictures/1.jpg"/>
                    </Slide>
                </Slider>

                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>

            </CarouselProvider>
        </div>
    )
}

export default Gallery