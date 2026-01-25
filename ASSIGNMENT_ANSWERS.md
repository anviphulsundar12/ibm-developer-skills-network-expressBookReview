# Assignment Answers - Book Review Application

---

## Question 1: GitHub Repository Fork

**cURL Command:**
```bash
curl -s https://api.github.com/repos/thatavarthisravya/library
```

**Output:**
```json
{
  "name": "library",
  "full_name": "thatavarthisravya/library",
  "html_url": "https://github.com/thatavarthisravya/library",
  "description": null,
  "created_at": "2026-01-24T18:46:29Z",
  "updated_at": "2026-01-24T18:47:42Z"
}
```

---

## Question 2: Get All Books

**cURL Command:**
```bash
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
         "description" : "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice. It views a world of great beauty and savage inequities through the eyes of a young girl.",
         "isbn" : "978-0-06-112008-4",
         "price" : 14.99,
         "publication_year" : 1960,
         "title" : "To Kill a Mockingbird"
      },
      {
         "author" : "George Orwell",
         "description" : "A dystopian social science fiction novel that follows the life of Winston Smith, a low-ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party.",
         "isbn" : "978-0-452-28423-4",
         "price" : 13.99,
         "publication_year" : 1949,
         "title" : "1984"
      },
      {
         "author" : "Jane Austen",
         "description" : "A romantic novel of manners following the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments.",
         "isbn" : "978-0-14-017739-8",
         "price" : 11.99,
         "publication_year" : 1813,
         "title" : "Pride and Prejudice"
      },
      {
         "author" : "J.D. Salinger",
         "description" : "A story about a few days in the life of a troubled teenager named Holden Caulfield. The novel details his experiences in New York City after being expelled from prep school.",
         "isbn" : "978-0-7432-4722-1",
         "price" : 10.99,
         "publication_year" : 1951,
         "title" : "The Catcher in the Rye"
      },
      {
         "author" : "J.R.R. Tolkien",
         "description" : "An epic high-fantasy novel following the quest to destroy the One Ring. The story began as a sequel to Tolkien's earlier work, The Hobbit, but eventually developed into a much larger work.",
         "isbn" : "978-0-618-26030-1",
         "price" : 25.99,
         "publication_year" : 1954,
         "title" : "The Lord of the Rings"
      },
      {
         "author" : "J.D. Salinger",
         "description" : "A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation.",
         "isbn" : "978-0-316-76948-0",
         "price" : 15.99,
         "publication_year" : 1951,
         "title" : "The Catcher in the Rye"
      },
      {
         "author" : "George Orwell",
         "description" : "A beast fable, in the form of satirical allegorical novella, which tells the story of a group of farm animals who rebel against their human farmer.",
         "isbn" : "978-0-7432-7357-2",
         "price" : 9.99,
         "publication_year" : 1945,
         "title" : "Animal Farm"
      },
      {
         "author" : "Aldous Huxley",
         "description" : "A dystopian novel set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy.",
         "isbn" : "978-0-14-143951-8",
         "price" : 13.49,
         "publication_year" : 1932,
         "title" : "Brave New World"
      },
      {
         "author" : "Gabriel García Márquez",
         "description" : "A landmark 1967 novel by Colombian author, which tells the multi-generational story of the Buendía family, whose patriarch founded the town of Macondo.",
         "isbn" : "978-0-06-093546-7",
         "price" : 16.99,
         "publication_year" : 1967,
         "title" : "One Hundred Years of Solitude"
      }
   ],
   "success" : true
}
```

---

## Question 3: Get Books by ISBN

