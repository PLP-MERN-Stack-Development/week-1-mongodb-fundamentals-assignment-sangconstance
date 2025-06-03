// use plp_bookstore;
// Find bookks in specific genre
db.books.find({genre: "Dystopian"})

// Books published after a certain year
db.books.find({published_year: {$gt: 1950}})

// Finding books  by specific author
db.books.find({author: "Harper Lee"})

// Updating price of a book
db.books.updateOne({title: "The hobbit"}, {$set: {price : 15.99}})

// Deleting a book by it's title
db.books.deleteOne({title: "Pride and Prejudice"})

// Books in stock and published after 2010
db.books.find({in_stock: true, published_year: {$gt: 2010}})

// Projection to return on specification
db.books.find({}, {title:1, author:1, price:1, _id:0})

//Sorting to display prices - ascending
db.books.find().sort({price:1})

// Sort by Descending Order
db.books.find().sort({price: -1})

//Using skip & limit- page 1(1st 5 books)
db.books.find().skip(0).limit(5)


//Using skip & limit- page 2(Next 5 books)
db.books.find().skip(5).limit(5)

// Aggregate pipeline to calculate the average price of books by genre
db.books.aggregate([
    {$group: {_id:"$genre", avg_price: {$avg: "$price"}}}
])

// Aggregate pipeline to find author with most books in collection
db.books.aggregate([
    {$group: {_id: "$author", count: {$sum:1}}},
    {$sort: {count: -1} },
    {$limit: 1}
])

//Pipeline that groups books by publication decade  + counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  }
])

// Indexing on title field
db.books.createIndex({title:1})

// Compound index on author & published_year
db.books.createIndex({author: 1, published_year:-1})

// Using the explain method
db.books.find({ title: "1984" }).explain("executionStats")