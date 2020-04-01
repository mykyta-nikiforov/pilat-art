import React, {Component} from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Gallery.module.css";
import InnerImageZoom from "react-inner-image-zoom";
// eslint-disable-next-line no-unused-vars
// noinspection ES6UnusedImports
import carouselStyles from "../styles/Carousel.css";
// eslint-disable-next-line no-unused-vars
// noinspection ES6UnusedImports
import imageZoomStyles from "../styles/ImageZoom.css";
import {withTranslation} from "react-i18next";


export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: props.pictures,
            currentSlide: 0
        };
    }

    componentWillReceiveProps = (props) => {
        if (JSON.stringify(this.state.pictures) !== JSON.stringify(props.pictures)) {
            this.setState(() => ({
                pictures: props.pictures,
                currentSlide: 0
            }));
        }

    };

    next = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide + 1,
        }));
    };

    prev = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
    };

    updateCurrentSlide = (index) => {
        const {currentSlide} = this.state;

        if (currentSlide !== index) {
            this.setState({
                currentSlide: index,
            });
        }
    };

    render() {
        let pictures = this.state.pictures;
        const {t} = this.props;
        return (
            <div className={styles.NewGallery}>
                {this.getNavigationButtons(pictures, t)}
                <Carousel showArrows={true}
                          useKeyboardArrows
                          infiniteLoop
                          autoPlay
                          interval={4000}
                          showThumbs={false}
                          showIndicators={false}
                          selectedItem={this.state.currentSlide}
                          onChange={this.updateCurrentSlide}
                          showStatus={false}
                          className={styles.carousel}
                >
                    {
                        this.mapPicturesToSlides(pictures, t)
                    }
                </Carousel>
            </div>
        )
    }

    getNavigationButtons(pictures, t) {
        return <div>
            <button onClick={this.prev} className={styles.button}>
                {t("Previous")}
            </button>
            /
            <button onClick={this.next} className={styles.button}>
                {t("Next")}
            </button>
            <span className={styles.status}>
                ({this.state.currentSlide + 1} {t("picture of")} {pictures.length})
            </span>
        </div>;
    }

    mapPicturesToSlides(pictures, t) {
        return pictures.map((item, i) => {
            let currentLang = this.props.i18n.language;
            // get item.[en/uk].name
            let pictureName = item[currentLang] && item[currentLang].name;
            return (
                <div key={i}>
                    <div className={styles.imageContainer}>
                        <InnerImageZoom src={item.src}
                                        fullscreenOnMobile/>
                    </div>
                    <div className={styles.description}>
                        <p>
                            <span>{pictureName && pictureName + ', '}</span>
                            {item.size && `${item.size} ${t("cm")}, `}
                            {item.material && t(item.material)}
                            {item.price && ', ' + item.price}
                        </p>
                    </div>
                </div>
            )
        });
    }
}

export default withTranslation()(Gallery);