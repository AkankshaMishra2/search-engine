
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history-button');

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

function renderHistory() {
    historyList.innerHTML = '';
    searchHistory.forEach(query => {
        const listItem = document.createElement('li');
        listItem.textContent = query;
        historyList.appendChild(listItem);
    });
}

renderHistory();

searchButton.addEventListener('click', function() {
    const query = searchInput.value;
    if (query) {
        searchHistory.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        const listItem = document.createElement('li');
        listItem.textContent = query;
        historyList.appendChild(listItem);
        searchInput.value = '';
    }
});

clearHistoryButton.addEventListener('click', function() {
    searchHistory = [];
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    historyList.innerHTML = '';
});