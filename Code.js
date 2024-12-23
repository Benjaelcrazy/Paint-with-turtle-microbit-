input.onButtonPressed(Button.A, function () {
    turtle.turnRight()
})
input.onButtonPressed(Button.B, function () {
    if (Yes__No == 0) {
        Yes__No = 1
    } else {
        Yes__No = 0
    }
})
let Yes__No = 0
Yes__No = 0
turtle.setPosition(2, 2)
basic.forever(function () {
    if (Yes__No == 0) {
        turtle.pen(TurtlePenMode.Up)
    } else {
        turtle.pen(TurtlePenMode.Down)
    }
})
basic.forever(function () {
    turtle.forward(1)
    basic.pause(100)
})
basic.forever(function () {
	
})
basic.forever(function () {
    music.play(music.stringPlayable("G F A B D E A B ", 120), music.PlaybackMode.UntilDone)
})
