function latte (drink) { 
    let recipe = {
        name: "Latte",
        assigned: true,
        shots: standardShots(drink.size),
        milk: milkTypes.TWOPERCENT
    }
    return recipe;
 }

function skinnyLatte (drink) { 
    let recipe = {
        name: "Skinny Syrup Latte",
        assigned: true,
        syrups: [],
        shots: standardShots(drink.size),
        milk: milkTypes.NONFAT
    }
    return recipe;
 }

function whiteMocha(drink){
    let recipe = {
        name: "White Mocha",
        assigned: true,
        syrups: [
            {
                name: 'WHITEMOCHA',
                count: standardPumps(drink.size)
            }
        ],
        shots: standardShots(drink.size)
    }
    return recipe;
}