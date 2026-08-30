#!/bin/bash
# Deploy to GitHub Pages

# Build the app
npm install

# Create dist folder
mkdir -p dist

# Copy all files to dist
cp index.html dist/
cp sw.js dist/
cp manifest.webmanifest dist/
cp icon-192.png dist/ 2>/dev/null || true
cp icon-512.png dist/ 2>/dev/null || true

# Add CNAME for custom domain (if needed)
echo "zart-messenger.fggbbgfb445.com" > dist/CNAME 2>/dev/null || true

# Deploy
git add dist -f
git commit -m "deploy: publish to GitHub Pages"
git push origin main

# Enable GitHub Pages
echo "✅ Ready to enable GitHub Pages from Settings → Pages → main/dist"
