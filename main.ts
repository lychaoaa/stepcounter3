input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
let steps = 0
steps = Math.PI
basic.showNumber(steps)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 999) {
        steps += 1
        basic.showNumber(steps)
    }
})
