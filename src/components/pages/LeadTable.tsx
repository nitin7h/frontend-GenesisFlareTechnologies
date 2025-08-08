import React from "react";

interface LeadDataInterface {
  _id: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
  createdAt: string;
}
interface LeadTableProps {
  data: LeadDataInterface[];
}
export default function LeadTable({ data }: LeadTableProps) {
  const timeFormate = (time: string) => {
    const date = new Date(time);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getUTCFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              E-Mail
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              BusinessType
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
            <th scope="col" className="px-6 py-3">
              Created-At
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.businessType}</td>
                <td className="px-6 py-4">{item.message}</td>
                <td className="px-6 py-4">{timeFormate(item.createdAt)}</td>
                <td className="px-6 py-4">{item._id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
