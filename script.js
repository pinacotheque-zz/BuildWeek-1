let array = [
        { // 0 {Supposing more albums would eventually be added to the array}
            "artist" : `Queen`,
            "album" : `Queen II (Deluxe Edition 2011 Remaster)`,
            "released" : `1974`,
            "songs" : [
                { // 0
                    "title" : `Procession - Remastered 2011`,"duration" : `1:13`},
                { // 1
                    "title" : `Father to Son - Remastered 2011`,"duration" : `6:13`},
                { // 2
                    "title" : `White Queen (As It Began) - Remastered 2011`,"duration" : `4:33`},
                { // 3
                    "title" : `Some Day One Day - Remastered 2011`,"duration" : `4:22`},
                { // 4
                    "title" : `The Loser In The End - Remastered 2011`,"duration" : `4:01`},
                { // 5
                    "title" : `Ogre Battle - Remastered 2011`,"duration" : `4:08`},
                { // 6
                    "title" : `The Fairy-Feller's Master-Stroke - Remastered 2011`,"duration" : `2:40`},
                { // 7
                    "title" : `Nevermore - Remastered 2011`,"duration" : `1:18`},
                { // 8
                    "title" : `The March Of The Black Queen - Remastered 2011`,"duration" : `6:32`},
                { // 9
                    "title" : `Funny How Love Is - Remastered 2011`,"duration" : `2:49`},
                { // 10
                    "title" : `Seven Seas of Rhye - Remastered 2011`,"duration" : `2:48`},
                { // 11
                    "title" : `See What A Fool I've Been - Live BBC Session, London / July 1973 / 2011 Remix`,"duration" : `4:22`},
                { // 12
                    "title" : `White Queen (As It Began) - Live at Hammersmith Odeon, London / December 1975`,"duration" : `5:32`},
                { // 13
                    "title" : `Seven Seas Of Rhye - Instrumental Mix 2011`,"duration" : `3:09`},
                { // 14
                    "title" : `Nevermore - BBC Session, April 1974`,"duration" : `1:27`},
                { // 15
                    "title" : `See What A Fool I've Been - B-side version, February 1974`,"duration" : `4:31`}
            ],
            "cover" : 'assets/albun_covers/queen-deluze.jpg'
        }
    ]

// Access notes //
console.log(array[0].artist) // Queen
console.log(array[0].album) // Queen II (Deluxe Edition 2011 Remaster)
console.log(array[0].released) // 1974
console.log(array[0].cover) // https://images-na.ssl-images-amazon.com/images/I/61QgeFWLvfL._AC_SL1200_.jpg     
console.log(array[0].songs.length)   

        const killerQueen = function() {
            let cover = document.querySelector('img.card-img-top')
            cover.setAttribute('src', `${array[0].cover}`)
            let title = document.querySelector('.card-body h3')
            title.innerText = array[0].album
            let artist = document.querySelector('.card-body p')
            artist.innerText = array[0].artist
            let year = document.querySelector('.card-body .year')
            year.innerText = array[0].released
            let songs = document.querySelector('.card-body .songs')
            songs.innerText = `${array[0].songs.length} songs`

            let album = array[0].songs
            for (let i=0; i<album.length; i++) {
                let tr = document.createElement('tr')
                let table = document.querySelector('.tracklist table')
                table.appendChild(tr)
                tr.innerHTML = `<td class="musical-note"><i class="fas fa-music pb-4"></i></td><td class="song${i}-title"></td><td class="song${i}-duration mins"></td>`
                document.querySelector(`.song${i}-title`).innerHTML = `<p>${album[i].title}<span>${array[0].artist}</span></p>`
                document.querySelector(`.song${i}-duration`).innerHTML = `<p>${album[i].duration}</p>`  
                console.log(`index${i}`)  
            }
            console.log("launching killerQueen()!")
        }

        killerQueen() /* :) */