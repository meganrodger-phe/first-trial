const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/v1/historic-start', function (req, res){
var what = req.query.what

if (what === 'search') {
res.redirect('search/search-start')
}

else if (what === 'team') {
res.redirect('team/team-start')
}

else {
res.render('v1/historic/historic-start')
}

});

router.get('/v1/team/how-doing', function (req, res){
var view_by = req.query.view_by

if (view_by === 'by_what') {
res.redirect('what-should')
}

else if (view_by === 'by_need') {
res.redirect('what-need')
}

else {
res.render('v1/team/how-doing')
}

});
