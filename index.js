// Function to display posts (required by the lab)
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    
    // Clear any existing content
    postList.innerHTML = '';
    
    // Loop through the posts list (required)
    posts.forEach(post => {
        // Create an li element (required)
        const li = document.createElement('li');
        
        // Create an h1 element (required)
        const h1 = document.createElement('h1');
        // Set textContent to the title of the post (required)
        h1.textContent = post.title;
        
        // Create a p element (required)
        const p = document.createElement('p');
        // Set textContent to the body of the post (required)
        p.textContent = post.body;
        
        // Append h1 and p to li (required)
        li.appendChild(h1);
        li.appendChild(p);
        
        // Append li to the ul (required - ul has id "post-list")
        postList.appendChild(li);
    });
}

// Async function to fetch and display posts (required by the lab)
async function fetchAndDisplayPosts() {
    try {
        // Show loading state
        const postList = document.getElementById('post-list');
        postList.innerHTML = '<li class="loading">Loading posts...</li>';
        
        // Apply await to fetch (required)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON response
        const posts = await response.json();
        
        // Call displayPosts with the array of posts (required)
        displayPosts(posts);
        
    } catch (error) {
        console.error('Error fetching posts:', error);
        const postList = document.getElementById('post-list');
        postList.innerHTML = '<li class="error">Error loading posts. Please try again later.</li>';
    }
}

// Call the async function to fetch and display posts
fetchAndDisplayPosts();