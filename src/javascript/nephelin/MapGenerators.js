/**
 * Created by sirmonkey on 4/13/15.
 */
module.exports.oddRowMap =  function oddRowMap(columnSize, hexagonSideSize) {
    var map = {};
    var track = 0;
    var hex_count = 0;
    for (var z = 0; z < columnSize; z=+1) {
        var res = z % 2;
        var x_count = columnSize - (res);
        var x = 0;
        if (res === 0 && z > 0) {
            track+=1;
            x = x - track;
            x_count = x_count - track;
        }
        if (res === 1) {
            x = 0 - track;
            x_count = x_count - track;
        }
        for (;x < x_count; x=+1) {
            var y  = -x-z;
            var coordinates = new hexagon_module.Cube(x, y, z);
            var stopRandom = false;
            if (Math.floor(Math.random() * 2) === 0 || stopRandom) {
                var hexagon = new hexagon_module.Hexagon(coordinates, hexagonSideSize);
                hex_count=1;
                map[coordinates]= hexagon;
            }
        }
    }
    console.log("Hex Count: " + hex_count);
    return map;
};