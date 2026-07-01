const Table = ({ headings, data = [] }) => {
  console.log("[Table Component] headings:", headings, "data:", data);
  // No data yet
  if (!data.length) {
    return <div className="p-4">Loading....</div>;
  }

  const row = data[0];
  if (!row) {
    return <div className="p-4">No data available</div>;
  }

  return (
    <table className="w-full divide-y divide-slate-100 text-sm">
      <tbody>
        {headings.map((head, index) => (
          <tr key={index} className="hover:bg-slate-50 transition-colors">
            <th className="py-3 pr-4 font-semibold text-slate-500 text-left w-1/3 align-middle">
              {head.label}
            </th>

            <td className="py-3 text-slate-800 font-medium align-middle">
              {head.render ? head.render(row) : row?.[head.key]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
