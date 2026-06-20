// Page Elements
const storiesDiv = document.getElementById("stories");

/**
 * @typedef {Object} Story
 * @property {number} id - The Hacker News story ID.
 * @property {string} title - The story's title.
 * @property {string} url - The link to the story.
 */

/**
 * Finds the top stories on Hacker News.
 *
 * @param {number} [limit=10] - The maximum number of stories to fetch.
 * @returns {number[]} The IDs of the top stories.
 */
function fetchTopStories(limit = 10) {
  const API_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  // TODO: Fetch the top stories and return their IDs.
}

/** 
 * Fetch a Hacker News story by its ID.
 *
 * @param {number} ID - The story's ID.
 * @return {Story} The story's data.
 */
function fetchStory(id) {
  const API_URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

  // TODO: Fetch the story data using its ID.
}

/**
 * Render Hacker News stories to the DOM.
 *
 * @param {HTMLDivElement} targetDiv - The `<div>` the stories will mount to.
 * @param {Story[]} stories - The stories to render.
 */
function renderStories(targetDiv, stories = []) {
  // TODO: Transform a Hacker News story into HTML.
  // TODO: Render the HTML stories to the target `<div>`.
}

const topStoryIDs = fetchTopStories();
const stories = topStoryIDs.map((id) => fetchStory(id));

renderStories(storiesDiv, stories);