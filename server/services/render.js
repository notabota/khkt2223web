const axios = require('axios');
const querystring = require('querystring');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/ds_benhnhan')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    axios.get('http://localhost:3000/api/ds_dieutri')
    .then(function(response){
        res.render('add_user', { users : response.data, id : req.query });
    })
    .catch(err =>{
        res.send(err);
    })   
}

exports.ds_dieutri = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/ds_dieutri')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })   
}

exports.tra_cuu = (req, res) =>{
    console.log(req.query);
    axios.get('http://localhost:3000/api/ds_benhnhan')
    .then(function(response){
        res.render('tra_cuu', { users : response.data, id : req.query });
        console.log(response.data);
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.tra_cuu2 = (req, res) =>{
    console.log(req.query);
    axios.get('http://localhost:3000/api/ds_dieutri')
    .then(function(response){
        res.render('tra_cuu', { users : response.data, id : req.query });
        console.log(response.data);
    })
    .catch(err =>{
        res.send(err);
    })
}