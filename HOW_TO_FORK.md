# How to Fork the IBM Repository

## Step 1: Fork the Original Repository

1. Go to: https://github.com/ibm-developer-skills-network/expressBookReview
2. Click the "Fork" button in the top right
3. This will create: `https://github.com/YOUR_USERNAME/expressBookReview`

## Step 2: Clone Your Fork

```bash
cd ~/Desktop
git clone https://github.com/YOUR_USERNAME/expressBookReview.git
cd expressBookReview
```

## Step 3: Copy Your Code to the Fork

```bash
# Copy all files from your current project to the forked repository
# (excluding node_modules and .git)
cp -r "/Users/koushikinnamuri/Desktop/untitled folder 2/"* .
# But don't copy these:
rm -rf node_modules
```

## Step 4: Commit and Push

```bash
git add .
git commit -m "Implemented Book Review Application"
git push origin main
```

## Step 5: Generate githubrepo file

```bash
curl -s https://api.github.com/repos/YOUR_USERNAME/expressBookReview | jq '{name, full_name, html_url, fork, parent: .parent.full_name}' > githubrepo
```

This will show it's forked from `ibm-developer-skills-network/expressBookReview`

## Expected Output for Question 1:

```json
{
  "name": "expressBookReview",
  "full_name": "YOUR_USERNAME/expressBookReview",
  "html_url": "https://github.com/YOUR_USERNAME/expressBookReview",
  "fork": true,
  "parent": "ibm-developer-skills-network/expressBookReview"
}
```

The key is the `"fork": true` and `"parent"` fields showing it's forked from IBM's repo!
