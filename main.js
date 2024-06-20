// main.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('thread-form');
  const threadsList = document.getElementById('threads');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('thread-title').value;
    const content = document.getElementById('thread-content').value;
    
    // Create a new thread item
    const li = document.createElement('li');
    const threadTitle = document.createElement('h3');
    const threadContent = document.createElement('p');
    const editButton = document.createElement('button');
    
    threadTitle.textContent = title;
    threadContent.textContent = content;
    editButton.textContent = 'Edit';
    
    li.appendChild(threadTitle);
    li.appendChild(threadContent);
    li.appendChild(editButton);
    
    // Add edit functionality
    editButton.addEventListener('click', function() {
      const newTitle = prompt('Enter new title:', threadTitle.textContent);
      const newContent = prompt('Enter new content:', threadContent.textContent);
      
      if (newTitle !== null) {
        threadTitle.textContent = newTitle;
      }
      if (newContent !== null) {
        threadContent.textContent = newContent;
      }
    });
    
    // Append the thread to the list
    threadsList.appendChild(li);
    
    // Clear the form
    form.reset();
  });
});
