export default function MetricsTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Likes</th>
          <th>Engagement</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.date}</td>
            <td>{row.total_views}</td>
            <td>{row.total_likes}</td>
            <td>{row.avg_engagement}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