**cURL Command:**
```bash
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

## Question 4: Get Books by Author

**cURL Command:**
```bash
curl http://localhost:5001/books/author/George%20Orwell
```

**Output:**
```json
{
   "count" : 2,
   "data" : [
      {
         "author" : "George Orwell",
         "description" : "A dystopian social science fiction novel that follows the life of Winston Smith, a low-ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party.",
         "isbn" : "978-0-452-28423-4",
         "price" : 13.99,
         "publication_year" : 1949,
         "title" : "1984"
      },
      {
         "author" : "George Orwell",
         "description" : "A beast fable, in the form of satirical allegorical novella, which tells the story of a group of farm animals who rebel against their human farmer.",
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

## Question 5: Get Books by Title

**cURL Command:**
```bash
curl http://localhost:5001/books/title/1984
```

**Output:**
```json
{
   "count" : 1,
   "data" : [
      {
         "author" : "George Orwell",
         "description" : "A dystopian social science fiction novel that follows the life of Winston Smith, a low-ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party.",
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

## Question 6: Get Book Review

**cURL Command:**
```bash
curl http://localhost:5001/books/978-0-7432-7356-5/reviews
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

## Question 7: Register New User

**cURL Command:**
```bash
curl -X POST http://localhost:5001/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"assignmentuser","password":"password123","email":"assignment@example.com"}'
```

**Output:**
```json
{
   "data" : {
      "userId" : "269bc5c5-0a4c-4f14-bdc7-f326ea0e736e",
      "username" : "assignmentuser"
   },
   "message" : "User registered successfully",
   "success" : true
}
```

---

## Question 8: Login User

**cURL Command:**
```bash
curl -X POST http://localhost:5001/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"assignmentuser","password":"password123"}'
```

**Output:**
```json
{
   "data" : {
      "sessionId" : "L9La26N6dMZk9lnVIjxEanvdCies1H_w",
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNjliYzVjNS0wYTRjLTRmMTQtYmRjNy1mMzI2ZWEwZTczNmUiLCJ1c2VybmFtZSI6ImFzc2lnbm1lbnR1c2VyIiwiaWF0IjoxNzY5Mjc5ODE3LCJleHAiOjE3NjkyODM0MTd9.VgEEIp5CLEXxuKem13B-l953Bls7LolXUZP4MTk26kI",
      "userId" : "269bc5c5-0a4c-4f14-bdc7-f326ea0e736e",
      "username" : "assignmentuser"
   },
   "message" : "Login successful",
   "success" : true
}
```

---

## Question 9: Add/Modify Review

**cURL Command:**
```bash
curl -X POST http://localhost:5001/books/978-0-452-28423-4/reviews \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNjliYzVjNS0wYTRjLTRmMTQtYmRjNy1mMzI2ZWEwZTczNmUiLCJ1c2VybmFtZSI6ImFzc2lnbm1lbnR1c2VyIiwiaWF0IjoxNzY5Mjc5ODE3LCJleHAiOjE3NjkyODM0MTd9.VgEEIp5CLEXxuKem13B-l953Bls7LolXUZP4MTk26kI" \
  -H "Content-Type: application/json" \
  -d '{"rating":5,"comment":"Excellent dystopian novel! Orwell was a visionary."}'
```

**Output:**
```json
{
   "data" : {
      "bookIsbn" : "978-0-452-28423-4",
      "comment" : "Excellent dystopian novel! Orwell was a visionary.",
      "createdAt" : "2026-01-24T18:37:11.377Z",
      "rating" : 5,
      "reviewId" : "c1989a5c-3d8c-493a-b2ed-bb89a525451a",
      "updatedAt" : "2026-01-24T18:37:11.377Z",
      "userId" : "269bc5c5-0a4c-4f14-bdc7-f326ea0e736e",
      "username" : "assignmentuser"
   },
   "message" : "Review added/updated successfully",
   "success" : true
}
```

---

## Question 10: Delete Review

**cURL Command:**
```bash
curl -X DELETE http://localhost:5001/books/978-0-452-28423-4/reviews/c1989a5c-3d8c-493a-b2ed-bb89a525451a \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNjliYzVjNS0wYTRjLTRmMTQtYmRjNy1mMzI2ZWEwZTczNmUiLCJ1c2VybmFtZSI6ImFzc2lnbm1lbnR1c2VyIiwiaWF0IjoxNzY5Mjc5ODE3LCJleHAiOjE3NjkyODM0MTd9.VgEEIp5CLEXxuKem13B-l953Bls7LolXUZP4MTk26kI"
```

**Output:**
```json
{
   "message" : "Review deleted successfully",
   "success" : true
}
```

---

## Question 11: GitHub URL of general.js

**URL to Submit:**
```
https://github.com/thatavarthisravya/library/blob/main/routes/general.js
```

**What the file contains:**
- ✅ Get all books using async/await
- ✅ Get book details by ISBN using async/await
- ✅ Get books by author using async/await
- ✅ Get books by title using async/await
- ✅ Axios integration with async/await

---

## Summary

All 11 questions have been answered with:
- ✅ Working cURL commands
- ✅ Actual output from the application
- ✅ GitHub repository created and pushed
- ✅ general.js file with async/await implementations

Repository: https://github.com/thatavarthisravya/library
