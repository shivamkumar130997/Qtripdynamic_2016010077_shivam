import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  try {
    const response = await fetch(
      config.backendEndpoint +`/cities`
    );
    const json = await response.json();
    
    return json;
  } catch(err) {
    return null; // TypeError: failed to fetch
  }
    

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM


  let container= document.createElement("div");
  container.className="col-4";
  let InnerHtml=`<div class="card" style="width: 15rem;">
  <img src=${image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${city}</h5>
    <a href="pages/adventures/?city=${id}" id="${id}" class="btn btn-primary">${description}</a>
  </div>
</div>`;
container.innerHTML=InnerHtml
    document.getElementById("data").append(container);
 
 
}

export { init, fetchCities, addCityToDOM };
