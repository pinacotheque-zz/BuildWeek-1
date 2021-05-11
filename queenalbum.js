let array = []
array = [
    { // 0 {Supposing more albums would eventually be added to the array}
        "artist" : `Queen`,
        "album" : `Queen II (Deluxe Edition 2011 Remaster)`,
        "released" : `1974`,
        "songs" : [
            { // 0
                "title" : `Procession - Remastered 2011`,
                "duration" : `1:13`
            },
            { // 1
                "title" : `Father to Son - Remastered 2011`,
                "duration" : `6:13`
            }
        ],
        "cover" : `https://images-na.ssl-images-amazon.com/images/I/61QgeFWLvfL._AC_SL1200_.jpg`
    }
]

// Access notes //
console.log(array[0].artist) // Queen
console.log(array[0].album) // Queen II (Deluxe Edition 2011 Remaster)
console.log(array[0].released) // 1974
console.log(array[0].songs[0].title) // Procession - Remastered 2011
console.log(array[0].songs[0].duration) // 1:13
console.log(array[0].songs[1].title) // Father to Son - Remastered 2011
console.log(array[0].songs[1].duration) // 6:13
console.log(array[0].cover) // https://images-na.ssl-images-amazon.com/images/I/61QgeFWLvfL._AC_SL1200_.jpg