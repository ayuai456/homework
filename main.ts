basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(4, 4 - Y)
        basic.pause(500)
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(3, Y - 0)
        basic.pause(500)
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(2, 4 - Y)
        basic.pause(500)
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(1, Y - 0)
        basic.pause(500)
    }
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(1, Y - 0)
        basic.pause(500)
    }
})
