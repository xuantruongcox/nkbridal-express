const express = require('express');
const router = express.Router();
const request = require('../list/request');
var image;
/* ThUMBNAILS */
router.get('/api/thumbnail/:product_id?', function (req, res, next) {
    if (req.params.product_id) {
        request.getByIdCategory(req.params.product_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows)
            }
        })
    } else {
        request.getAllThumbnail(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    }
})

router.post('/api/thumbnail/add', function(req,res,next){
    request.addThumbnail(req.body, function(err,count){
        if(err){
            res.json(err)
        }else{
            res.json(req.body);
        }
    })
})
/* /.THUMBNAILS */
/* =================== */
/* PRODUCTS */
router.get('/api/products/:category?/:id?', function (req, res, next) {
    if (req.params.category) {
        request.getByCateGory(req.params.category, function (err, rowsCategory) {
            if (err) {
                res.json(err)
            } else {
                for (let i of rowsCategory) {
                    if (req.params.id == i.id) {
                        request.getByIdProduct(req.params.id, function (err, rowsProduct) {
                            if (err) {
                                res.json(err);
                            } else {
                                return res.json(rowsProduct)
                            }
                        })
                        break;
                    } else if(!req.params.id) {
                        return res.json(rowsCategory)
                    }else if(req.params.id !== i.id){
                        console.log('Not invalid')
                    }
                }
                
            }
        })
    }
})

router.get('/api/setting',function(req,res,next){
    request.getIndentityPoolId(function(err,rows){
        if(err){
            res.json(err);
        }else{
            res.json(rows);
        }
    })
})

router.post('/api/products/add', function (req, res, next) {
    request.addProduct(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    })
})
/* /.PRODUCTS */
/* ==================== */
/* USERS */
router.get('/api/users/login/:user_name?/:password?', function(req,res,next){
    request.login(req.params,function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
})
/* /.USERS */
/* ==================== */
module.exports = router;