const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        db.Videogame.findAll()
            .then((videogames) => {
                return res.render('videogamesList',{
                    videogames
                })
            })
            .catch((error) => console.log(error))
    },
    detail : (req,res) => {
        db.Videogame.findByPk(req.params.id)
            .then((videogame) => {
                return res.render('videogamesDetail',{
                    videogame
                })
            })
            .catch((error) => console.log(error))
    }
}