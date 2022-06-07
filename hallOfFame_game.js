function Player(name, date, damage, time, score) {
    this.name = name;
    this.date = date;
    this.damage = damage;
    this.time = time;
    this.score = score;
}

function newPlayer() {
    // a changer avec le nom de la personne
    newname = document.getElementById("inputTest").value; 

    // date
    today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); 
    yy = today.getFullYear();
    today = dd + '/' + mm + '/' + yy;

    // a changer avec les dégats de la partie
    damage = 69;

    // a changer avec le temps en sec de la partie 
    time = 30 + " sec";

    // a changer avec le score total de la partie
    newscore = 69;

    // rajout du nouveau score
    newP = new Player(newname, today, damage, time, newscore);
    newPlayers = [newP];
    Players.push.apply(Players, newPlayers);
    displayLeaderboard();
}

// Create new players
player1 = new Player("Thomas", "01/23/2018", 201, 30, 2098);
player2 = new Player("Michael", "03/24/2017", 943, 189, 8039);
player3 = new Player("Lisa", "06/04/2018", 79, 20, 803); 
Players = [player1, player2, player3];

function displayLeaderboard() {
    let theExport = ""; 
    Players.sort((aPlayer, bPlayer) => aPlayer.score - bPlayer.score);
    Players.forEach((player) => theExport += '<tr><td>' + player.name + '</td><td>' + player.date + '</td><td>' + player.damage + '</td><td>' + player.time + '</td><td>' + player.score + '</tr>');
    document.getElementById("thingy").innerHTML = theExport; 
}

