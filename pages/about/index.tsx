import React from "react";

const AboutText: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">About This Website</h2>
      <p className="leading-relaxed">
        {/* Disclimer required from TMDB agreement */}
        This website uses TMDB and the TMDB APIs but is not endorsed, certified,
        or otherwise approved by TMDB.
      </p>
      <p className="leading-relaxed">
        {/* Thank you chatGPT! :) */}
        Welcome to our best 1990 movie database, where you can explore a vast
        collection of movies from various genres with rating more than 8.
        Discover detailed information about your favorite films, including cast,
        director, and other information. Use our search feature to find movies
        quickly, and enjoy a seamless browsing experience with our
        mobile-friendly design. Whether you&apos;re looking for the latest
        blockbusters or classic films, we&apos;ve got something for every movie
        enthusiast!
      </p>
    </div>
  );
};

export default AboutText;
