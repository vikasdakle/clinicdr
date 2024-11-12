import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import one from '../assets/gallerycss/1.png';
import two from '../assets/gallerycss/2.png';
import three from '../assets/gallerycss/3.png';
import four from '../assets/gallerycss/4.png';
import five from '../assets/gallerycss/5.png';
import six from '../assets/gallerycss/6.png';
import seven from '../assets/gallerycss/7.png';
import eight from '../assets/gallerycss/8.jpg';
import nine from '../assets/gallerycss/9.png';
import ten from '../assets/gallerycss/10.jpg';
import eleven from '../assets/gallerycss/11.png';
import twelth from '../assets/gallerycss/12.jpg';
import thirteen from '../assets/gallerycss/13.png';
import fourteen from '../assets/gallerycss/14.jpg';
import './gallery.css';

const images = [
    { id: 1, src: one, alt: 'Image 1' },
    { id: 2, src: two, alt: 'Image 2' },
    { id: 3, src: three, alt: 'Image 3' },
    { id: 4, src: four, alt: 'Image 4' },
    { id: 5, src: five, alt: 'Image 5' },
    { id: 6, src: six, alt: 'Image 6' },
    { id: 7, src: seven, alt: 'Image 7' },
    { id: 8, src: eight, alt: 'Image 8' },
    { id: 9, src: nine, alt: 'Image 9' },
    { id: 10, src: ten, alt: 'Image 10' },
    { id: 11, src: eleven, alt: 'Image 11' },
    { id: 12, src: twelth, alt: 'Image 12' },
    { id: 13, src: thirteen, alt: 'Image 13' },
    { id: 14, src: fourteen, alt: 'Image 14' },
];


const Gallery = () => {
    return <>
        <div className="col-md-12 pt-4 mt-5 d-flex justify-content-center">
            <h2 style={{ color: "rgb(0, 63, 139)", fontSize: "2rem", marginBottom: "30px" }} className='fw-bold'>Gallery</h2>
        </div>
        <div className="gallery-container mb-5">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="image-wrapper">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery-image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </>
};

export default Gallery;
