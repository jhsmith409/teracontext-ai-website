// Simple Lunr.js search for blog posts
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search');
  const postsList = document.querySelector('.posts-list');
  const postItems = postsList ? postsList.querySelectorAll('li') : [];

  if (!searchInput || postItems.length === 0) return;

  // Index posts
  const idx = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('date');

    postItems.forEach((item, id) => {
      const title = item.querySelector('a') ? item.querySelector('a').textContent : '';
      const date = item.querySelector('.post-date') ? item.querySelector('.post-date').textContent : '';
      this.add({
        id: id.toString(),
        title: title,
        date: date
      });
    });
  });

  searchInput.addEventListener('input', function() {
    const query = this.value;
    postsList.innerHTML = '';

    if (query === '') {
      // Show all
      postItems.forEach(item => postsList.appendChild(item.cloneNode(true)));
    } else {
      const results = idx.search(query);
      results.forEach(result => {
        const item = postItems[parseInt(result.ref)];
        if (item) postsList.appendChild(item.cloneNode(true));
      });
    }
  });
});