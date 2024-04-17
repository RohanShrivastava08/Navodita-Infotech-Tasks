document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR API KEY'; // Replace with your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Function to fetch live news and update the news feed
    function fetchAndUpdateNews() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const newsFeed = document.getElementById('news-feed');
                newsFeed.innerHTML = ''; // Clear existing news
                data.articles.forEach(article => {
                    const articleElement = document.createElement('div');
                    articleElement.classList.add('article');
                    articleElement.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    `;
                    newsFeed.appendChild(articleElement);
                });
            })
            .catch(error => console.error('Error fetching news:', error));
    }

    // Initial fetch and update
    fetchAndUpdateNews();

    // Set interval to fetch and update news every 5 minutes (adjust as needed)
    setInterval(fetchAndUpdateNews, 300000); // 5 minutes in milliseconds
});
