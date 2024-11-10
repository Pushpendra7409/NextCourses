import  { useState } from 'react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full pt-28 pb-28 bg-black flex items-center justify-center">
      <div className="relative w-full max-w-6xl aspect-video ">
        {!isPlaying ? (
         
          <div className="relative w-full h-full ">
            <img
              src="https://img.youtube.com/vi/dTDvpI43cF8/maxresdefault.jpg"
              alt="Video thumbnail"
              className="w-full h-full object-cover brightness-100 rounded-lg"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0"
            >
             <img src='/youtube.svg' className='h-20 w-20' alt='play-button' />
            </button>
          </div>
        ) : (
         
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dTDvpI43cF8?autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Video;
