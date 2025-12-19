export default function FilterBar({ value, onChange }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label>
        View:
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ marginLeft: "8px" }}
        >
          <option value="all">All Time</option>
          <option value="daily">Daily</option>
        </select>
      </label>
    </div>
  );
}
