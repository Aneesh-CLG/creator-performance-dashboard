import { useEffect, useState } from "react";
import { fetchAnalytics } from "../services/api";
import MetricCard from "../components/MetricCard";
import MetricsTable from "../components/MetricsTable";
import FilterBar from "../components/FilterBar";
import ChartSelector from "../components/ChartSelector";
import AnalyticsChart from "../components/AnalyticsChart";
import AddVideoForm from "../components/AddVideoForm";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [view, setView] = useState("all");
  const [chartType, setChartType] = useState("views");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Correct reload function
  const reload = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetchAnalytics();
      setData(res);
    } catch (err) {
      setError("Failed to load analytics data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
  }, []);

  // ✅ Loading & error states
  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!data.length) return <p>No data found</p>;

  const filteredData =
    view === "daily" ? data.slice(-7) : data;

  return (
    <>
      <h1>Creator Performance Dashboard</h1>

      <FilterBar value={view} onChange={setView} />
      <ChartSelector value={chartType} onChange={setChartType} />

      <AnalyticsChart type={chartType} data={filteredData} />

      <div className="metrics">
        <MetricCard
          title="Total Views"
          value={filteredData.reduce((a, b) => a + b.total_views, 0)}
        />
        <MetricCard
          title="Total Likes"
          value={filteredData.reduce((a, b) => a + b.total_likes, 0)}
        />
        <MetricCard
          title="Avg Engagement"
          value={(
            filteredData.reduce((a, b) => a + b.avg_engagement, 0) /
            filteredData.length
          ).toFixed(2)}
        />
      </div>

      <MetricsTable data={filteredData} />

      {/* ✅ Create new data */}
      <AddVideoForm onSuccess={reload} />
    </>
  );
}
