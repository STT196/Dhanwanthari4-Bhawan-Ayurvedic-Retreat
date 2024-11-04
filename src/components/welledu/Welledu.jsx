import React, { useEffect } from 'react';
import './Welledu.css';

const courses = [
  {
    title: 'Ayurveda Today',
    description: 'Ayurveda or Ayurvedic medicine is a system of traditional medicine native to India, which uses a range of treatments, including panchakarma.',
    image: 'https://wallpapercave.com/wp/wp6845566.jpg',
  },
  {
    title: 'Ayurveda Therapy',
    description: 'Yoga relieves tension, boosts clarity, and promotes relaxation, while Ayurveda balances energy and enhances well-being. Together, they reduce stress and improve health.',
    image: 'https://avocure-uploads.s3.amazonaws.com/uploads/procedure/image/388/8e30d590-11da-4d07-b2dd-4d1dd7709a15.jpg',
  },
  {
    title: 'Diploma in Yoga',
    description: 'Discover the essence of holistic beauty care through the lens of Ayurveda with our Ayurvedic Beauty Therapy (ABT) program.',
    image: 'https://cdn.magicdecor.in/com/2023/11/22175205/Warrior-Yoga-Pose-by-Woman-Wallpaper-for-Wall.jpg',
  },
  {
    title: 'Diploma in Herbal Beauty Therapy',
    description: 'A course on creating natural skincare and cosmetics using herbal ingredients, focusing on Ayurvedic principles for wellness and beauty.',
    image: 'https://www.kottakkalayurveda.ae/uploads/thumb/232-806-1610010991.jpg',
  },
  {
    title: 'Diploma in Herbal Beauty Product Manufacturing',
    description: 'Learn to create natural skincare and cosmetics products using Ayurvedic principles and herbal ingredients.',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20220601/pngtree-spa-and-beauty-aroma-and-oils-beauty-herbal-cosmetic-photo-image_5833252.jpg',
  },
];

const Welledu = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          card.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="welledu-container">
      <div className="header">
        <h1>Wellness Education</h1>
        <p>
          Wellness lifestyle is essential to provide tools that promote healthy growth 
          and overall well-being. At this stage of development, adopting balanced eating 
          habits and encouraging physical activity help not only to control body weight, 
          but also to develop strong bones and a resilient cardiovascular system.
        </p>
      </div>
      
      <div className="cards-container">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <img src={course.image} alt={course.title} className="card-image" />
            <h3 className="card-title">{course.title}</h3>
            <p className="card-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welledu;
