function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
            <strong> ${hour} </strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
        </li>
    `
}

function createCard(date, day, games) {
    return `
        <div class="card">
            <h2> ${date} <span> ${day} </span></h2>
            <ul>
                <!--1st game-->
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#app').innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="Logo da NLW Copa">
</header>

<main id="cards">
    <!--1st card-->
    ${createCard('23/11', 'quarta', createGame('germany', '10:00', 'japan') + 
    createGame('spain', '13:00', 'costa-rica') + 
    createGame('belgium', '16:00', 'canada'))}

    <!--2nd card-->
    ${createCard('27/11', 'domingo', createGame('japan', '07:00', 'costa-rica') +
    createGame('croatia', '13:00', 'canada') +
    createGame('spain', '16:00', 'germany'))}

    <!--3rd card-->
    ${createCard('01/12', 'quinta', createGame('canada', '12:00', 'morocco') +
    createGame('japan', '16:00', 'spain') +
    createGame('costa-rica', '16:00', 'germany'))}
</main>
`