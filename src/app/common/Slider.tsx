'use client'; // Use this if you're in the App Router
import "../globals.css";
import { Carousel } from 'react-bootstrap';

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      text: 'This is the description for Slide 1.',
      image: 'https://via.placeholder.com/400x270',
    },
    {
      id: 2,
      title: 'Slide 2',
      text: 'This is the description for Slide 2.',
      image: 'https://via.placeholder.com/400x270',
    },
    {
      id: 3,
      title: 'Slide 3',
      text: 'This is the description for Slide 3.',
      image: 'https://via.placeholder.com/400x270',
    },
  ];

  return (
    <Carousel className="emotions-slider">
      {slides.map((slide) => (
        <Carousel.Item key={slide.id} className="emotions-slider__slide">
          <div className="emotions-slider-item">
            <div className="emotions-slider-item__badge">Badge</div>
            <div className="emotions-slider-item__image">
              <img
                src={slide.image}
                alt={slide.title}
                className="d-block w-100"
              />
            </div>
            <div className="emotions-slider-item__content">
              <h3 className="emotions-slider-item__title">{slide.title}</h3>
              <p className="emotions-slider-item__text">{slide.text}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
