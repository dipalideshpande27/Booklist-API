const createError = require('http-errors');
let booklist = [];
let idno = 0;

//Read all book entries
exports.index = function (req,res) {
    res.send(booklist)
}

//Read book entry by id
exports.show = function(req,res,next){
    const bookitem = bookList.find( (book) => book.id == req.params.id)
    if(!bookitem){
        return(next(createError(404,"no book with that id")))
    }
    res.send(bookitem);


}
//Delete book entry by id
exports.delete = function(req,res,next){
    const bookitem = booklist.find( (book) => book.id == req.params.id)
    if(!bookitem){
        return(next(createError(404,"no todo with that id")))
    }

    booklist = booklist.filter( (book) => book.id != req.params.id)

    res.send({result:true});


}

//update book entry

exports.update = function(req,res,next){
    if(!req.body.title){
        return (next(createError(400,"title is required")));
    }

    const bookitem = booklist.find( (book) => book.id == req.params.id)
    if(!bookitem){
        return(next(createError(404,"no todo with that id")))
    }

    booklist = booklist.map ( (book) =>{
        if(book.id == req.params.id){
            book.title = req.body.title,
            book.auther = req.body.auther,
            book.read = req.body.read
        }
        return book;
    } )


    res.send({result:true});


}

//Create book entry
exports.create = function (req,res,next){

    if(!req.body.title){
        return (next(createError(400,"name is required")));
    }

    todoList.push({
        id: idno,
        title: req.body.title,
        auther: req.body.auther,
        read: req.body.read

    });
    res.send({result:true});
    idno++;

}