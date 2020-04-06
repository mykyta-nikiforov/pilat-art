import React, {Component} from "react";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Gallery.module.css";
import {withTranslation} from "react-i18next";
import email from "../data/email";


export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: props.pictures,
            currentSlide: 0,
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
            <div className={styles.Gallery}>
                {this.getNavigationButtons(pictures, t)}
                <Slider ref={slider => (this.slider = slider)}
                        infinite={true}
                        speed={500}
                        afterChange={this.updateCurrentSlide}
                        slidesToShow={1}

                >
                    {
                        this.mapPicturesToSlides(pictures, t)
                    }
                </Slider>
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
                <div key={i}>
                    <div className={styles.imageContainer}>
                        <img src={item.src}/>
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