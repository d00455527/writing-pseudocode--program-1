input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . # . .
        `)
})
input.onSound(DetectedSound.Loud, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
