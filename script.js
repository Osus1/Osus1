const newsItems = document.querySelectorAll('.news-item');
let current = 0;

function showNews() {
  newsItems.forEach((item, i) => {
    item.classList.remove('active');
    if (i === current) item.classList.add('active');
  });
  current = (current + 1) % newsItems.length;
}

setInterval(showNews, 3000); // يتغير الخبر كل 3 ثواني




