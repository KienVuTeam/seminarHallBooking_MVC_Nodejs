const route_web = require('./web')
//Dinh nghia ra ham function tiep nhan cac route tu URL
function router(app) {
    //mapping routes with file web.js
    app.use('/search', route_web)
    
    //route default !!! must put down
    app.use('/', (req, res) => {
        // res.send('route index first')
        res.render('client/page')
    })
}

//return a function with param 'app'
module.exports = router
