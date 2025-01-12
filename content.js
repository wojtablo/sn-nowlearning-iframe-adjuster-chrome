// content.js
(function () {
    console.log('Chrome Extension: Checking for iframe on specific course page...');
  
    const isValidCoursePage = () => {
      const url = new URL(window.location.href);
      const idParam = url.searchParams.get('id');
      const courseIdParam = url.searchParams.get('course_id');
  
      return idParam === 'learning_course' && courseIdParam && courseIdParam.trim() !== '';
    };
  
    if (!isValidCoursePage()) {
      console.log('Not a valid course page. Script will not run.');
      return;
    }
  
    console.log('Valid course page detected. Checking for iframe every 1 second, up to 20 seconds...');
  
    let elapsedTime = 0; // Track the elapsed time
    const maxWaitTime = 20000; // Maximum wait time in milliseconds
    const intervalTime = 1000; // Interval time in milliseconds
  
    // Set up a 1-second interval to check for the iframe
    const interval = setInterval(() => {
      elapsedTime += intervalTime;
  
      // Get the iframe element by class name
      const iframe = document.getElementsByClassName('scorm-iframe')[0];
  
      if (iframe) {
        console.log('Iframe found! Applying height and setting up load listener.');
  
        // Set iframe height to 90vh
        iframe.style.height = '90vh';
  
        // Add iframe load event listener
        iframe.addEventListener('load', () => {
          console.log('Iframe content is fully loaded!');
  
          try {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            console.log('Iframe content:', iframeDocument.body.innerHTML);
          } catch (error) {
            console.error('Cannot access iframe content due to cross-origin restrictions.');
          }
        });
  
        // Stop the interval since the iframe was found
        clearInterval(interval);
      } else if (elapsedTime >= maxWaitTime) {
        console.error('Iframe not found within 20 seconds. Stopping the check.');
        clearInterval(interval); // Stop checking after 20 seconds
      } else {
        console.log('Iframe not found yet. Retrying...');
      }
    }, intervalTime); // Check every 1 second
  })();
  