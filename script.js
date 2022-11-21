var hero = {
    left: 685,
    top: 580
}

var enemies = [
    // first line
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },

    // second line
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 },

]

// Hero move left and Right --keys
document.onkeydown = function(e) {
    // console.log(e.keyCode, e.key);
    if (e.keyCode === 37) {
        console.log("Left");
        hero.left = hero.left - 10;
        console.log(hero.left);
    }

    if (e.keyCode === 39) {
        console.log("Right");
        hero.left = hero.left + 10;
        console.log(hero.left);
    }

    if (e.keyCode === 32) {
        console.log("Shoot");
    }

    if (hero.left > 15 && hero.left < 1325) {
        moveHero();
    }
}

// function to move Hero Left and Right 
function moveHero() {
    document.getElementById('hero').style.left = hero.left + 'px';
}

// enemies
function drowEnemies() {
    // document.getElementById('enemies').innerHTML = ``;
    enemies.map((element) => {
        document.getElementById('enemies').innerHTML += `<div class='enemy' style= "left:${element.left}px; top:${element.top}px;"></div>
        `
    })
}
drowEnemies();