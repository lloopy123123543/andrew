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
    width: 500,
    height: 500,
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
MapSize(map);
renderEneme(spawnEneme(map,eneme));
renderCube(spawnCube(map, cube));