// Get the link element
var link = document.querySelector('#elCopyright a');

// Set the link's href attribute to the YouTube URL
link.href = 'https://www.youtube.com/';

// Add a click event listener to the link
link.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();
  
  // Open the YouTube URL in a new tab
  window.open('https://www.youtube.com/', '_blank');
});