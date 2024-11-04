// Package.js
import React from 'react';
import './Package.css';

const Package = () => {
  const packages = [
    {
      title: 'Dhanwanthari Ayurvedic Wellness Package',
      description: `(7 day-10 day-14 day-21 day-30 day)`,
      price: '$120 per person | Per day',
      services: [
        'Doctor consultations',
        'Luxurious accommodation',
        'Sri Lankan traditional healthy foods',
        'Ayurvedic treatments',
        'Yoga and Meditation',
        'Relevant demonstrations',
        'Safaris and activities',
        'Excursions',
      ],
      image: 'https://broganabroad.com/wp-content/uploads/2018/05/Ayurvedic-Massage.jpg.webp',
    },
    {
      title: 'Dhanwanthari Ayurvedic Healing Package',
      description: `(14 day-21 day-30 day)`,
      price: '$120 per person | Per day',
      services: [
        'Doctor consultations',
        'Luxurious accommodation',
        'Sri Lankan traditional healthy foods',
        'Ayurvedic treatments',
        'Yoga and Meditation',
        'Relevant demonstrations',
        'Follow-ups',
      ],
      image: 'https://d3bfon2twrfdyk.cloudfront.net/sites/12/2016/08/800x450.jpg',
    },
    {
      title: 'Dhanwanthari Ayurvedic Fertility Increasing Package',
      description: `(30 day)`,
      price: '$200 per person | Per day',
      services: [
        'Doctor consultations',
        'Luxurious accommodation',
        'Sri Lankan traditional healthy foods',
        'Ayurvedic treatments',
        'Yoga and Meditation',
        'Relevant demonstrations',
        'Safaris and activities',
        'Excursions',
      ],
      image: 'https://images.squarespace-cdn.com/content/v1/5bb10306b10f25f10409dc69/1547344631310-JKWSO6K7VUUCLQ9SUT8K/NICE%2BLOWRES_0326.jpg',
    },
  ];

  return (
    <section id="package-section">
      <h1 className="package-heading">Packages and Prices</h1>
      <p className="package-description-text">
        Dhanwanthari Bhawan special in-house Ayurvedic treatment packages are
        comprehensive programs designed to promote health, balance, and well-being
        based on the principles of Ayurveda, an ancient Sri Lankan system of
        medicine.
      </p>

      <div className="package-container">
        {packages.map((pkg, index) => (
          <div
            className={`package-column ${
              index % 2 === 0 ? 'color-one' : 'color-two'
            }`}
            key={index}
          >
            <img src={pkg.image} alt={pkg.title} className="package-img" />
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-description">{pkg.description}</p>
            <p className="package-price">{pkg.price}</p>
            <ul className="service-list">
              {pkg.services.map((service, i) => (
                <li key={i} className="service-item">
                  <i className="fas fa-check service-icon"></i> {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Package;
