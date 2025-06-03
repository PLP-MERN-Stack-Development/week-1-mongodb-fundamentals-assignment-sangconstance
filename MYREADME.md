
# 📚 MongoDB Week 1 Assignment – Bookstore Project

This project demonstrates my understanding of basic and advanced MongoDB operations by managing a simple bookstore database.

## 🛠️ Setup Instructions

### 1. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) installed on your machine.

Install the MongoDB Node.js driver by running:

```bash
npm install
```

---

### 2. Run the Insertion Script

To insert sample book data into the database, run:

```bash
npm start
```

This command will:
- Connect to your local MongoDB server
- Drop the existing `books` collection (if it exists)
- Insert 12 book documents into the `plp_bookstore` database

---

### 3. View the Data in MongoDB Compass

You can explore the inserted data visually using MongoDB Compass:

1. Open Compass
2. Connect to your local MongoDB instance (`mongodb://localhost:27017`)
3. Navigate to the `plp_bookstore` database
4. Open the `books` collection to view the inserted documents

---

## 📄 Files in This Project

| File Name         | Purpose                                     |
|-------------------|---------------------------------------------|
| `insert_books.js` | Script that inserts 12 books into MongoDB   |
| `queries.js`      | Contains all CRUD, advanced queries, and indexing |
| `README.md`       | Instructions to run and understand the project |
| `screenshot.png`  | Screenshot showing inserted books in Compass |

---

## 🧪 Queries Included in `queries.js`

- Find books in a specific genre:
  ```js
  db.books.find({ genre: "Dystopian" })
  ```

- Update the price of a book:
  ```js
  db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 15.99 } })
  ```

- Aggregation pipeline to calculate average price by genre:
  ```js
  db.books.aggregate([
    { $group: { _id: "$genre", avg_price: { $avg: "$price" } } }
  ])
  ```

- Create an index and check performance:
  ```js
  db.books.createIndex({ title: 1 })
  db.books.find({ title: "1984" }).explain("executionStats")
  ```

---

## ✅ How to Run Queries

You can run the queries inside `queries.js` by:
- Copy-pasting them into **MongoDB Compass's Query bar**, or
- Running them directly in **MongoDB Shell (`mongosh`)**

---

## 📬 Submission Checklist

✅ `insert_books.js`  
✅ `queries.js`  
✅ `MYREADME.md` 
✅ `screenshot.png` (showing books in MongoDB Compass)

---

## 👩‍💻 Author

Constance Sang  
MERN Full Stack Student  
