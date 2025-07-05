async function fetchWikipediaArticle(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&titles=${encodeURIComponent(title)}&prop=extracts&explaintext`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId];
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function search() {
    var title = document.querySelector('input').value;
    fetchWikipediaArticle(title)
    .then(extract => {
        if (extract) {
            console.log(extract);
            document.querySelector('h1').innerHTML = extract['title'];
            document.querySelector('p').innerHTML = extract['extract'];
        }
    });
}