/*

User Stories

User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.
User Story: I can click a button to see a random Wikipedia entry.

*/

// Variables
const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');
const results = document.querySelector('#results .row');

// Add event listener to search button
searchButton.addEventListener('click', getData);
searchText.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    getData();
  }
});

// Create function to retrieve data
function getData() {
  // Clear results
  results.innerHTML = "";

  const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText.value + "&format=json&origin=*";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data[1].length; i++) {
        results.innerHTML += `
          <div class="col-xs-12 col-md-6">
            <div class="card">
              <div class="card-header">
                ${data[1][i]}
              </div>
              <div class="card-body">
                <p class="card-text">${data[2][i]}</p>
                <a href="${data[3][i]}" class="btn btn-primary">Full article</a>
              </div>
            </div>
          </div>
        `
      }
      searchText.value = "";
    })
    .catch(err => console.log(err));
}