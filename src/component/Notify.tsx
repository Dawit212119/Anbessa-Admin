import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { orange } from "@mui/material/colors";
import Actionbtn from "./Admincomponent/Actionbtn";
import { FaTimesCircle } from "react-icons/fa";
import { MdAccessTimeFilled, MdDone, MdRemoveRedEye } from "react-icons/md";
import { Navigate } from "react-router-dom";
const paginationModel = { page: 0, pageSize: 5 };

interface NotfiyRouteProps {
  NavigatetoRoute: (route: string) => void;
}

const NotfiyRoutes: React.FC<NotfiyRouteProps> = ({ NavigatetoRoute }) => {
  const [notify, setNotify] = useState([]);
  //  fetch from Request object

  useEffect(() => {
    const fetchingList = async () => {
      const Respons = await fetch("/route/get/");
      const data = await Respons.json();
      if (data) {
        setNotify(data);
      }
    };
    fetchingList();
  });
  const handleviewed = (route: string) => {
    NavigatetoRoute(route);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "Route", headerName: "Route", width: 200 },
    {
      field: "Time",
      headerName: "Time",
      type: "date",
      width: 200,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Actionbtn
            icon={MdRemoveRedEye}
            onClick={() => {
              handleviewed(params.row.route); // router.push(`/application/${params.row.id}`);
            }}
          />
        );
      },
    },
  ];
  const rows = [
    { id: 1, Time: new Date(), Route: "bethel-alembank" },
    { id: 2, Time: new Date(), Route: "pissa-adisugebya" },
    { id: 3, Time: new Date(), Route: "megenagna-abado" },
    { id: 4, Time: new Date(), Route: "ayat-cmc" },
    { id: 5, Time: new Date(), Route: "4 killo-mexico" },
    { id: 6, Time: new Date(), Route: "4 killo-mexico" },
    { id: 7, Time: new Date(), Route: "mexico-sheromeda" },
    { id: 8, Time: new Date(), Route: "ferensay-6killo" },
    { id: 9, Time: new Date(), Route: "kalite-koyefetch" },
  ];
  return (
    <Paper sx={{ height: 400, width: "100%" }} className="bg-slate-400">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Paper>
  );
};
export default NotfiyRoutes;
