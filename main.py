def on_logo_long_pressed():
    music.set_volume(0)
    music.stop_all_sounds()
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_b():
    Player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Player: game.LedSprite = None
music2 = 1
Player = game.create_sprite(2, 4)
Ball = game.create_sprite(randint(0, 4), 0)
game.set_score(0)
Speed = 1000

def on_forever():
    if Player.is_touching_edge():
        pass
basic.forever(on_forever)

def on_forever2():
    global music2, Speed
    if Player.is_touching(Ball):
        music2 = 0
        music.stop_all_sounds()
        music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
        Ball.set(LedSpriteProperty.X, randint(0, 4))
        Ball.set(LedSpriteProperty.Y, 0)
        game.add_score(1)
        Speed = randint(255, 1000)
        music2 = 1
basic.forever(on_forever2)

def on_forever3():
    global music2
    Ball.change(LedSpriteProperty.Y, 1)
    basic.pause(Speed)
    if Ball.get(LedSpriteProperty.Y) == 4:
        music2 = 0
        music.stop_all_sounds()
        music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
            MelodyOptions.FOREVER)
        game.game_over()
        Ball.delete()
        Player.delete()
basic.forever(on_forever3)
