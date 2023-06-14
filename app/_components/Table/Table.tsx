import React, { ReactNode } from "react";

type TableProps = {
  columns: Array<{
    header: ReactNode;
    id: string;
  }>;

  data: Array<Record<string, any>>;
};

export const Table = ({ columns, data }: TableProps) => {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs capitalize bg-gray-50">
          <tr>
            {columns?.map((col) => (
              <th
                scope="col"
                className="px-0 py-3"
                style={{ color: "#6F767E", fontWeight: 500 }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, i) => (
            <tr className={`border-b ${i % 2 == 0 ? "bg-gray-50" : ""}`}>
              {Object.keys(row)?.map(
                (item) =>
                  columns?.find((col) => col.id === item) && (
                    <td
                      className="px-0 py-4"
                      style={{ color: "#1A1D1F", fontWeight: 600, fontSize: "13px" }}
                    >
                      {row[columns?.find((col) => col.id === item)?.id || ""]}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
