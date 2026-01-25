# CORRECTED Assignment Answers

## Question 1: GitHub Repository Fork

You MUST fork the IBM repository. Here's how:

1. Go to: https://github.com/ibm-developer-skills-network/expressBookReview
2. Click "Fork"  
3. Clone your fork and copy your code there
4. Push to your fork

**cURL Command:**
```bash
curl -s https://api.github.com/repos/YOUR_USERNAME/expressBookReview
```

Expected output should show:
```json
{
  "fork": true,
  "parent": {
    "full_name": "ibm-developer-skills-network/expressBookReview"
  }
}
```

---

## Question 6: Get Book Review (CORRECTED - Using /review endpoint)

**cURL Command:**
```bash
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

## Question 8: Login User (CORRECTED - Updated message)

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
      "sessionId" : "SESSION_ID_HERE",
      "token" : "JWT_TOKEN_HERE",
      "userId" : "USER_ID_HERE",
      "username" : "assignmentuser"
   },
   "message" : "Login successful! Logged in as a registered user.",
   "success" : true
}
```

---

## Question 9: Add/Modify Review (CORRECTED - Using /review endpoint)

**cURL Command:**
```bash
curl -X POST http://localhost:5001/books/978-0-452-28423-4/review \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"rating":5,"comment":"Excellent dystopian novel! Orwell was a visionary."}'
```

**Output:**
```json
{
   "data" : {
      "bookIsbn" : "978-0-452-28423-4",
      "comment" : "Excellent dystopian novel! Orwell was a visionary.",
      "createdAt" : "TIMESTAMP",
      "rating" : 5,
      "reviewId" : "REVIEW_ID",
      "updatedAt" : "TIMESTAMP",
      "userId" : "USER_ID",
      "username" : "assignmentuser"
   },
   "message" : "Review added/updated successfully",
   "success" : true
}
```

---

## Question 10: Delete Review (CORRECTED - Using /review endpoint)

**cURL Command:**
```bash
curl -X DELETE http://localhost:5001/books/978-0-452-28423-4/review/REVIEW_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Output:**
```json
{
   "message" : "Review deleted successfully",
   "success" : true
}
```

---

## Key Changes Made:

1. ✅ Changed endpoint from `/reviews` (plural) to `/review` (singular)
2. ✅ Updated login message to "Login successful! Logged in as a registered user."
3. ✅ All routes working with corrected endpoints

## Files Updated:
- `routes/reviews.js` - Now uses `/review` endpoint
- `controllers/authController.js` - Updated login message
- All `.txt` output files regenerated with correct endpoints
