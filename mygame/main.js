let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#00d5e8',
    border: '#f1f1f1'
}

let eneme = {
    id: 'eneme',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    trnstn: .25,
    step: 56,
    color: 'yellow'
}
let eneme2 = {
    id: 'eneme2',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    trnstn: .25,
    step: 56,
    color: 'green'
}


let eneme3 = {
    id: 'eneme3',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    trnstn: .25,
    step: 56,
    color: 'pink'
}



let eneme5 = {
    id: 'eneme5',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    trnstn: .25,
    step: 56,
    color: 'brown'
}

let eneme6 = {
    id: 'eneme6',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    trnstn: .25,
    step: 56,
    color: 'purple'
}

let bots = [];

let bot = {
    id: 1,
    x: 20,
    y: 20,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'yellow'
}

bots.push(bot);

let buffs = [];

let buff = {
    id: 1,
    x: 200,
    y: 200,
    width: 56,
    height: 56,
    trnstn: .25,
    color: 'green'
}

buffs.push(buff);

renderMap(map)
renderEneme(spawnEneme(map,eneme));
renderEneme2(spawnEneme2(map,eneme2));
renderEneme3(spawnEneme3(map,eneme3));
renderEneme5(spawnEneme5(map,eneme5));
renderEneme6(spawnEneme6(map,eneme6));
renderCube(spawnCube(map, cube));
renderBots(bots);
renderBuffs(buffs);

console.log(window);



let tike = setInterval(timeTike(), 1000);

