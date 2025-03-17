async function generateFakerUsers() {
    var qt = document.querySelector("#quantUsers").value;
    var nat = document.querySelector("#natUsers").value;
    var inputsGender = document.getElementsByTagName("input");
    var gender = "";

    for (let input of inputsGender){
        if(input.checked == true){
            gender = input.value;
        }
    }

    var reply = await fetch(
    `https://randomuser.me/api/?results=${qt}&gender=${gender}&nat=${nat}`
);
    var data = await reply.json();
    //console.log(data.results[0].email);

    document.querySelector(".allUser").innerHTML = " ";
 
    for (let user of data.results) {
        let userDiv = document.createElement("div");
        userDiv.classList.add("user");

        userDiv.innerHTML = `
        <img 
        src=${user.picture.medium} height="70" width="70">
        <div class="info">
            <span><b>Nome:</b> ${user.name.first + " " + user.name.last}</span>
            <span><b>Email:</b> ${user.email}</span>
        </div>`;
    
        document.querySelector(".allUser").appendChild(userDiv);
    }
}

