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
// ¿Qué pasa cuando presionas A y muy 
// rápidamente B? 
// Se alternan las direcciones de la flechas, se alternan los bloques de la condición A con los de la condición B
// ¿Es lo que esperabas?
// No, yo esperaba que la flecha girara en sentido contrario desde la última flecha presentada, no alternándose direcciones entre bloques.
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
