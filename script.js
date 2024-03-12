// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {

  // Select all folder icons within elements having the class 'folder'
  const folderIcons = document.querySelectorAll('.folder .folder-icon');

  // Loop through each folder icon
  folderIcons.forEach(icon => {

    // Add click event listener to each folder icon
    icon.addEventListener('click', function() {

      // Get the next sibling element of the parent element of the clicked icon
      const subMenu = this.parentElement.nextElementSibling;

      // Toggle display of the submenu
      if (subMenu.style.display === 'block') {
        subMenu.style.display = 'none'; // Hide submenu if it's currently visible
      } else {
        subMenu.style.display = 'block'; // Show submenu if it's currently hidden
      }
    });
  });
});

// Another event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", function() {

  // Select all buttons within elements having the class 'filter-options'
  const allButtons = document.querySelectorAll('.filter-options button');

  // Loop through each button
  allButtons.forEach(button => {

    // Add click event listener to each button
    button.addEventListener('click', () => {

      // Toggle visibility of the next sibling element of the clicked button
      // Example: If the next sibling exists, toggle the 'show' class to control visibility
      const submenu = button.nextElementSibling;
      if (submenu) {
          submenu.classList.toggle('show');
      }
    });
  });
});
