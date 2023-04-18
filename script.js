// Get the link element
var link = document.querySelector('#elCopyright a');

// Change the text of the link element to "Powered by Panolas"
link.innerHTML = 'Powered by Panolas';

// Change the title attribute of the link element
link.title = 'Powered by Panolas';

// Set the link's href attribute to the YouTube URL
link.href = 'https://www.youtube.com/';

// Add a click event listener to the link
link.addEventListener('click', function(event) {
  // Prevent the default link behavior
  event.preventDefault();
  
  // Open the YouTube URL in a new tab
  window.open('https://www.youtube.com/', '_blank');
});