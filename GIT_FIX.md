# Fix Git push 403 and @{u} errors

## What’s wrong
- You’re logged in as **shubhamsingh5216** but pushing to **shubhamgeekonomy/testing** → 403 Permission denied.
- `origin/main` is **gone** (no access or branch removed) → `fatal: Not a valid object name @{u}`.

## Option A: Push to your own repo (shubhamsingh5216)

1. On GitHub, create a new repo under **shubhamsingh5216** named `testing` (or any name). Do **not** add a README.

2. In your project folder, run:

   ```powershell
   cd "c:\Users\csp\Desktop\testing"
   git remote set-url origin https://github.com/shubhamsingh5216/testing.git
   git push -u origin main
   ```

   (Replace `testing` with your repo name if different.)

3. After a successful push, `origin/main` will exist and the `@{u}` error will go away.

## Option B: Keep pushing to shubhamgeekonomy/testing

You need **write access** to that repo:

- **If you own shubhamgeekonomy:**  
  Sign in as that account (or use its token) when Git talks to GitHub, then push again.

- **If someone else owns it:**  
  Ask them to add **shubhamsingh5216** as a collaborator with write access.  
  Then push:

  ```powershell
  git push -u origin main
  ```

## Option C: Fork on GitHub, then push to your fork

1. Go to https://github.com/shubhamgeekonomy/testing and click **Fork** (creates a copy under your account).
2. Set your fork as `origin` and push:

   ```powershell
   git remote set-url origin https://github.com/shubhamsingh5216/testing.git
   git push -u origin main
   ```

   (Use the fork’s URL if the repo name is different.)

---

**Summary:** The 403 and `@{u}` issues are fixed by either pushing to a repo you can write to (your own or your fork) or getting write access to **shubhamgeekonomy/testing** and then running `git push -u origin main`.
