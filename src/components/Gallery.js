import React from "react";
import styles from "./Gallery.module.css"
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Gallery({pictures}) {
    return (
        <div>
            <CarouselProvider naturalSlideWidth={100}
                              naturalSlideHeight={60}
                              totalSlides={pictures.length}
                              infinite={true}
                              isPlaying={true}
                              interval={3000}
                              touchEnabled={true}>
                <ButtonBack className={styles.button}>Previous</ButtonBack>{'/'}
                <ButtonNext className={styles.button}>Next</ButtonNext>
                <Slider className={styles.slider}>
                    {pictures.map((item, i) => {
                        return (
                            <Slide index={i} key={i} className={styles.imageContainer}>
                                    <Image src={item.src} hasMasterSpinner={true}/>
                                    <div className={styles.description}>
                                        <p><name>{item.name}</name>, {item.size}, {item.material}, {item.price}</p>
                                    </div>
                            </Slide>
                        )
                    })}
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default Gallery