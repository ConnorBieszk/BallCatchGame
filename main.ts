input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.setVolume(0)
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Player.change(LedSpriteProperty.X, -1)
})
let Player: game.LedSprite = null
let music2 = 1
Player = game.createSprite(2, 4)
let Ball = game.createSprite(randint(0, 4), 0)
game.setScore(0)
let Speed = 1000
basic.forever(function () {
    if (Player.isTouching(Ball)) {
        music2 = 0
        music.stopAllSounds()
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        Ball.set(LedSpriteProperty.X, randint(0, 4))
        Ball.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
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
