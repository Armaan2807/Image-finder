let imgUrl = "placeholder-img.png";
let searchKeyword =""
function inputSearchKeyWord(event) {
searchKeyword =event.target.value;
}
async function searchImages (){
    document.getElementById("loader").style.visibility="visible"
 imgUrl= await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchKeyword}&client_id=tn9DHhsB9W4InO0FKiehqtaeOESz81yS_m6USoISP6Q`)
 const response = await imgUrl.json();
 document.getElementById("loader").style.visibility="hidden"
 console.log(document.getElementsByClassName("next-cards"))
 let nextCards=document.getElementsByClassName("next-cards")
 nextCards.forEach(card=>{
    card.style.visibility="visible"
    })
 console.log(response)
 if (response.results.length==0) {
const toastLiveExample = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastLiveExample)
toast.show()
 }
 imgUrl = response.results[0].urls.regular
 document.getElementById("photo-id").src=imgUrl;
 
}
