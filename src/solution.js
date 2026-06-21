const storiesDiv = document.getElementById("stories")

function fetchTopStories() {
    const topTen = []
    const API_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    fetch(API_URL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            topTen.push(...data.slice(0, 10))
            console.log(topTen)
            storiesDiv.innerHTML = topTen
            Promise.all(
                topTen.map(function (id) {
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {
                            storiesDiv.innerHTML += "\n" + data.title + "\n"
                        })
                })
            )
        })
        .catch(function (e) {
            console.log(e)
        })
}
// TODO: Fetch the top stories and return their IDs.

fetchTopStories()
