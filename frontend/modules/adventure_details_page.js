import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL

  const params = new URLSearchParams(search);
  const Adventure=params.get('adventure') 
  return Adventure;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    const response = await fetch(
      config.backendEndpoint + `/adventures/detail?adventure=${adventureId}`
    );
    const json = await response.json();
    
    return json;
  } catch(err) {
    return null; // TypeError: failed to fetch
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
document.getElementById("adventure-name").innerHTML=adventure.name;
document.getElementById("adventure-subtitle").innerHTML=adventure.subtitle;
adventure.images.map((image)=>{
  let elements= document.createElement('div');
  elements.innerHTML="<img class ='activity-card-image' src='"+image+"'>";
  let divRowEle = document.getElementById('photo-gallery');
  divRowEle.append(elements);
})

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images

 let imagess=   document.createElement('div');
 imagess.className="carousel-inner";
 images.map((image,number)=>{
 if(number==0){
  let elements= document.createElement('div');
  elements.className="carousel-item active"
  elements.innerHTML='<img src="'+image+'" class="d-block w-100" >';
  imagess.append(elements);
 }else{
  let elements= document.createElement('div');
  elements.className="carousel-item "
  elements.innerHTML='<img src="'+image+'" class="d-block w-100" >';
  imagess.append(elements);
 }
  
})
  document.getElementById('photo-gallery').innerHTML=`<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  ${
    imagess.innerHTML
  }
 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;



}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
