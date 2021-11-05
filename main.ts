function CoolFunction () {
    Ball.set(LedSpriteProperty.Y, 0)
    Ball.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    if (X == Ball.get(LedSpriteProperty.X)) {
        CoolFunction()
        Ball.set(LedSpriteProperty.Y, 0)
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.setVolume(0)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
    basic.pause(500)
})
let X = 0
let Ball: game.LedSprite = null
let Player: game.LedSprite = null
let music2 = 1
Player = game.createSprite(2, 4)
Ball = game.createSprite(randint(0, 3), 0)
game.setScore(0)
let Speed = 1000
basic.forever(function () {
    if (Player.get(LedSpriteProperty.X) == 4) {
        Player.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    if (Player.isTouching(Ball)) {
        X = Ball.get(LedSpriteProperty.X)
        music2 = 0
        music.stopAllSounds()
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        game.addScore(1)
        CoolFunction()
        Speed = randint(255, 1000)
        music2 = 1
    }
})
basic.forever(function () {
    Ball.change(LedSpriteProperty.Y, 1)
    basic.pause(Speed)
    if (Ball.get(LedSpriteProperty.Y) == 4) {
        music2 = 0
        music.stopAllSounds()
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Forever)
        game.gameOver()
        Ball.delete()
        Player.delete()
    }
})
