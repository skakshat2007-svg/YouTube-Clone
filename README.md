# YouTube Clone (WAP Group Project)

This repository contains our **WAP group project** where we are building a YouTube clone using basic React and React Router.

## Collaborators

- Prakhar Jaiswal
- Atharv Bind
- Akshat Singh

## Project Objective

The goal of this project is to create a simplified YouTube-like web application that can:

- Display video-related content in a clean UI
- Navigate between pages using React Router
- Fetch real YouTube data using the YouTube Data API v3
- Render fetched data dynamically in React components

## Tech Stack

- React
- React Router
- Vite
- YouTube Data API v3
- CSS

## Features (Planned / In Progress)

- Home page with video listings
- Search and/or category-based listing
- Video detail/watch page
- Routing between pages using React Router
- API-based dynamic content rendering

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd YouTube-Clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. How to get your YouTube API key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project, and enable the YouTube Data API v3 from the library section under the api and services section. 
3. Then, create an API key under the "Credentials" section. Restric the key by selecting YOUTUBE DATA V3 API.
### 3. Add your YouTube API key

Create a `.env` file in the project root and add:

```env
YOUTUBE_API_KEY=your_api_key_here
```

> Make sure your key has access to YouTube Data API v3.
