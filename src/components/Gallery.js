import React, {Component} from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Gallery.module.css";
import {withTranslation} from "react-i18next";
import email from "../data/email";
import 'react-image-lightbox/style.css';
import Lightbox from "react-image-lightbox";
import {isMobile} from 'react-device-detect';

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: props.pictures,
            currentSlide: 0,
            autoplay: true,
            lightBox: false
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
        this.slider.slickNext();
    };

    prev = () => {
        this.slider.slickPrev();
    };

    updateCurrentSlide = (oldIndex, index) => {
        const {currentSlide} = this.state;

        this.setState({
            currentSlide: index,
        });
        // if (currentSlide !== index) {
        //     this.setState({
        //         currentSlide: index,
        //     });
        // }
    };

    setIsOpenLightbox = (e, value) => {
        this.setState({
            lightBox: value,
            autoplay: !value
        })
    };

    render() {
        let {pictures, currentSlide, lightBox} = this.state;
        const {t} = this.props;
        return (
            <div className={styles.Gallery}>
                {this.getNavigationButtons(pictures, t)}
                <Slider ref={slider => (this.slider = slider)}
                        infinite={true}
                        initialSlide={0}
                        speed={500}
                        autoplay={this.state.autoplay}
                        autoplaySpeed={4000}
                        beforeChange={this.updateCurrentSlide}
                        arrows={false}
                        swipe={isMobile}>
                    {
                        this.mapPicturesToSlides(pictures, t)
                    }
                </Slider>
                {lightBox &&
                <Lightbox
                    mainSrc={pictures[currentSlide].src}
                    imagePadding={55}
                    onCloseRequest={(e) => this.setIsOpenLightbox(e, false)}
                />
                }
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
            // get item.name.[en/uk]
            let pictureName = item.name && item.name[currentLang];
            return (
                <div key={i} className={styles.unselectable}>
                    <div onClick={(e) => this.setIsOpenLightbox(e, true)} className={styles.clickable}>
                        <img src={item.src} alt={""}/>
                    </div>
                    <div className={styles.description}>
                        <p>
                            <span>{pictureName && pictureName + ', '}</span>
                            {item.size && `${item.size} ${t("cm")}, `}
                            {item.material && t(item.material)}
                            {item.price && ', ' + item.price}
                        </p>
                        {this.props.sale && this.buildBuyButton(item, pictureName, t)}
                    </div>
                </div>
            )
        });
    }

    buildBuyButton(item, pictureName, t) {
        let subject = `${t("EmailSubject")} “${pictureName}“`;
        let emailContent = `${t("EmailBody")} “${pictureName}“.`;
        return <a href={`mailto:?to=${email}&subject=${subject}&body=${emailContent}`}
                  className={styles.buyButton}>
            {t("Buy")}
        </a>;
    }
}

export default withTranslation()(Gallery);