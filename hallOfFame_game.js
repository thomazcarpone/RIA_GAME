function displayLeaderboard() {

    const highScores = JSON.parse(window.localStorage.getItem('highScores')) ?? [];

    let theExport ="";
    highScores.sort((aPlayer, bPlayer) => aPlayer.score - bPlayer.score).reverse();
    highScores.forEach((player) => theExport += '<tr><td>' + player.name + '</td><td>' + player.date + '</td><td>' + player.damage + '</td><td>' + player.time + '</td><td>' + player.score + '</tr>');
    document.getElementById("thingy").innerHTML = theExport; 
}

