export default function ChartSelector({ value, onChange }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <label>
        Select Chart:
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="views">Views Over Time</option>
          <option value="likes">Likes Over Time</option>
          <option value="engagement">Engagement Over Time</option>
          <option value="viewsLikes">Views vs Likes</option>
          <option value="engagementArea">Engagement Distribution</option>
        </select>
      </label>
    </div>
  );
}
