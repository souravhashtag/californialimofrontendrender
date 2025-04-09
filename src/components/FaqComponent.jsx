'use client';

import { useState } from "react";

export function FaqComponent() {
  
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Simplified toggle function
  const toggleAnswer = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "1. What is the best way to explore Napa Valley wineries?",
      answer: "Our luxury Napa Valley wine tour limo service provides a seamless and elegant way to explore the region's top wineries. With professional chauffeurs and premium vehicles, you can enjoy tastings without worrying about driving."
    },
    {
      question: "2. Do you offer wine tours in both Napa and Sonoma?",
      answer: "Yes! Our chauffeured wine tours in Napa and Sonoma let you experience the best of both regions. We customize your itinerary based on your preferences, from boutique vineyards to world-famous estates."
    },
    {
      question: "3. Can I book a private limousine for a group wine tour?",
      answer: "Absolutely! Whether it's a romantic getaway, birthday celebration, or corporate event, our private limo wine tours accommodate groups of all sizes with luxury vehicles and personalized service."
    },
    {
      question: "4. What types of limousines are available for wine tours?",
      answer: "We offer a range of vehicles, including sedans, luxury SUVs, and sprinter vans—perfect for solo travelers, couples, and large groups looking for a stylish ride."
    },
    {
      question: "5. Do your chauffeurs provide winery recommendations?",
      answer: "Yes! Our chauffeurs are knowledgeable about the best wineries in Napa, Sonoma, and Livermore. They can recommend must-visit spots based on your wine preferences and interests."
    },
    {
      question: "6. Can I customize my wine tour itinerary?",
      answer: "Of course! We offer fully customizable wine tours, allowing you to select your preferred wineries, tasting experiences, and even stops for lunch or sightseeing."
    },
    {
      question: "7. Is wine tasting included in the limo service?",
      answer: "Our service covers luxury transportation, and while we assist with reservations, tasting fees are paid separately at each winery. Many wineries require advance bookings, which we can help coordinate."
    },
    {
      question: "8. Do you offer wine tours in Paso Robles and Santa Barbara?",
      answer: "Yes! We provide luxury wine tours in Paso Robles, Santa Barbara, and Temecula, offering a high-end experience across California's top wine regions."
    },
    {
      question: "9. Can I book a limo wine tour from San Francisco to Napa?",
      answer: "Yes! Our San Francisco to Napa wine tour limo service offers a comfortable and stylish way to visit wineries without the hassle of driving or planning logistics."
    },
    {
      question: "10. Are your wine tours available for bachelorette parties or anniversaries?",
      answer: "Absolutely! Our bachelorette party wine tours and anniversary wine experiences make for unforgettable celebrations, complete with luxury transportation and exclusive winery visits."
    }
  ];
  
  return (
    <>
      <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <h6></h6>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="elementskit-post-image-card" style={{margin: "0px"}}>
                <div className="elementskit-post-body">
                  <div className="post-meta-list"></div>
                  
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h2 
                        className="entry-title question" 
                        style={{
                          padding: "20px 30px",
                          backgroundColor: "#eee",
                          borderRadius: "18px",
                          cursor: "pointer",
                          marginBottom: activeIndex === index ? "0" : "10px"
                        }}
                        onClick={() => toggleAnswer(index)}
                      >
                        {item.question}
                        <i 
                          className={`lni lni-chevron-${activeIndex === index ? 'up' : 'down'}-circle`} 
                          style={{float: "right"}} 
                          aria-hidden="true"
                        ></i>
                      </h2>
                      <div 
                        className="btn-wraper answer"
                        style={{
                          display: activeIndex === index ? "block" : "none",
                          padding: "0px 40px 30px",
                          marginBottom: "10px"
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}