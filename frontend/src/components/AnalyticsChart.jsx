import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function AnalyticsChart({ type, data }) {
  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer>
        {type === "views" && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="total_views" stroke="#2563eb" />
          </LineChart>
        )}

        {type === "likes" && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="total_likes" stroke="#16a34a" />
          </LineChart>
        )}

        {type === "engagement" && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="avg_engagement" stroke="#dc2626" />
          </LineChart>
        )}

        {type === "viewsLikes" && (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total_views" fill="#2563eb" />
            <Bar dataKey="total_likes" fill="#16a34a" />
          </BarChart>
        )}

        {type === "engagementArea" && (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area dataKey="avg_engagement" stroke="#9333ea" fill="#ddd6fe" />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
