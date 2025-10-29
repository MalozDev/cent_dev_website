# GitHub Pages Deployment Guide for Centurion Developers Website

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Repository: https://github.com/MalozDev/cent_dev_website

## 🚀 Step-by-Step Deployment

### Step 1: Configure Git (One-time setup)

```bash
git config user.name "Stephan Malobeka"
git config user.email "your-email@example.com"
```

### Step 2: Add All Changes

```bash
git add .
```

### Step 3: Commit Your Changes

```bash
git commit -m "Initial commit - Complete website with all sections"
```

### Step 4: Push to GitHub

```bash
git push -u origin main
```

If you get an authentication error, you'll need to:

1. Generate a Personal Access Token (PAT) on GitHub
2. Use it as your password when pushing

## 🔧 Enable GitHub Pages

### Option 1: Using GitHub Actions (Automatic - RECOMMENDED)

1. **Go to your GitHub repository**: https://github.com/MalozDev/cent_dev_website

2. **Enable GitHub Pages**:

   - Click on **Settings** tab
   - Scroll down to **Pages** (in the left sidebar under "Code and automation")
   - Under **Source**, select: **GitHub Actions**

3. **Push your code** (steps above)

4. **Wait for deployment**:

   - Go to the **Actions** tab
   - Watch the deployment workflow run
   - Once complete, your site will be live!

5. **Your website will be available at**:
   ```
   https://malozdev.github.io/cent_dev_website/
   ```

### Option 2: Manual Deployment with gh-pages

If you prefer manual deployment:

1. **Install gh-pages package**:

```bash
npm install --save-dev gh-pages
```

2. **Add deploy scripts to package.json**:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy**:

```bash
npm run deploy
```

## ✅ Verification

After deployment, visit:

- **Production URL**: https://malozdev.github.io/cent_dev_website/

## 🔄 Making Updates

After initial deployment, to update your website:

```bash
# 1. Make your changes to the code

# 2. Add changes
git add .

# 3. Commit
git commit -m "Description of your changes"

# 4. Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy!
```

## 📝 Important Files Created

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment
2. **`vite.config.ts`** - Updated with base path for GitHub Pages

## 🐛 Troubleshooting

### Issue: "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/MalozDev/cent_dev_website.git
```

### Issue: Authentication failed

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use the token as your password when pushing

### Issue: Website not loading CSS/JS

- Make sure `base: "/cent_dev_website/"` is in `vite.config.ts`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: Deployment fails in Actions

- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Make sure the build command works locally: `npm run build`

## 🎨 Custom Domain (Optional)

If you want to use a custom domain like `www.cendev.co.zm`:

1. **Add CNAME file** in `public` folder:

```bash
echo "www.cendev.co.zm" > public/CNAME
```

2. **Update DNS records** at your domain provider:

```
Type: CNAME
Name: www
Value: malozdev.github.io
```

3. **Update vite.config.ts**:

```typescript
base: "/", // Change from "/cent_dev_website/"
```

4. **Enable custom domain** in GitHub Pages settings

## 📊 Current Status

- ✅ Vite config updated for GitHub Pages
- ✅ GitHub Actions workflow created
- ✅ Website fully responsive
- ✅ All sections complete (Hero, About, Services, Technologies, Team, Testimonials, FAQ, Contact)
- ✅ All interactive elements functional
- ⏳ Pending: Git push and GitHub Pages activation

## 🎉 Next Steps

1. Run the Git commands above to push your code
2. Enable GitHub Pages in repository settings
3. Wait 2-3 minutes for first deployment
4. Visit your live website!

---

**Need Help?**

- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Actions Docs: https://docs.github.com/en/actions
