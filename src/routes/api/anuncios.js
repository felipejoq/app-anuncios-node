const router = require('express').Router();
const { verificaToken } = require('../../helpers/auth');

const Anuncio = require('../../models/Note');

router.get('/anuncio', verificaToken, (req, res) => {
    Anuncio.find({}, (err, anuncios) => {

        if(err){
            res.status(500).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            anuncios
        });
    })
});

module.exports = router;