var loginDB = require('../model/model');
var userDB = require('../model/usermodel')

// exports.createLogin = (req,res)=>{
//     // validate request
//     if(!req.body){
//         res.status(400).send({ message : "Content can not be emtpy!"});
//         return;
//     }
//
//     // new user
//     const user = new loginDB({
//         email : req.body.email,
//         password : req.body.password
//     })
//
//     // save user in the database
//     user
//         .save(user)
//         .then(data => {
//             //res.send(data)
//             res.redirect('/add-user');
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message : err.message || "Some error occurred while creating a create operation"
//             });
//         });
//
// }
//
// exports.findLogin = (req, res)=>{
//
//     if(req.query.id){
//         const id = req.query.id;
//
//         loginDB.findById(id)
//             .then(data =>{
//                 if(!data){
//                     res.status(404).send({ message : "Not found user with id "+ id})
//                 }else{
//                     res.send(data)
//                 }
//             })
//             .catch(err =>{
//                 res.status(500).send({ message: "Erro retrieving user with id " + id})
//             })
//
//     }else{
//         loginDB.find()
//             .then(user => {
//                 res.send(user)
//             })
//             .catch(err => {
//                 res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
//             })
//     }
//
// }
//
// // Update a new idetified user by user id
// exports.updateLogin = (req, res)=>{
//     if(!req.body){
//         return res
//             .status(400)
//             .send({ message : "Data to update can not be empty"})
//     }
//
//     const id = req.params.id;
//     loginDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
//             }else{
//                 res.send(data)
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({ message : "Error Update user information"})
//         })
// }
//
// // Delete a user with specified user id in the request
// exports.deleteLogin = (req, res)=>{
//     const id = req.params.id;
//
//     loginDB.findByIdAndDelete(id)
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
//             }else{
//                 res.send({
//                     message : "User was deleted successfully!"
//                 })
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message: "Could not delete User with id=" + id
//             });
//         });
// }

//user database

exports.createUser = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new userDB({
        email : req.body.email,
        password : req.body.password,
        A_id : req.body.A_id,
        First_Name : req.body.First_Name,
        Last_Name : req.body.Last_Name,
        Phone_Number : req.body.Phone_Number
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.findUser = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        userDB.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        userDB.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

}

// Update a new idetified user by user id
exports.updateUser = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.deleteUser = (req, res)=>{
    const id = req.params.id;

    userDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
