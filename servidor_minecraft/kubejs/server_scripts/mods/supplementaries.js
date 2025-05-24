if (Platform.isLoaded("supplementaries")) {
    ServerEvents.recipes(event => {
        // Lumisene
        event.custom({
            "type": "tconstruct:melting",
            "ingredient": {"item": "minecraft:glow_berries"},
            "result": {
                "fluid": "supplementaries:lumisene",
                "amount": 125
            },
            "temperature": 200,
            "time": 6
        }).id("kubejs:smeltery/melting/lumisene")

        event.recipes.thermal.crucible(Fluid.of("supplementaries:lumisene", 125), "minecraft:glow_berries", 0, 1000)

        event.recipes.create.filling("supplementaries:lumisene_bottle", ["minecraft:glass_bottle", Fluid.of("supplementaries:lumisene", 250).toJson()])
        event.recipes.create.emptying([Fluid.of("supplementaries:lumisene", 250), "minecraft:glass_bottle"], "supplementaries:lumisene_bottle")

        // Timber Frame
        event.remove({ id:"supplementaries:timber_frame" })
        donutCraft(event, Item.of("supplementaries:timber_frame", 2), "minecraft:air", "#forge:rods/wooden")

        event.stonecutting("supplementaries:timber_frame", "#kubejs:timber_frame")
        event.stonecutting("supplementaries:timber_brace", "#kubejs:timber_frame")
        event.stonecutting("supplementaries:timber_cross_brace", "#kubejs:timber_frame")
    })

    ServerEvents.tags("item", event => {
        event.get("kubejs:timber_frame")
            .add("supplementaries:timber_frame")
            .add("supplementaries:timber_brace")
            .add("supplementaries:timber_cross_brace")
    })
}
