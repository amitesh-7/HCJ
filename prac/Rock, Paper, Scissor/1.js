document.addEventListener("DOMContentLoaded", () => {
    let compScore = 0;
    let humanScore = 0;
    function computerChoice() {
        const compOut = Math.floor(Math.random() * 3);
        if (compOut === 0) {
            const compp = document.querySelector("#comp21");
            const comppp = document.querySelector("#comp2");
            compp.innerHTML = '';
            comppp.style.display = "flex";
            comppp.style.minHeight = "70vh"
            comppp.style.justifyContent = "center";
            comppp.style.alignItems = "center";
            const img = document.createElement("img");
            img.src = "rock.jpg";
            compp.appendChild(img);
            const para = document.createElement("p");
            para.textContent = "Rock";
            para.style.fontSize = "30px";
            para.style.color = "brown";
            para.style.fontWeight = "800";
            compp.appendChild(para);
            return "Rock";
        }
        if (compOut === 1) {
            const compp = document.querySelector("#comp21");
            const comppp = document.querySelector("#comp2");
            compp.innerHTML = '';
            comppp.style.display = "flex";
            comppp.style.minHeight = "70vh"
            comppp.style.justifyContent = "center";
            comppp.style.alignItems = "center";
            const img = document.createElement("img");
            img.src = "paper.jpeg";
            compp.appendChild(img);
            const para = document.createElement("p");
            para.textContent = "Paper";
            para.style.fontSize = "30px";
            para.style.color = "brown";
            para.style.fontWeight = "800";
            compp.appendChild(para);
            return "Paper";
        }
        if (compOut === 2) {
            const compp = document.querySelector("#comp21");
            const comppp = document.querySelector("#comp2");
            compp.innerHTML = '';
            comppp.style.display = "flex";
            comppp.style.minHeight = "70vh"
            comppp.style.justifyContent = "center";
            comppp.style.alignItems = "center";
            const img = document.createElement("img");
            img.src = "scissor.jpeg";
            compp.appendChild(img);
            const para = document.createElement("p");
            para.textContent = "Scissor";
            para.style.fontSize = "30px";
            para.style.color = "brown";
            para.style.fontWeight = "800";
            compp.appendChild(para);
            return "Scissor";
        }
    }
    let humanChoiceValue = "";
    function humanChoice() {
        let rock = document.querySelector("#rock");
        let paper = document.querySelector("#paper");
        let scissor = document.querySelector("#scissor");
        rock.addEventListener("mousedown", () => {
            humanChoiceValue = "Rock";
            playround();
        });
        paper.addEventListener("mousedown", () => {
            humanChoiceValue = "Paper";
            playround();
        });
        scissor.addEventListener("mousedown", () => {
            humanChoiceValue = "Scissor";
            playround();
        });
    }
    function playround() {
        if (humanChoiceValue === "") {
            return;
        }
        const compChoice = computerChoice();
        if (humanChoiceValue === compChoice) {
            const comp1 = document.querySelector("#result1");
            const output = comp1.textContent = "Its a tie";
            const result = document.querySelector("#result");
            result.style.display = "flex";
            result.style.minHeight = "15vh";
            result.style.justifyContent = "center";
            result.style.alignItems = "center";
            result.style.color = "blue";
        }
        else if (
            (humanChoiceValue === "Rock" && compChoice === "Scissor") ||
            (humanChoiceValue === "Paper" && compChoice === "Rock") ||
            (humanChoiceValue === "Scissor" && compChoice === "Paper")
        ) {
            humanScore++;
            const comp1 = document.querySelector("#result1");
            const output = comp1.textContent = "You Win";
            const score = document.querySelector(".rest1");
            score.innerHTML = humanScore;
            const result = document.querySelector("#result");
            result.style.display = "flex";
            result.style.minHeight = "15vh";
            result.style.justifyContent = "center";
            result.style.alignItems = "center";
            result.style.color = "blue";
        }
        else {
            compScore++;
            const comp1 = document.querySelector("#result1");
            const output = comp1.textContent = "Computer Wins";
            const score = document.querySelector(".rest12");
            score.innerHTML = compScore;
            const result = document.querySelector("#result");
            result.style.display = "flex";
            result.style.minHeight = "15vh";
            result.style.justifyContent = "center";
            result.style.alignItems = "center";
            result.style.color = "blue";
        }
        if (humanScore === 5 || compScore === 5) {
            endGame(humanScore === 5 ? "You" : "Computer");
        }
    }
    function endGame(winner) {
        const resultElement = document.querySelector("#result1");
        resultElement.textContent = `${winner} wins the game!`;
        const result = document.querySelector("#result");
        result.style.display = "flex";
        result.style.minHeight = "15vh";
        result.style.justifyContent = "center";
        result.style.alignItems = "center";
        result.style.color = "green";
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissor").disabled = true;
    }
    humanChoice();
});