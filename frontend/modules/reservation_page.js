import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them

  try {
    const response = await fetch(config.backendEndpoint + `/reservations/`);
    const json = await response.json();

    return json;
  } catch (err) {
    return null; // TypeError: failed to fetch
  }
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  if (reservations.length == 0)   {
    let ele = document.getElementById("reservation-table-parent");
    ele.style.display = "none";
    let elem = document.getElementById("no-reservation-banner");
    elem.style.display = "block";
  
  }else
  {
    let ele = document.getElementById("reservation-table-parent");
    ele.style.display = "block";
    let elem = document.getElementById("no-reservation-banner");
    elem.style.display = "none";
   
  }

  // function convertTime(date){
  //   const d = new Date(date);
  //   return  d.toLocaleString("en-IN", { month:"long", day:"numeric",year:"numeric"  });
  //  }
   function convertDate(date){
    const d = new Date(date);
    return   d.toLocaleDateString("en-IN");
   }
   
  reservations.forEach((e) => {
    var time = new Date(e.time);
    var month = time.toLocaleString(undefined, { month: "long" });
    var day = time.getDate();
    var year = time.getFullYear();
    var booktime = time.toLocaleString("en-IN").split(" ");
    const tableEleChild = document.getElementById("reservation-table");
    tableEleChild.innerHTML += `
      <tr>
        <td scope="col"><b>${e.id}</b></td>
        <td scope="col">${e.name}</td>
        <td scope="col">${e.adventureName}</td>
        <td scope="col">${e.person}</td>
        <td scope="col">${convertDate(e.date)}</td>
        <td scope="col">${e.price}</td>
        <td scope="col">${day} ${month} ${year}, ${booktime[1]} ${booktime[2]}</td>
        <td scope="col"><button id="${e.id}" class="reservation-visit-button"><a href="../detail/?adventure=${e.adventure}">Visit adventure</a></button></td>
      </tr>
    ` 
  });
  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
}

export { fetchReservations, addReservationToTable };
