export let items = {
    'none': {
        name: "Select an item first!",
    },
    'doors': {
        name: "Doors",
        'woodDoor' : {
            name: "Wooden Door",
            image: "images/items/wooden-door.png",
            health: 200,
            stackSize: 1,
            despawnTime: "5 min",
            decayTime: "3 hours",
            durability: {
                melee: {
                    stoneHatchet : {
                        name: "Stone Hatchet",
                        hitsRequired: 1274,
                        toolsRequired: 44,
                        time: "17 min 51 sec"
                    },
                    stonePickaxe : {
                        name: "Stone Pickaxe",
                        hitsRequired: 2420,
                        toolsRequired: 103,
                        time: "36 min 59 sec"
    
                    }
                }
            }
        },
        'woodDoubleDoor' : {
            name: "Wooden Double Door",
            image: "images/items/wooden-double.png",
            health: 200,
            stackSize: 1,
            despawnTime: "40 min",
            decayTime: "3 hours",
            durability: {
                melee: {
                    stoneHatchet : {
                        name: "Stone Hatchet",
                        hitsRequired: 1274,
                        toolsRequired: 44,
                        time: "17 min 51 sec"
                    },
                    stonePickaxe : {
                        name: "Stone Pickaxe",
                        hitsRequired: 2420,
                        toolsRequired: 103,
                        time: "36 min 59 sec"
    
                    }
                }
            }
        },
        'sheetMetalDoor' : {
            name: "Sheet Metal Door",
            image: "images/items/sheetMetalDoor.png",
            health: 250,
            stackSize: 1,
            despawnTime: "40 min",
            decayTime : "8 hours",
            durability: {
                melee: {
                    stoneHatchet : {
                        name: "Stone Hatchet",
                        hitsRequired: "11,145",
                        toolsRequired: 385,
                        time: "2 hours 36 min 24 sec"
                    },
                    stonePickaxe : {
                        name: "Stone Pickaxe",
                        hitsRequired: "7,305",
                        toolsRequired: 311,
                        time: "1 hour 52 min 18 sec"
    
                    }
                }
            }
        },
        armoredDoor : {
            name: "Armored Door",
            image: "images/items/armoredDoor.png",
            health: 800,
            stackSize: 1,
            despawnTime: "1 hour",
            decayTime : "12 hours",
            durability: {
                melee: {
                    stoneHatchet : {
                        name: "Stone Hatchet",
                        hitsRequired: "35,637",
                        toolsRequired: "1,231",
                        time: "8 hours 20 min 30 sec"
                    },
                    stonePickaxe : {
                        name: "Stone Pickaxe",
                        hitsRequired: "23,339",
                        toolsRequired: 994,
                        time: "5 hours 59 min 25 sec"
    
                    }
                }
            }
        },
        garageDoor : {
            name: "Garage Door",
            image: "images/items/garageDoor.png",
            health: 600,
            stackSize: 1,
            despawnTime: "20 min",
            decayTime : "8 hours",
            durability: {
                melee: {
                    stoneHatchet : {
                        name: "Stone Hatchet",
                        hitsRequired: "26,727",
                        toolsRequired: 924,
                        time: "6 hours 15 min 23 sec"
                    },
                    stonePickaxe : {
                        name: "Stone Pickaxe",
                        hitsRequired: "17,504",
                        toolsRequired: 746,
                        time: "4 hours 29 min 33 sec"
    
                    }
                }
            }
        }
    },
    'walls' : {
        name: "Walls",
        woodWall : {
            name: "Wood Wall",
            image: "images/items/woodWall.png",
            health: 250,
            stackSize: "N/A",
            despawnTime: "N/A",
            decayTime: "3 hours",
            durability: {
                melee: {
                    stoneHatchet : {
                        name: "Stone Hatchet",
                        hitsRequired: "1,331",
                        toolsRequired: 46,
                        time: "18 min 36 sec"
                    },
                    stonePickaxe : {
                        name: "Stone Pickaxe",
                        hitsRequired: "2,251",
                        toolsRequired: 96,
                        time: "34 min 28 sec"
    
                    }
                },
                bullets:{
                    "5.56 Round" : {
                        name : "5.56 Round",
                        hitsRequired: 32,
                        toolsRequired: "N/A",
                        time: "30 sec"
                    }
                }

            }
        }
    }
}