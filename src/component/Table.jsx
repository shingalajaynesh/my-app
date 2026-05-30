const Table = ({ headings, data = [] }) => {
  // No data yet
  if (!data.length) {
    return <div className="p-4">Loading....</div>;
  }

  const row = data[0];

  return (
    <table className="w-full border-collapse border">
      <tbody>
        {headings.map((head, index) => (
          <tr key={index}>
            <th className="border p-2 bg-gray-200 text-left">{head.label}</th>

            <td className="border p-2">
              {head.render ? head.render(row) : row?.[head.key]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
