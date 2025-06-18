import React from 'react';
import './Home.css'; // Assuming your CSS file is named Home.css

const Home = () => {
  return (
    <div className="home-container">
      {/* ...existing code... */}

      <section className="story-section">
        <h2>Where Every Drop Makes a Story</h2>
        <div className="story-columns">
          {/* News Column */}
          <div className="story-column">
            {/* Top News */}
            <div className="news-card"> {/* Existing code for first news card */} </div>
            {/* Bottom News */}
            <div className="news-card"> {/* Existing code for second news card */} </div>
            <button className="story-action news-action">Dive Deeper into News</button>
          </div>
          {/* Events Column */}
          <div className="story-column">
            {/* Top Event */}
            <div className="event-card"> {/* Existing code for first event card */} </div>
            {/* Bottom Event */}
            <div className="event-card"> {/* Existing code for second event card */} </div>
            <button className="story-action event-action">Explore All Events</button>
          </div>
          {/* Share Story Column */}
          <div className="story-column">
            {/* Top Share Story */}
            <div className="share-story-card"> {/* Existing code for first share story card */} </div>
            {/* Bottom Share Story */}
            <div className="share-story-card"> {/* Existing code for second share story card */} </div>
            <button className="story-action share-action">Share Your Story</button>
          </div>
        </div>
      </section>

      {/* ...existing code... */}
    </div>
  );
};

export default Home;