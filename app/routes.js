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


router.get('/v1/team/search-all', function (req, res){
var which_practice = req.query.which_practice

if (which_practice === 'tagged_bp') {
res.redirect('tagged-best-practice')
}
else if (which_practice === 'uploaded_ce') {
res.redirect('uploaded-engagement')
}
else if (which_practice === 'roi_tools') {
res.redirect('roi-tools')
}
else {
res.render('v1/team/search-all')
}
});


router.get('/v1/search/search-start-best-practice', function (req, res){
var search_what = req.query.search_what

if (search_what === 'search_how_doing') {
res.redirect('search-start-data')
}
else {
res.render('v1/search/search-start-best-practice')
}
});


router.get('/v1/team/add-to-team', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v1/team/add-to-team', {

'team_name' : req.session.team_name,

})
});

router.get('/v1/team/add-to-team-add-one', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v1/team/add-to-team-add-one', {

'team_name' : req.session.team_name,
'member_one' : req.session.member_one,

})
});

router.get('/v1/team/add-to-team-add-another', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v1/team/add-to-team-add-another', {

'team_name' : req.session.team_name,
'team_member_one' : req.session.team_member_one,
'team_member_two' : req.session.team_member_two,

})
});

//Version 2 of the Prototype

router.get('/v2/team/create-identifier', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/create-identifier');
});

router.get('/v2/team/choose-team', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/choose-team');
});

router.get('/v2/team/add-instructions', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/add-instructions', {

  'identifier' : req.session.identifier,
})
});


router.get('/v2/team/check-create-identifier', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/check-create-identifier', {

'identifier' : req.session.identifier,
'project_detail' : req.session.project_detail,
'group_name' : req.session.group_name,
'instructions' : req.session.instructions,

})
});

router.get('/v2/team/project-created', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/project-created', {

'identifier' : req.session.identifier,
'group_name' : req.session.group_name,

})
});

router.get('/v2/team/project-space-start', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/project-space-start', {

'identifier' : req.session.identifier,
'project_detail' : req.session.project_detail,
'group_name' : req.session.group_name,

})
});

router.get('/v2/team/view-selected-material-empty', function (req, res) {
for (var a in req.query) req.session[a] = req.query[a];
res.render('v2/team/view-selected-material-empty', {

'identifier' : req.session.identifier,
'project_detail' : req.session.project_detail,

})
});
