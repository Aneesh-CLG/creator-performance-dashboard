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

4️⃣ Project File Structure
creator-performance-dashboard/
├── README.md                # Project documentation
├── backend/                 # Backend (Express + SQLite)
│   ├── package.json
│   ├── .env.example         # Environment variable template
│   └── src/
│       ├── server.js        # App entry point
│       ├── routes/          # API route definitions
│       ├── controllers/     # Request handlers / business logic
│       └── db/
│           └── database.sqlite   # SQLite database
│
├── frontend/                # Frontend (React + Vite)
│   ├── package.json
│   └── src/
│       ├── pages/           # Page-level components
│       │   └── Dashboard.jsx
│       ├── components/      # Reusable UI components
│       │   ├── MetricCard.jsx
│       │   ├── MetricsTable.jsx
│       │   ├── FilterBar.jsx
│       │   ├── ChartSelector.jsx
│       │   ├── AnalyticsChart.jsx
│       │   └── AddVideoForm.jsx
│       ├── services/        # API interaction layer
│       │   └── api.js
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css        # Global styles
│
├── notebooks/               # Exploratory & analytics notebooks
│   ├── EDA.ipynb
│   ├── SQL-connection.ipynb
│   └── Visualisation.ipynb

5️⃣ How to Run Locally
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

6️⃣ API Endpoints
Create new video metrics
POST /api/videos

Update existing video metrics
PUT /api/videos/:id

Fetch aggregated analytics
GET /api/analytics


All endpoints return JSON responses with clear success or error messages.

7️⃣ Data Model
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

8️⃣ Exploratory Data Analysis (EDA) & Analytics

Before building the dashboard, exploratory data analysis (EDA) was performed to understand the structure, quality, and distribution of the dataset. This step helped identify meaningful metrics and informed the analytics design.

EDA Activities

Inspected dataset structure and data types

Checked for missing or inconsistent values

Analyzed distributions of views, likes, and engagement rates

Identified outliers and high-performing videos

Validated date fields for time-based aggregation

EDA was carried out using Jupyter notebooks with Python and SQL to ensure correctness before persisting the data in SQLite.

Analytics Performed

Based on the EDA findings, the following analytics were implemented:

Total Views: Aggregated sum of views across all videos

Total Likes: Aggregated sum of likes

Average Engagement Rate: Mean engagement percentage

Time-based trends: Aggregations grouped by publish date

Comparative analysis: Views vs likes for performance comparison

These analytics are computed using SQL aggregation queries and exposed through a REST API as JSON, which is then visualized on the frontend dashboard.

Supporting Notebooks

The repository also includes exploratory and experimental notebooks:

EDA.ipynb – initial dataset exploration and cleaning

SQL-connection.ipynb – validating SQL queries and aggregations

Visualisation.ipynb – early visualization experiments

These notebooks document the analytical thinking behind the final dashboard and support the production implementation.

9️⃣ AI Collaboration LogAI Tool(s) Used

ChatGPT, Chef by Convex(reference), Verdent AI(reference), DeepState AI(reference), QuillBot(for better prompt generation)

How AI Was Used (Under My Direction)

Used AI to brainstorm and validate architectural options after I defined the Track B requirements and overall dashboard scope.

Requested AI assistance to translate my analytics requirements into REST API designs and SQL aggregation logic.

Used AI as a debugging assistant when resolving backend issues (SQLite paths, rowid behavior, API errors) after I identified the root cause.

Leveraged AI to refine frontend components and UX based on my feedback, including loading states, error handling, and chart interactions.

Iteratively improved the README and documentation using AI, while ensuring all content accurately reflects what was implemented.

In all cases, AI was used as a collaborative tool, not as a source of unchecked code. All outputs were reviewed, tested, and modified as needed.

Example Prompt (User-Driven)

“I have chosen Track B and want to build a creator performance dashboard. Based on my dataset and analytics goals, help me structure REST APIs and a React dashboard that meet the minimum scope requirements.”

This prompt reflects intentional direction rather than open-ended generation.

Example of AI Output Correction / Refactor

During development, AI initially assumed the presence of a sequential id column for database records. After inspecting the SQLite schema myself, I identified that rowid was being used instead. I corrected the backend update logic and aligned frontend requests accordingly, ensuring correct data updates and consistent behavior.

This demonstrates active validation, correction, and ownership of the final implementation.

Responsible AI Usage

All AI-generated suggestions were reviewed and adapted to fit the project’s scope.

No AI output was used without understanding or testing it.

Final architectural and implementation decisions were made by me, with AI acting only as a support tool.

1️⃣0️⃣ Trade-offs + Next Improvements
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

1️⃣1️⃣ Sample Data
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
