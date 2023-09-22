const axios = require("axios");
const BASE_URL = `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=100`;
const BASE_URL2 = `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts?_embed&per_page=100&page=2`;
const POST_URL = `https://braininventoryblogs.com/wordpress/index.php/wp-json/wp/v2/posts/`;

export async function getPosts() {
  let restore = [];
  if (restore.length > 0) {
    return restore;
  } else {
    const postsRes = await axios.get(BASE_URL);
    const postsRes2 = await axios.get(BASE_URL2);
    restore = [...postsRes.data, ...postsRes2.data];
    console.log(restore);
  }
  return restore;
}
export async function getNumberOfPosts() {
  const postsRes = await fetch(BASE_URL);
  const totalPages = postsRes.headers.get("X-WP-Total");

  return totalPages;
}

export async function getPost(id) {
  const post = await fetch(POST_URL + id);
  const blog = await post.json();
  return blog;
}

export async function getEvents() {
  const eventsRes = await fetch(BASE_URL + "/events?_embed");
  const events = await eventsRes.json();
  return events;
}

export async function getEvent(slug) {
  const events = await getEvents();

  const eventArray = events.filter((event) => event.slug == slug);
  const event = eventArray.length > 0 ? eventArray[0] : null;
  return event;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "events":
      elements = await getEvents();
      break;
  }
  const elementsIds =
    elements &&
    elements.map((element) => {
      return {
        params: {
          slug: element.slug,
        },
      };
    });
  return elementsIds;
}
