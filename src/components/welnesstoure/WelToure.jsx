import React, { useState, useEffect } from 'react';
import './WelToure.css';

const cardData = [
  { id: 1, title: "Comprehensive Exploration", description: "Our round tour takes you on an unforgettable journey across Sri Lanka’s most iconic destinations. From the bustling streets of Colombo to the serene highlands of Nuwara Eliya, the cultural heart of Kandy, and the pristine beaches of Mirissa, you’ll experience the diverse beauty and rich heritage of this enchanting island.", image: "https://hungrybackpack.com/wp-content/uploads/2019/03/coconut-hill_berit-and-martin2-Kopie.jpg" },
  { id: 2, title: "Seamless Transition", description: "After exploring Sri Lanka’s vibrant landscapes and historic sites, transition seamlessly into a wellness stay designed to rejuvenate your mind, body, and spirit. This thoughtful combination ensures that you can unwind and reflect on your adventures in a peaceful setting.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejj9NaeBn2q-Q2zwNDxXQcOFdCl-FtpBe0g&s" },
  { id: 3, title: "Tailored Wellness Programs", description: "Our wellness retreats offer personalized programs that include yoga, meditation, Ayurvedic treatments, and spa services. Whether you’re looking to detox, de-stress, or simply relax, our expert practitioners will create a plan tailored to your specific needs and wellness goals.", image: "https://cfcdn.aerzteblatt.de/bilder/2017/06/img137226819.jpg" },
  { id: 4, title: "Holistic Health Benefits", description: "Combining a round tour with a wellness stay allows you to reap holistic health benefits. The physical activities and cultural engagements of the tour are complemented by the restorative practices of the wellness stay, promoting overall well-being and balance.", image: "https://cdn.prod.website-files.com/64357128deec6aef81568662/644bf633da5a6b4884706e66_blog-image-4.webp" },
  { id: 5, title: "Immersive Cultural Experience", description: "Dive deep into Sri Lankan culture with guided tours of ancient temples, vibrant markets, and historic sites. Learn about local traditions, savor authentic cuisine, and connect with the friendly locals, enriching your travel experience beyond the ordinary.", image: "https://www.thesrilankatravelblog.com/wp-content/uploads/2022/07/how-to-explore-buddhism-on-a-sri-lanka-holiday-header.jpg" },
  { id: 6, title: "Nature and Tranquility", description: "Enjoy the best of both worlds with our tour. Explore the natural beauty of Sri Lanka’s lush landscapes, waterfalls, and wildlife, then retreat to tranquil wellness centers set amidst serene environments, perfect for relaxation and meditation.", image: "https://www.civitatis.com/f/sri-lanka/sigiriya/safari-parque-minneriya-589x392.jpg" },
  { id: 7, title: "Stress-Free Travel", description: "Our all-inclusive package ensures a hassle-free experience. From transportation and accommodations to guided tours and wellness sessions, everything is taken care of. You can focus solely on enjoying your journey and achieving a state of complete relaxation.", image: "https://www.thesrilankatravelblog.com/wp-content/uploads/2022/01/a-guide-to-planning-sri-lanka-holidays-for-relaxation-header-1.jpg" },
  { id: 8, title: "Memorable Moments", description: "Create lasting memories as you explore Sri Lanka’s breathtaking scenery and immerse yourself in holistic wellness practices. The combination of adventure and relaxation guarantees a fulfilling and unforgettable travel experience.", image: "https://mahaweli.lk/wp-content/uploads/2022/07/11-300x200.jpg" },
];

const WelToure = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  useEffect(() => {
    const interval = setInterval(moveNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id={id} className="wel-toure-container">
      <div className="tour-info">
        <h2 className="tour-title">Experience the Best of Sri Lanka: Round Tour with Wellness Stay</h2>
        <p className="tour-description">The heaven on earth</p>
        <p className="tour-intro">
          Embark on a transformative journey through Sri Lanka with our unique round tour combined with a rejuvenating wellness stay. This meticulously crafted itinerary offers the perfect blend of adventure, cultural immersion, and holistic relaxation.
        </p>
      </div>
      <div className="wel-toure-cards" style={{ transform: `translateX(-${currentIndex * 220}px)` }}>
        {cardData.map((card) => (
          <div key={card.id} className="wel-toure-card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelToure;
