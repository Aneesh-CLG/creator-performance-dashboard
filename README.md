# creator-performance-dashboard
Track B — Dashboard (Basic Analytics View)

1️⃣ Track Chosen + Why

Track B (Dashboard) was chosen to demonstrate an end-to-end analytics workflow: loading JSON data, computing metrics, applying filters, and visualizing insights. This track closely reflects real-world data dashboards used in creator analytics tools like Hootsuite.

2️⃣ Features Implemented (Checklist)

✅ Single-screen analytics dashboard (within 1–3 screen limit)

✅ Load analytics data as JSON via REST API

✅ Metric cards:

Total Views

Total Likes

Average Engagement

✅ One filter:

All-time vs recent (date-based)

✅ 5 user-selectable charts:

Views over time

Likes over time

Engagement over time

Views vs Likes comparison

Engagement distribution

✅ Analytics table (list view)

✅ Form to create new video data

✅ Basic validation (required fields)

✅ Loading, error, and empty states

✅ Persistent storage using SQLite

3️⃣ Tech Stack
Frontend

React (Vite)

Recharts (data visualization)

Plain CSS

Backend

Node.js

Express.js

REST APIs

Database

SQLite

SQL queries and aggregations for analytics

4️⃣ How to Run Locally
Backend
cd backend
npm install
npm start


Backend runs at:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

5️⃣ API Endpoints
Create new video metrics
POST /api/videos

Update existing video metrics
PUT /api/videos/:id

Fetch aggregated analytics
GET /api/analytics


All endpoints return JSON responses with clear success or error messages.

6️⃣ Data Model
Table: videos
Field	Type	Description
rowid	INTEGER	SQLite primary identifier
title	TEXT	Video title
channel_title	TEXT	Channel name
published_at	TEXT	Publish date
view_count	INTEGER	Number of views
like_count	INTEGER	Number of likes
engagement_rate	REAL	Engagement percentage

Analytics are computed dynamically using SQL aggregations grouped by date.

7️⃣ AI Collaboration Log
AI Tool(s) Used

ChatGPT

How AI Helped

Designed REST API structure using Express and SQLite

Helped define analytics aggregation logic

Assisted with React component structure and data flow

Supported debugging of React state, lifecycle, and async behavior

Helped improve UX with loading, error, and empty states

Example Prompt

“Design a creator performance dashboard inspired by Hootsuite Analytics using React, Express, and SQLite with minimal scope.”

Example Correction / Refactor

AI initially assumed the database would have a sequential id column.
During implementation, I identified SQLite’s use of rowid and corrected both backend update logic and frontend requests accordingly. This ensured correct updates and demonstrated understanding of database behavior rather than blindly accepting AI output.

8️⃣ Trade-offs + Next Improvements
Trade-offs

Authentication was excluded to keep scope minimal

SQLite was chosen over PostgreSQL for simplicity

Styling was kept minimal to focus on analytics correctness

Next Improvements

Add a date range picker instead of fixed daily filter

Add pagination for large datasets

Export analytics as CSV

Introduce authentication and user-specific dashboards

Add caching for analytics queries

9️⃣ Sample Data
Seed Strategy

Initial data sourced from a YouTube analytics CSV

Inserted into SQLite during setup

New data can be added dynamically from the frontend form

Example JSON Payload
{
  "title": "Sample Video",
  "channel_title": "Demo Channel",
  "published_at": "2024-10-01",
  "view_count": 150000,
  "like_count": 6000,
  "engagement_rate": 4.0
}

✅ Scope Compliance Summary

Frontend form: ✅

Table/list view: ✅

Validation & empty states: ✅

3+ REST API endpoints: ✅

SQLite persistence: ✅

Production-minded structure: ✅

AI collaboration log: ✅

🏁 Final Notes

This project focuses on clarity, correctness, and explainability. All minimum scope and Track B requirements are fully met, with additional UX and analytics enhancements beyond the baseline.
