// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`1000100001010201010101010101010202020202010001020202020202020102020202020100010200000000000001010101010201000102000101010101010000000102010001020001000000000000000001020100010101010000000000000000010201000000000101010101010100000100010000000001000100000001010101010101010101010001000101010000000001000000000100010001000000000000010000000001000101010101010101000101000000010100000000000000010100010000000001010101010101000001000100000000000000000000010100010001010101010000000000000001000100000000000101010100010101010001`, img`
. . 2 . . . . . . . . 2 2 2 2 2 
. 2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 
. 2 . 2 2 2 2 2 2 2 . . . . . 2 
. 2 . 2 2 . . . . . . 2 2 2 . 2 
. 2 . 2 2 . 2 2 2 2 2 2 2 2 . 2 
. 2 . . . . 2 2 2 2 2 2 2 2 . 2 
. 2 2 2 2 . . . . . . . 2 2 . 2 
. 2 2 2 2 . 2 . 2 2 2 . . . . . 
. . . . . . 2 . 2 . . . 2 2 2 2 
. 2 2 2 2 . 2 . 2 . 2 2 2 2 2 2 
. 2 2 2 2 . 2 . . . . . . . . 2 
. . 2 2 2 . . 2 2 2 2 2 2 2 . . 
2 . 2 2 2 2 . . . . . . . 2 2 . 
2 . 2 2 2 2 2 2 2 2 2 2 . . 2 . 
2 . . . . . 2 2 2 2 2 2 2 . 2 . 
2 2 2 2 2 . . . . 2 . . . . 2 . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile1":return tile1;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
