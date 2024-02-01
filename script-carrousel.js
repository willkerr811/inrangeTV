(function(){document.querySelector("body").requestFullscreen();})();

// List of URLs to rotate through with custom zoom
const urls = [
    { url: "https://global-lb.inrangegolf.com/?&challengeCode=SinglePlayerNearestToPin&date=Today&tvDisplay=true&animate=true&limit=15", zoom: "100%" },
    { url: "https://global-lb.inrangegolf.com/?&challengeCode=MultiPlayerLongestDrive&date=Today&tvDisplay=true&animate=true&limit=15", zoom: "100%" },
    { url: "https://global-lb.inrangegolf.com/?&challengeCode=MultiPlayerTwentyOne&date=Today&tvDisplay=true&animate=true&limit=15", zoom: "100%" },
    { url: "https://s3.eu-west-1.amazonaws.com/app-media.inrangegolf.com/test/brandedChallenge/dutchgolfshow/carousel_dgc.jpg", zoom: "100%" },
    
    // Add more URLs with custom zoom if needed
  ];
  
  // Interval time in milliseconds for rotating the URLs (e.g., 10 seconds)
  const intervalTime = 15000; // 5 seconds
  
  // Index to keep track of the current URL
  let currentUrlIndex = 0;
  
  // Function to update the iframe URL with fade transition and custom zoom
  function updateIframeWithFade() {
    const iframe = document.getElementById('rotatingIframe');
    const nextIframe = document.createElement('iframe');
    nextIframe.src = urls[currentUrlIndex].url;
    nextIframe.classList.add('hidden');
    document.body.appendChild(nextIframe);
  
    const customZoom = urls[currentUrlIndex].zoom;
    nextIframe.style.transform = `scale(${customZoom})`;

    
  
    nextIframe.onload = () => {
      iframe.classList.add('hidden');
      setTimeout(() => {
        document.body.removeChild(iframe);
        nextIframe.classList.remove('hidden');
        nextIframe.id = 'rotatingIframe';
        currentUrlIndex = (currentUrlIndex + 1) % urls.length;
      }, 500); // Wait for the fade-out transition to complete (0.5s)
    };
  }
  
  // Start the rotation
  window.onload = function() {
    updateIframeWithFade();
    setInterval(updateIframeWithFade, intervalTime);
  };
  