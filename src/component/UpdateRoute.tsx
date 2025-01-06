// import { DeleteIcon } from "lucide-react";
// import React, { useState } from "react";
// import { MdPending, MdRampRight } from "react-icons/md";
// import { FaCheck, FaEye, FaTrashAlt } from "react-icons/fa";

// const ManageApplications = () => {
//   const [applications, setApplications] = useState([
//     {
//       id: "672f6668816c64d6698467f5",
//       Route: "Addis Alemayehu",
//       date: "2 months ago",
//       status: "Accepted",
//     },
//     {
//       id: "672f6c9f6ce5e0e7f894d713",
//       Route: "Addis",
//       date: "2 months ago",
//       status: "Accepted",
//     },
//     {
//       id: "674d954f6b31a89672ef653b",
//       Route: "Dawit Workiye",
//       date: "a month ago",
//       status: "Accepted",
//     },
//     {
//       id: "676d13d5dde0fef9baddaa7f",
//       Route: "Addis Alemayehu",
//       date: "7 days ago",
//       status: "Pending",
//     },
//     {
//       id: "676d1572dde0fef9baddaa80",
//       Route: "addis alemayehu",
//       date: "7 days ago",
//       status: "Accepted",
//     },
//   ]);

//   const handleStatusChange = (id, newStatus) => {
//     setApplications((prev) =>
//       prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
//     );
//   };

//   return (
//     <div>
//       <table
//         style={{ width: "100%", textAlign: "left" }}
//         className="text-black"
//       >
//         <thead className="bg-white">
//           <tr>
//             <th style={{ border: "2px solid #ddd", padding: "8px" }}>ID</th>
//             <th style={{ border: "2px solid #ddd", padding: "8px" }}>Route</th>
//             <th style={{ border: "2px solid #ddd", padding: "8px" }}>Date</th>
//             <th style={{ border: "2px solid #ddd", padding: "8px" }}>
//               Route Status
//             </th>
//             <th style={{ border: "2px solid #ddd", padding: "8px" }}>
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-slate-200">
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td style={{ border: "2px solid #ddd", padding: "8px" }}>
//                 {app.id}
//               </td>
//               <td style={{ border: "2px solid #ddd", padding: "8px" }}>
//                 {app.Route}
//               </td>

//               <td style={{ border: "2px solid #ddd", padding: "8px" }}>
//                 {app.date}
//               </td>
//               <td
//                 className="text-center"
//                 style={{
//                   color: app.status === "Accepted" ? "green" : "orange",
//                 }}
//               >
//                 {app.status}
//               </td>
//               <td className="flex justify-evenly">
//                 <button onClick={() => handleStatusChange(app.id, "Accepted")}>
//                   <FaCheck />
//                 </button>
//                 <button onClick={() => handleStatusChange(app.id, "Pending")}>
//                   <MdPending />
//                 </button>
//                 <button onClick={() => alert(`Viewing ${app.Route}`)}>
//                   <FaEye />
//                 </button>
//                 <button
//                   onClick={() =>
//                     setApplications((prev) =>
//                       prev.filter((a) => a.id !== app.id)
//                     )
//                   }
//                 >
//                   <DeleteIcon />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

//
// import * as React from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";

// const paginationModel = { page: 0, pageSize: 5 };

// export default function DataTable() {
//   const [fetchrows, setRows] = React.useState([]);

///////     fetching the request data

// React.useEffect(() => {
//   const fetchingData = async () => {
//     const Response = await fetch("/s");
//     const data = await Response.json();
//     if (data) {
//       setRows(data);
//     }
//   };
//   fetchingData();
// }, []);

//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 200 },
//     { field: "Route", headerName: "Route", width: 200 },
//     {
//       field: "Time",
//       headerName: "Time",
//       type: "date",
//       width: 200,
//     },
//     {
//       field: "Status",
//       headerName: "Status",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 200,
//     },
//     {
//       field: "Action",
//       headerName: "Action",
//       width: 200,
//     },
//   ];

//   const rows = [
//     { id: 1, Time: new Date(), Route: "bethel-alembank" },
//     { id: 2, Time: new Date(), Route: "pissa-adisugebya" },
//     { id: 3, Time: new Date(), Route: "megenagna-abado" },
//     { id: 4, Time: new Date(), Route: "ayat-cmc" },
//     { id: 5, Time: new Date(), Route: "bole-4killo" },
//     { id: 6, Time: new Date(), Route: "4killo-mexico" },
//     { id: 7, Time: new Date(), Route: "mexico-sheromeda" },
//     { id: 8, Time: new Date(), Route: "ferensay-6killo" },
//     { id: 9, Time: new Date(), Route: "kalite-koyefetch" },
//   ];

//   return (
//     <Paper sx={{ height: 400, width: "100%" }} className="bg-slate-400">
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{ pagination: { paginationModel } }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         sx={{ border: 0 }}
//       />
//     </Paper>
//   );
// }
import React from "react";

export default function UpdateRoute() {
  return <div>UpdateRoute</div>;
}
