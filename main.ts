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
    CoolFunction2_electric_boogaloo()
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.setVolume(0)
    music.stopAllSounds()
})
function CoolFUntcion3_The_End () {
    Ball3.set(LedSpriteProperty.Y, 0)
    Ball3.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball3.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball3.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball3.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball3.set(LedSpriteProperty.Y, 0)
    Ball2.set(LedSpriteProperty.Y, 0)
    Ball.set(LedSpriteProperty.Y, 0)
}
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
    basic.pause(500)
})
function CoolFunction2_electric_boogaloo () {
    Ball2.set(LedSpriteProperty.Y, 0)
    Ball2.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball2.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball2.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    Ball2.set(LedSpriteProperty.X, randint(0, 3))
    basic.pause(100)
    CoolFUntcion3_The_End()
}
let X = 0
let Ball3: game.LedSprite = null
let Ball2: game.LedSprite = null
let Ball: game.LedSprite = null
let Player: game.LedSprite = null
let music2 = 1
Player = game.createSprite(2, 4)
Ball = game.createSprite(randint(0, 3), 0)
Ball2 = game.createSprite(randint(0, 3), 0)
Ball3 = game.createSprite(randint(0, 3), 0)
game.setScore(0)
let Speed = 1000
basic.forever(function () {
    if (Player.get(LedSpriteProperty.X) == 4) {
        Player.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    if (Player.isTouching(Ball)) {
        music2 = 0
        music.stopAllSounds()
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Forever)
        game.gameOver()
        Ball.delete()
        Player.delete()
    }
})
basic.forever(function () {
    Ball.change(LedSpriteProperty.Y, 1)
    Ball2.change(LedSpriteProperty.Y, 1)
    Ball3.change(LedSpriteProperty.Y, 1)
    basic.pause(Speed)
    if (Ball.get(LedSpriteProperty.Y) == 4) {
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
    if (Ball2.get(LedSpriteProperty.X) == Ball.get(LedSpriteProperty.X) || Ball.get(LedSpriteProperty.X) == Ball3.get(LedSpriteProperty.X) || Ball.get(LedSpriteProperty.X) == Ball2.get(LedSpriteProperty.X)) {
        CoolFunction()
    }
})
