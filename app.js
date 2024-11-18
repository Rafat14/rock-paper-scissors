let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];
};

const playGame =(userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);
     


    if(userChoice === compChoice){
        console.log("Drawn");
        msg.innerText = "Drawn! Play again";
        msg.style.backgroundColor = "black";
    }

    else if(userChoice === "rock" && compChoice ==="scissors"){
        console.log("User Won");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "User Won";
        msg.style.backgroundColor = "green";
}
    else if(userChoice === "rock" && compChoice ==="paper"){
        console.log("User Lost");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "User Lost";
        msg.style.backgroundColor = "red";
}
    else if(userChoice === "paper" && compChoice ==="rock"){
        console.log("User Won");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "User Won";
        msg.style.backgroundColor = "green";
}
    else if(userChoice === "paper" && compChoice ==="scissors"){
        console.log("User Lost");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "User Lost";
        msg.style.backgroundColor = "red";
}
    else if(userChoice === "scissors" && compChoice ==="paper"){
        console.log("User Won");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "User Won";
        msg.style.backgroundColor = "green";

}
    else if(userChoice === "scissors" && compChoice ==="rock"){
        console.log("User Lost");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "User Lost";
        msg.style.backgroundColor = "red";

    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});