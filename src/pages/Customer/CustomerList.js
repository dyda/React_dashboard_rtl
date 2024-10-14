import React from "react";
import { Box, Button, useTheme, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { tokens } from "../../theme";
import { customerInfo } from "../../data/customerInfo";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const columns = [
    {
      field: "id",
      headerName: "#",
      width: 90,
      headerAlign: "right",
      align: "right",
    },
    {
      field: "category",
      headerName: "گرووپ",
      headerAlign: "right",
      align: "right",
      flex: 1,
    },
    {
      field: "name",
      headerName: "ناو",
      headerAlign: "right",
      align: "right",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "ژ.مۆبایل",
      type: "number",
      headerAlign: "right",
      align: "right",
      flex: 1,
    },
    {
      field: "type",
      headerName: "مامەڵە",
      type: "text",
      headerAlign: "right",
      align: "right",
      flex: 1,
    },
    {
      field: "address",
      headerName: "ناونیشان",
      type: "text",
      headerAlign: "right",
      align: "right",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "گۆڕانکاری",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" justifyContent="center">
          <IconButton color="secondary" onClick={() => handleEdit(params.row.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit row with id:", id);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log("Delete row with id:", id);
    // Add your delete logic here
  };

  const handleRegisterClick = () => {
    navigate('/customer/register'); // Navigate to the register page
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
        <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={handleRegisterClick}>
          کڕیاری نوێ
        </Button>
        <Typography variant="h4" color="white">لیستی کڕیار</Typography>
      </Box>

      <Box
        m="8px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={customerInfo} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
