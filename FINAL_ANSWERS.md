# FINAL ASSIGNMENT ANSWERS - Copy These Exactly

---

## Question 2: Get All Books (getallbooks)

**cURL Command:**
```
curl http://localhost:5001/books
```

**Output:**
```json
{
   "count" : 10,
   "data" : [
      {
         "author" : "F. Scott Fitzgerald",
         "description" : "A classic American novel set in the Jazz Age on Long Island, near New York City. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan.",
         "isbn" : "978-0-7432-7356-5",
         "price" : 12.99,
         "publication_year" : 1925,
         "title" : "The Great Gatsby"
      },
      {
         "author" : "Harper Lee",
         "description" : "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
         "isbn" : "978-0-06-112008-4",
         "price" : 14.99,
         "publication_year" : 1960,
         "title" : "To Kill a Mockingbird"
      },
      {
         "author" : "George Orwell",
         "description" : "A dystopian social science fiction novel.",
         "isbn" : "978-0-452-28423-4",
         "price" : 13.99,
         "publication_year" : 1949,
         "title" : "1984"
      }
   ],
   "success" : true
}
```

---

## Question 3: Get Books by ISBN (getbooksbyISBN)

**cURL Command:**
```
curl http://localhost:5001/books/isbn/978-0-7432-7356-5
```

**Output:**
```json
{
   "data" : {
      "author" : "F. Scott Fitzgerald",
      "description" : "A classic American novel set in the Jazz Age on Long Island, near New York City. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan.",
      "isbn" : "978-0-7432-7356-5",
      "price" : 12.99,
      "publication_year" : 1925,
      "title" : "The Great Gatsby"
   },
   "success" : true
}
```

---

## Question 4: Get Books by Author (getbooksbyauthor)

**cURL Command:**
```
curl http://localhost:5001/books/author/George%20Orwell
```

**Output:**
```json
{
   "count" : 2,
   "data" : [
      {
         "author" : "George Orwell",
         "description" : "A dystopian social science fiction novel.",
         "isbn" : "978-0-452-28423-4",
         "price" : 13.99,
         "publication_year" : 1949,
         "title" : "1984"
      },
      {
         "author" : "George Orwell",
         "description" : "A beast fable, in the form of satirical allegorical novella.",
         "isbn" : "978-0-7432-7357-2",
         "price" : 9.99,
         "publication_year" : 1945,
         "title" : "Animal Farm"
      }
   ],
   "success" : true
}
```

---

## Question 5: Get Books by Title (getbooksbytitle)

**cURL Command:**
```
curl http://localhost:5001/books/title/1984
```

**Output:**
```json
{
   "count" : 1,
   "data" : [
      {
         "author" : "George Orwell",
         "description" : "A dystopian social science fiction novel.",
         "isbn" : "978-0-452-28423-4",
         "price" : 13.99,
         "publication_year" : 1949,
         "title" : "1984"
      }
   ],
   "success" : true
}
```

---

## Question 6: Get Book Review (getbookreview)

**cURL Command:**
```
curl http://localhost:5001/books/978-0-7432-7356-5/review
```

**Output:**
```json
{
   "count" : 0,
   "data" : [],
   "success" : true
}
```

---

## Question 7: Register New User (register)

**cURL Command:**
```
curl -X POST http://localhost:5001/auth/register -H "Content-Type: application/json" -d '{"username":"newuser123","password":"password123","email":"newuser@example.com"}'
```

**Output:**
```json
{
   "data" : {
      "userId" : "f002f7d3-e7c6-4733-b59e-9816795dffc5",
      "username" : "newuser123"
   },
   "message" : "User registered successfully",
   "success" : true
}
```

---

## Question 8: Login User (login)

**cURL Command:**
```
curl -X POST http://localhost:5001/auth/login -H "Content-Type: application/json" -d '{"username":"newuser123","password":"password123"}'
```

**Output:**
```json
{
   "data" : {
      "sessionId" : "LmEgJVIyl8hLm53eAOcf7JAqKjh5HmP4",
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "userId" : "f002f7d3-e7c6-4733-b59e-9816795dffc5",
      "username" : "newuser123"
   },
   "message" : "Login successful!",
   "success" : true
}
```

---

## Question 9: Add/Modify Review (reviewadded) - USES PUT METHOD

**cURL Command:**
```
curl -X PUT http://localhost:5001/books/978-0-452-28423-4/review -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{"rating":5,"comment":"Excellent dystopian novel! Orwell was a visionary."}'
```

**Output:**
```json
{
   "data" : {
      "bookIsbn" : "978-0-452-28423-4",
      "comment" : "Excellent dystopian novel! Orwell was a visionary.",
      "createdAt" : "2026-01-25T04:55:57.480Z",
      "rating" : 5,
      "reviewId" : "3d7b7b28-8c33-4170-81a1-a4382e441978",
      "updatedAt" : "2026-01-25T04:55:57.480Z",
      "userId" : "f002f7d3-e7c6-4733-b59e-9816795dffc5",
      "username" : "newuser123"
   },
   "message" : "Review added/updated successfully",
   "success" : true
}
```

---

## Question 10: Delete Review (deletereview)

**cURL Command:**
```
curl -X DELETE http://localhost:5001/books/978-0-452-28423-4/review/3d7b7b28-8c33-4170-81a1-a4382e441978 -H "Authorization: Bearer YOUR_TOKEN"
```

**Output:**
```json
{
   "message" : "Review deleted successfully",
   "success" : true
}
```

---

## Question 11: GitHub URL for general.js

**URL to Submit:**
```
https://github.com/thatavarthisravya/library/blob/main/routes/general.js
```

---

## KEY FIXES MADE:

1. ✅ **Q6, Q9, Q10**: All use `/review` endpoint (singular, not `/reviews`)
2. ✅ **Q8**: Login message is now exactly `"Login successful!"`
3. ✅ **Q9**: Uses `PUT` method (not POST) as required
4. ✅ All cURL commands clearly show the endpoint

## IMPORTANT FOR Q1:

You MUST fork from: https://github.com/ibm-developer-skills-network/expressBookReview

Then generate githubrepo file showing `"fork": true`.
