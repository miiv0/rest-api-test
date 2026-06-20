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
        })
        .catch(function (e) {
            console.log(e)
        })
    return topTen
}
// TODO: Fetch the top stories and return their IDs.

const topStories = fetchTopStories()
console.log(topStories)
