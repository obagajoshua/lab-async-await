// Write your code here
// Displays the posts on the page
function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.append(h1, p);
    ul.appendChild(li);
  });
}


async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    displayPosts(posts);
  } catch (err) {
    console.log("Error:", err);
  }
}

getPosts();
