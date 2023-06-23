const audio = new Audio("end.mp3");

let match_info = {
    player1: {
        points_: 0,
        points: document.querySelector(".points1"),
        stars: [...document.querySelectorAll("#points0")]
    },
    player2: {
        points_: 0,
        points: document.querySelector(".points2"),
        stars: [...document.querySelectorAll("#points1")]
    },
    match_status: "starting soon"
}

let stage = 0;

const inicio = setInterval(() => {
    console.log("inciando...");
    stage++;
    if (stage > 1) {
        console.log("comecou");
        clearInterval(inicio);
        main();
    }
}, 3000);

function main() {
    const c = setInterval(() => {
        console.log("top");

        const random = Math.random();
        console.log(random)

        if (random >= 0.5){
            console.log("player1 ganhou 1 ponto");
            match_info.player1.points_++;
            match_info.player1.points.innerHTML = String(match_info.player1.points_);
            match_info.player1.stars[match_info.player1.points_ - 1].classList.add("bosta");
        }
        else {
            console.log("player2 ganhou 1 ponto");
            match_info.player2.points_++;
            match_info.player2.points.innerHTML = String(match_info.player2.points_);
            match_info.player2.stars[match_info.player2.points_ - 1].classList.add("bosta");
        }

        match_info.player1.points.innerHTML = "pontos: " + match_info.player1.points_;
        match_info.player2.points.innerHTML = "pontos: " + match_info.player2.points_;

        if (match_info.player1.points_ == 6 || match_info.player2.points_ == 6) {
            console.log(`fim de jogo, 
            ${match_info.player1.points == 5 ? "player1" : "player2"} ganhou`);
            audio.play();
            clearInterval(c);
        }
    }, 3000);
}