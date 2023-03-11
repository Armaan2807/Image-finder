let imgUrl = "placeholder-img.png";
let searchKeyword = "";
function inputSearchKeyWord(event) {
  searchKeyword = event.target.value;
}
async function searchImages() {
  document.getElementById("loader").style.visibility = "visible";
  imgUrl = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${searchKeyword}&client_id=tn9DHhsB9W4InO0FKiehqtaeOESz81yS_m6USoISP6Q`
  );
  const response = await imgUrl.json();
  document.getElementById("loader").style.visibility = "hidden";
  let nextCards = document.getElementsByClassName("next-cards");

  for (let i = 0; i < nextCards.length; i++) {
    nextCards[i].style.visibility = "visible";
  }
  console.log(response);
  if (response.results.length == 0) {
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  }

  //Assigning urls from the responsr to the card images
  let allCards = document.getElementsByClassName("card-img-top");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].src = response.results[i].urls.regular;
  }
  imgUrl = response.results[0].urls.regular;
  document.getElementById("photo-id").src = imgUrl;
}
