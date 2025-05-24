// priority: 1
ServerEvents.recipes(event => {
    event.remove({ output: "ae2:vibration_chamber" })
})
