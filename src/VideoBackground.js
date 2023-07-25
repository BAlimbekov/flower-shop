import React, { useEffect } from 'react';

const VideoBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = document.querySelector('.video-container');
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this value as needed

      // Get the actual height of the video element to calculate the scroll threshold
      const videoHeight = videoContainer.offsetHeight;

      if (scrollPosition > videoHeight - threshold) {
        videoContainer.style.backgroundColor = '#F9C7B7';
      } else {
        videoContainer.style.backgroundColor = 'transparent';
      }
    };

    // Add the event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0458/large_watermarked/_import_60bf29cc189ab6.27582794_FPpreview.mp4" type="video/mp4" />
        {/* Add additional video sources for cross-browser compatibility (WebM, Ogg, etc.) */}
      </video>
    </div>
  );
};

export default VideoBackground;




//src="https://v4.cdnpk.net/videvo_files/video/free/video0458/large_watermarked/_import_60bf29cc189ab6.27582794_FPpreview.mp4" type="video/mp4" />