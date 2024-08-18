const nameStatus = document.querySelector("#status");
const addBtn  = document.querySelector("#addFriendBtn");

let currentStatus = 0
addBtn.addEventListener("click",()=>{
    if(currentStatus == 0){
        nameStatus.innerHTML = "Friend";
        nameStatus.style.color = "green";
        addBtn.innerHTML = "Remove Friend"
        addBtn.style.backgroundColor = "#0784f3";
        currentStatus = 1;
    }else{
        nameStatus.innerHTML = "Stranger";
        nameStatus.style.color = "red";
        addBtn.innerHTML = "Add Friend";
        addBtn.style.backgroundColor = "#09a512";
        currentStatus = 0;
    }
})