# Cloudinary Video Setup Instructions

## Step 1: Create Cloudinary Account
1. Go to https://cloudinary.com/
2. Sign up for a free account
3. Note down your **Cloud Name** from the dashboard

## Step 2: Upload Hero Video
1. Go to your Cloudinary Media Library
2. Click "Upload" → "Video"
3. Upload the file: `public/hero-video-original.mp4`
4. Set the **Public ID** to: `hero-video` (without extension)
5. Wait for processing to complete

## Step 3: Update Configuration
1. Open `src/config/cloudinary.ts`
2. Replace `'your-cloud-name'` with your actual Cloudinary cloud name
3. Save the file

```typescript
export const CLOUDINARY_CONFIG = {
  cloudName: 'your-actual-cloud-name', // Replace this!
  videos: {
    heroBackground: 'hero-video',
  }
};
```

## Step 4: Verify Setup
1. Check localhost:8080
2. Open browser dev tools → Network tab
3. Look for video requests from `res.cloudinary.com`
4. Video should now load much faster!

## Expected Results After Setup:
- ✅ **77MB → ~5-10MB**: Automatic compression
- ✅ **WebM for Chrome**, MP4 for Safari: Auto format selection
- ✅ **Responsive delivery**: Right size for each device
- ✅ **CDN delivery**: Fast loading worldwide
- ✅ **Automatic poster**: Extracted from first frame
- ✅ **Mobile fallback**: Smart device detection

## Troubleshooting:
- If video doesn't load: Check cloud name and public ID
- If still using local video: Config not updated correctly
- If development mode: Check debug info in top-left corner

## Cost Estimate:
- Free tier: 25GB storage, 25GB monthly bandwidth
- Paid plans start at $89/month for production sites
- Most small-medium sites stay within free limits