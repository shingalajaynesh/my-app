const Table = ({ headings, data }) => {
    const row = data[0];

    return (
        <table className="w-full border-collapse border">

            {headings.map((head, index) => (
                <tr key={index}>
                    <th className="border p-2 bg-gray-200 text-left">
                        {head.label}
                    </th>

                    <td className="border p-2">
                        {
                            head.render
                                ? head.render(row)
                                : row[head.key]
                        }
                    </td>
                </tr>
            ))}
        </table>
    );
};

export default Table;   