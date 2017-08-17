let Kast = require('./kastClient')


let kast = new Kast('ws://localhost:8000')



    kast.video.onList((list) => {
        console.log(list)
    })

    kast.video.onCurrentSession((session) => {
        console.log(session)
    })

    kast.system.onLongProcess((process) => {
        console.log(process)
    })

    kast.video.onList((list) => {
        console.log(list)
    })

    kast.context.onUpdated((message) => {
        console.log(message)
    })

    kast.update.onCheckupdate((message) => {
        console.log(message)
    })
    
    kast.mixer.onGetAlphaRGB((message) => {
        console.log((message[0]))
    })

    kast.mixer.onGetAlphaAngle((message) => {
        console.log(typeof(message))
    })

    kast.mixer.onGetAlphaBW((message) => {
        console.log(message)
    })
