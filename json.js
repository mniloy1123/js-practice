// * JSON needs to be converted to a native JS object JSON.parse()) 
    // *when you want to access data

// * JSON is a string. Converting arrays to/from json is also valid

// * JSON requires double quotes to be used around strings and property names



const superHeroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  
  console.log(superHeroes.homeTown);
  console.log(superHeroes["active"])
  //access the third superpower of the second hero listed in the members list
  console.log(superHeroes["members"][1]["powers"][2])
