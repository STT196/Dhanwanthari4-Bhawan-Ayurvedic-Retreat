import React from 'react';
import './Procedure.css';

const Procedure = () => {
    const treatments = [
        {
            title: "Herbal oil Full body massage",
            description: " Herbal oil full body massage is a therapeutic practice where a massage therapist uses herbal-infused oils to massage the entire body. These oils are typically made by infusing carrier oils with various herbs and plant extracts, known for their therapeutic properties. The massage involves applying gentle pressure and long, flowing strokes to relax muscles, improve circulation, alleviate tension, and promote overall well-being. The choice of herbs in the oil can vary based on the desired effect, such as relaxation, rejuvenation, or pain relief.",
            imgSrc: "https://img.freepik.com/premium-photo/relaxed-man-enjoying-back-massage-with-herbal-compress-during-spa-treatment_637285-2252.jpg",
        },
        {
            title: "Shirodhara",
            description: "Shirodhara is a traditional Ayurvedic therapy originating from India. It involves gently pouring warm herbal oil or other liquids over the forehead, specifically targeting the area between the eyebrows, known as the third eye or ajna chakra. The liquid is typically poured in a continuous stream for a specific duration, creating a rhythmic and soothing sensation. Shirodhara is believed to promote relaxation, balance the nervous system, alleviate stress, improve sleep quality, and enhance mental clarity. It is often used as a part of holistic wellness treatments to promote overall health and well-being.",
            imgSrc: "https://www.keralaayurveda.biz/images/blogimage/Blog%20banner%202%20(1).png",
        },
        {
            title: "Herbal powder massage",
            description: "Herbal powder massage, also known as Udvartana in Ayurveda, is a therapeutic massage technique that involves using herbal powders to massage the body. The powders are typically made from a blend of dried herbs, grains, and other natural ingredients that are finely ground into a powder. During an herbal powder massage, the powdered mixture is applied to the body and then massaged into the skin using specific strokes and techniques. The massage aims to exfoliate dead skin cells, improve circulation, stimulate the lymphatic system, and detoxify the body. Herbal powder massages are believed to help reduce cellulite, promote weight loss, improve skin texture, and relieve muscle tension. ",
            imgSrc: "https://media.istockphoto.com/id/124669330/photo/a-traditional-indian-ayurvedic-oil-foot-massage.jpg?s=612x612&w=0&k=20&c=ewpyOuFK2M7mZyKkFjHB4qySIHjafZ16TxGD0ypxyY4=",
        },
        {
            title: "Herbal Steam bath",
            description: "A herbal steam bath, also known as an herbal sauna or herbal steam room, is a therapeutic practice that involves using steam infused with herbal extracts to promote relaxation, detoxification, and overall well-being. During a herbal steam bath, a combination of aromatic herbs is typically placed in a container or pouch and suspended over a source of steam, such as a pot of hot water or a steam generator. As the steam rises, it carries the aromatic compounds from the herbs into the air, creating a fragrant and therapeutic atmosphere.  Participants in a herbal steam bath sit or recline in a steam-filled room or enclosure, allowing the herbal-infused steam to envelop their body. The steam and herbal vapors are believed to open pores, cleanse the skin, improve circulation, relieve muscle tension, and support respiratory health.",
            imgSrc: "https://indianayurvedacenters.com/wp-content/uploads/2019/11/11.jpg",
        },
        {
            title: "Aromatherapy",
            description: "Aromatherapy is a holistic healing treatment that uses natural plant extracts, known as essential oils, to promote physical, emotional, and psychological well-being. These essential oils are extracted from various parts of plants, including flowers, leaves, bark, roots, and fruits, and they contain concentrated compounds that give them characteristic fragrances and therapeutic properties. During an aromatherapy session, the essential oils can be inhaled, applied to the skin through massage, or added to baths or diffusers to disperse the aroma into the air. Depending on the specific essential oils used, aromatherapy can have a wide range of effects, including relaxation, stress relief, mood enhancement, pain relief, improved sleep, and increased energy.",
            imgSrc: "https://thecoconutmama.com/wp-content/uploads/2023/08/aromatherapy-featured-jpg.webp",
        },
        {
            title: "Foot reflexology.",
            description: "Foot reflexology is a therapeutic practice based on the principle that specific points on the feet correspond to different organs and systems within the body. By applying pressure to these points, reflexologists believe they can promote healing and balance throughout the body. During a foot reflexology session, a practitioner uses their hands, fingers, and thumbs to massage and stimulate these specific points on the feet. This stimulation is  to help release tension, improve circulation, alleviate pain, and support overall well-being. Foot reflexology is often used as a complementary therapy to promote relaxation and holistic health.",
            imgSrc: "https://st3.depositphotos.com/1177973/13134/i/450/depositphotos_131343090-stock-photo-foot-massage-in-spa-salon.jpg",
        },
        {
            title: "Herbal Facial",
            description: "  A herbal facial is a skincare treatment that involves the use of natural herbs and botanical extracts to cleanse, exfoliate, and nourish the skin. During a herbal facial, various herbal ingredients such as dried herbs, herbal powders, essential oils, and herbal-infused creams or masks are used to address specific skin concerns and promote skin health. The process typically includes steps like cleansing the skin, exfoliating to remove dead skin cells, steaming to open pores, applying herbal masks or packs tailored to the individual's skin type and concerns, and finishing with moisturizing and toning the skin. Herbal facials are often sought after for their soothing and rejuvenating effects, as well as their potential to provide additional benefits such as reducing inflammation, promoting collagen production, and improving skin tone and texture.",
            imgSrc: "https://ayurvedicsutra.com/cdn/shop/articles/young-woman-is-lying-spa-table-with-white-facial-mask-her-face-she-is-wearing-white-towel-around-her-head-her-eyes-are-closed_14117-173429.jpg?v=1713259522",
        },
         {
            title: "Yoga Therapy ",
            description: " Yoga therapy is a personalized, holistic approach to well-being that combines various yoga techniques to address physical, mental, and emotional health issues. Unlike traditional yoga classes, yoga therapy tailors its methods to meet specific health needs, making it ideal for managing conditions like chronic pain, stress, anxiety, depression, and limited flexibility. It incorporates breathing exercises, physical postures, mindfulness, and meditation to support the body’s natural healing processes.The breathing techniques, known as pranayama, are an essential part of yoga therapy, as they help calm the nervous system and enhance focus. Common breathing exercises include deep diaphragmatic breathing, which involves breathing deeply into the belly to slow down the heart rate and encourage relaxation, and alternate nostril breathing Nadi Shodhana which balances the left and right sides of the body and mind.",
            imgSrc: "https://thedetoxcenter.com/wp-content/uploads/2020/06/AdobeStock_175977887-300x200.jpeg",
        },
         {
            title: "Meditation",
            description: "Meditation in Ayurveda is a practice of calming the mind and connecting with the inner self to promote balance and well-being. It helps reduce stress, increase focus, and enhance emotional health by grounding the mind in the present moment. In Ayurvedic meditation, a peaceful environment is essential; sitting comfortably, focus on slow, deep breathing to calm the body. Practitioners often use a mantra, a word or phrase repeated mentally, to deepen focus and quiet the mind. Specific Ayurvedic techniques, like So Hum breathing, synchronize breath and awareness, creating a harmonious state that supports mental clarity, reduces anxiety, and balances the body’s energies.",
            imgSrc: "https://myprojectme.com/wp-content/uploads/2016/02/Meditation-Mother.jpg",
        },
    ];

    return (
        <div className="procedure-container">
            <div className="procedure-title">
                <h1>Dhanwanthari Bhawan Ayurvedic Retreat Procedure</h1>
                <p>Lord Dhanvantari is a deity in Hinduism associated with Ayurveda, the traditional Indian system of medicine. He is often depicted holding a pot of Amrita, <br></br>the elixir of immortality, and is regarded as the divine physician who brought Ayurveda to mankind.</p>
            </div>
            <div className="treatments-grid">
                {treatments.map((treatment, index) => (
                    <div className="treatment-card" key={index}>
                        <img src={treatment.imgSrc} alt={treatment.title} className="treatment-image" />
                        <h3 className="treatment-title">{treatment.title}</h3>
                        <p className="treatment-description">{treatment.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Procedure;
