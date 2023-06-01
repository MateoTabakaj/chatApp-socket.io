const Chat = require('../models/chat.model');

module.exports.getAllChat=(req,response)=>{
    Chat.find({})
    .then(authors=>{
        console.log(authors);
        response.json(authors);
    })
    .catch(err=>{
        console.log(err)
        response.json(err)
    })
}

// module.exports.findOneChat=(req,res)=>{
//     Author.findOne({_id:req.params.id})
//     .then(author=>res.json(author))
//     .catch(err=> res.json(err))
// }

// module.exports.createAuthor=(req,res)=>{

//     Author.exists({name: req.body.name})
//     .then(userExists => {
//         if (userExists) {
//             // Promise.reject() will activate the .catch() below.
//             return Promise.reject({errors:{error:{message:'This Author Exist'}}});
//         }return Author.create(req.body)})
//         .then(saveResult => res.json({error : saveResult}))
//         .catch(err => res.json({error:err}));
// }

// module.exports.updateAuthor=(req,res)=>{
//     Author.exists({name: req.body.name})
//     .then(userExists => {
//         if (userExists) {
//             // Promise.reject() will activate the .catch() below.
//             return Promise.reject({errors:{error:{message:'This Author Exist'}}});
//         }
//         return Author.findOneAndUpdate(
//             {_id: req.params.id},
//             req.body,
//             {new:true, runValidators:true}
//             );
//     })
//     .then(saveResult => res.json({error : saveResult}))
//     .catch(err => res.json({error:err}));
  
        
// }
module.exports.deleteChat=(req,res)=>{
    Chat.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch(err=>{
        res.json({message:'Somthing went wrong...', error:err})
        console.log(err)
    })
}