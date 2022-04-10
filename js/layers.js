addLayer("b", {
    name: "big horses", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#543d37",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "big horses", // Name of prestige currency
    baseResource: "horses", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('b', 13)) mult = mult.times(upgradeEffect('b', 13))
        if (hasUpgrade('w', 11)) mult = mult.times(upgradeEffect('w', 11))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for big horses", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Many horses",
            description: "Double your horses  there are so many of them",
            cost: new Decimal(1),
        },
        12: {
            title: "So many darn horses",
            description: "Get more horses based on your current big horses. Sex!",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(1).pow(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Even more fucking horses",
            description: "Get more big horses based on your current horses. Illegal sex!",
            cost: new Decimal(5),
            effect() {
                return player.points.add(1).pow(0.5)
            },
        },
    },
})

addLayer("w", {
    name: "white horses", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#CCCCCC",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "white horses", // Name of prestige currency
    baseResource: "horses", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "w", description: "W: Reset for white horses", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Hell",
            description: "Explains itself",
            cost: new Decimal(250),
            effect() {
                return player.points.add(1).pow(727)
            },
        },
    },
})
