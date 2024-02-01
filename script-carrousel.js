(function(){document.querySelector("body").requestFullscreen();})();

// List of URLs to rotate through with custom zoom
const urls = [
    { url: "https://global-lb.inrangegolf.com/?challengeId=f5c1e3ad-e67a-49bc-9bd0-c251c9211426&tvDisplay=true", zoom: "100%" },
    { url: "https://global-lb.inrangegolf.com/?challengeId=6ee082dd-23e3-4e96-aeda-e04936f08292&tvDisplay=true", zoom: "100%" },
    { url: "https://global-lb.inrangegolf.com/?challengeId=56566197-c4cd-4d35-9b6a-8589e7d5d501&tvDisplay=true", zoom: "100%" },
    { url: "https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/0dc2d03fe217f8c83829496872af24a0/1/5/15mm_artificial_turf_golf_practice_mat_for_all_weather_conditions.jpg", zoom: "100%" },
    
    // Add more URLs with custom zoom if needed
  ];
  
  // Interval time in milliseconds for rotating the URLs (e.g., 10 seconds)
  const intervalTime = 5000; // 5 seconds
  
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
  