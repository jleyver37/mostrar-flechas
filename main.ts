basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.NorthEast)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.SouthEast)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.SouthWest)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.NorthWest)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.NorthWest)
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.SouthWest)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.SouthEast)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.NorthEast)
        basic.showArrow(ArrowNames.North)
    }
})
