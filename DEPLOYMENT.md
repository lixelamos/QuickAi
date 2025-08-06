# QuickAi Deployment Guide - Vercel

This guide will help you deploy your QuickAi application to Vercel. The application consists of a React frontend and a Node.js backend.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Your code should be in a GitHub repository
3. **Environment Variables**: You'll need API keys and configuration values

## Step 1: Prepare Your Repository

Make sure your code is pushed to a GitHub repository with the following structure:
```
QuickAi/
├── client/          # React frontend
└── server/          # Node.js backend
```

## Step 2: Deploy Backend First

### 2.1 Deploy Backend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Node.js
   - **Root Directory**: `server`
   - **Build Command**: Leave empty (not needed for Node.js)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

### 2.2 Configure Backend Environment Variables

In your Vercel project settings, add these environment variables:

```
CLERK_SECRET_KEY=your_clerk_secret_key_here
DATABASE_URL=your_database_connection_string_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
OPENAI_API_KEY=your_openai_api_key_here
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

### 2.3 Deploy Backend

Click "Deploy" and wait for the deployment to complete. Note the deployment URL (e.g., `https://your-backend.vercel.app`).

## Step 3: Deploy Frontend

### 3.1 Deploy Frontend to Vercel

1. Go back to Vercel dashboard
2. Click "New Project" again
3. Import the same GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3.2 Configure Frontend Environment Variables

Add these environment variables:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
VITE_BASE_URL=https://your-backend-domain.vercel.app
```

**Important**: Replace `your-backend-domain.vercel.app` with the actual backend URL from Step 2.3.

### 3.3 Deploy Frontend

Click "Deploy" and wait for the deployment to complete.

## Step 4: Update CORS Configuration

After both deployments are complete:

1. Go to your backend Vercel project settings
2. Update the `CORS_ORIGIN` environment variable with your frontend URL:
   ```
   CORS_ORIGIN=https://your-frontend-domain.vercel.app
   ```
3. Redeploy the backend

## Step 5: Test Your Deployment

1. Visit your frontend URL
2. Test the authentication flow
3. Test the AI image generation feature
4. Verify all API calls are working

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure `CORS_ORIGIN` is set correctly in backend environment variables
2. **Authentication Issues**: Verify Clerk keys are correct and domains are whitelisted
3. **API Errors**: Check that `VITE_BASE_URL` points to the correct backend URL
4. **Build Failures**: Ensure all dependencies are properly installed

### Environment Variables Checklist:

**Backend Required:**
- `CLERK_SECRET_KEY`
- `DATABASE_URL`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `OPENAI_API_KEY`
- `CORS_ORIGIN`

**Frontend Required:**
- `VITE_CLERK_PUBLISHABLE_KEY`
- `VITE_BASE_URL`

## Additional Notes

- Both frontend and backend will have separate URLs
- You can set up custom domains in Vercel project settings
- Monitor your deployments in the Vercel dashboard
- Set up automatic deployments by connecting your GitHub repository

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set correctly
3. Test API endpoints directly
4. Check browser console for frontend errors 