let imgUrl = "placeholder-img.png"; // WE ARE DESCRIBNG THE VARIABLE CALLED THE IMGURL IN WHICH WE ARE GIVING THE DEFAULT IMAGE.
let searchKeyword = ""; // WE HAVE GIVEN AN EMPTY STRING BECAUSE WHEN THE USER WILL TYPE WILL BE DONE OVER HERE.
function inputSearchKeyWord(event) {
  searchKeyword = event.target.value;
}// THIS FUNCTION GIVEN ABOVE SHOWS THAT THE USER WHICH WLL TYPE GIVE THING WILL GO THROUGH THIS PATH
async function searchImages() {
  document.getElementById("loader").style.visibility = "visible"; // THIS LINE SHOWS THAT THE LOADER WILL ShOW the result didnot come. 
  imgUrl = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${searchKeyword}&client_id=tn9DHhsB9W4InO0FKiehqtaeOESz81yS_m6USoISP6Q`
  );  // UMGURL IS FETCHING THE IMG WHICH THE USER HAS TYPE FOR BY UNSPLASH
  const response = await imgUrl.json(); // THIS VARIABLE tells us that the json is tranforming the data into user readable format
  document.getElementById("loader").style.visibility = "hidden";  // THIS LINE SHOWS THAT THE LOADER WILL HIDE WHEN THE RESULT HAVE COME 
  let nextCards = document.getElementsByClassName("next-cards"); // THE NEXTCARDS will grab the other 9 cards in the variable.

  for (let i = 0; i < nextCards.length; i++) {
    nextCards[i].style.visibility = "visible";// THE NEXTCARDS SHOWS TELLS THAT WHEN THE RESULT COMES THE OTHER 9 CARDS WEILL BE SHOWN.
  }
  console.log(response);
  if (response.results.length == 0) { // IF THE RESULT IS 0 THEN ONLY WE WILL SHOW THE RESULT
    const toastLiveExample = document.getElementById("liveToast"); // THIS LINE TELLS US IT GRABS THE NOTIFICATION ELEMENT IN THAT VARIABLE
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show(); // IT TELLS US THAT IT GIVES THE COMMAND TO THE TOAST THAT IT HAS TO GO AND IT LIVE.
  }

  //Assigning urls from the response to the card images
  let allCards = document.getElementsByClassName("card-img-top"); //  WE ARE GRABBIBG ALL THE CARDS IN THAT VARIABLE
  for (let i = 0; i < allCards.length; i++) { // WE ARE LOPPING OVER ALL THE CARDS.
    allCards[i].src = response.results[i].urls.regular; // IN THE ALL CARDS WE ARE ASIGNING THE URLS TO THE IMGSRC OF EACH CARDS
  }

  }
