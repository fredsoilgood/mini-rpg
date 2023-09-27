function change_level (level_number: number) {
    if (level_number == 1) {
        tiles.setCurrentTilemap(tilemap`niveau1`)
    } else if (level_number == 2) {
        tiles.setCurrentTilemap(tilemap`marécage`)
    } else if (level_number == 3) {
        tiles.setCurrentTilemap(tilemap`biome marécage`)
    } else if (level_number == 4) {
        tiles.setCurrentTilemap(tilemap`niveau1`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    levelnumber += 0
    change_level(levelnumber)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    levelnumber += 2
    change_level(levelnumber)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    levelnumber += 1
    change_level(levelnumber)
    scene.setBackgroundColor(6)
})
let levelnumber = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
levelnumber += 1
change_level(levelnumber)
game.onUpdate(function () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
