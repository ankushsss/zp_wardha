import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Switch,Chip } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { zoneById,deleteDepartmant } from "../../Services/Apis/Api";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import Model from "./Departmant/Model";
import AlertMssg from "../Alert/Alert";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import DistrictModel from "./DistrictModel";
import { useParams } from "react-router-dom";
import BlockModel from "./BlockModel";

export default function Block() {
  const Handle = () => {
    "Hello";
  };
  const {zoneId} = useParams()
  const dispatch = useDispatch()
  const [District,setDistrict] = React.useState([])
  const [vill,setVill] = React.useState({})

  const [openDilog,setOpenDialog] = React.useState({
    open:false,
    type:"add"
  })
  const [openAlert,setOpenAlert] = React.useState({
    open:false,
    mssg:"add",
    type:"success"
  })
  const [singleDistrict,setSingleDistrict] = React.useState({})
  const navigate = useNavigate()
 

  const getDistrict = ()=>{
    dispatch(zoneById(zoneId)).then((res)=>{
        console.log(res.payload.result)
      setDistrict(res.payload.result.blocks)
      setVill(res.payload.result)
    })
  }
  React.useEffect(() => {
    getDistrict()
  }, [])
const editDepartmant = (singleDepartmant)=>{
  setSingleDistrict(singleDepartmant)
  setOpenDialog({...openDilog,open:true,type:"edit"})
  (singleDepartmant)
}
 function deleteSingleDepartmant (singleDepartmant){
  const response =  dispatch(deleteDepartmant(singleDepartmant._id)).then((res)=>{
    console.log(res)
    setOpenAlert({open:true,mssg:"departmant delesetSingleDistrictte successfully",type:"success"})
    getDistrict()
  }). catch((err)=>{
    setOpenAlert({open:true,mssg:"error",type:"error"})
  })
}
  const Action = ({row})=>{
    return(
      <div style={{display:"flex"}}>
           <div style={{color:"darkblue",cursor:"pointer",marginLeft:"5px"}} onClick={()=>editDepartmant(row.row)}><EditIcon/></div>
         {/*<div style={{color:"darkred",cursor:"pointer",marginLeft:"5px"}} onClick={()=>deleteSingleDepartmant(row.row)}><DeleteIcon/></div>*/}
          <div style={{color:"darkgreen",cursor:"pointer",marginLeft:"5px"}} onClick={()=>navigate(`/dashboard/villege/${zoneId}/${vill.districtName}/${row.row.blockUniqueId}`)}><VisibilityIcon/></div>
          
      </div>
    )
  }
  const columns = [
    { field: "blockUniqueId", headerName: "Block ID", width: 250 },
    {
      field: "blockName",
      headerName: "Block Name",
      width: 150,
      editable: false,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 200,
      renderCell:(row)=>{
          return(<Action row={row}/>)
      },
    }
  ];
  

  return (
    <div>
    <AppBar
    position="absolute"
    color="default"
    elevation={0}
    sx={{
      zIndex:"1",
      position: "relative",
      borderBottom: (t) => `1px solid ${t.palette.divider}`,
    }}
  >
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Block
      </Typography>
    </Toolbar>
  </AppBar>
    <div style={{display:"flex", height:"500px",marginTop:"20px",background:"white",justifyContent:"center",width:"100%",flexDirection:"column",alignItems:"center"}}>
      
    <div className="flex " style={{justifyContent:"left",width:"80%",marginBottom:"20px"}}><div style={{width:"90%"}}><Button  variant="contained" style={{background: "#6750A4"}} onClick={()=>setOpenDialog({...openDilog,open:true,type:"add"})}>Add Block</Button></div></div>
    <div style={{minWidth:"300px",maxWidth:"100%",width:"80%",background:"white"}}>
          
          <div style={{ height: 400, width: "100%", background: "white" }}>
            <DataGrid
              rows={District}
              columns={columns}
              pageSize={5}
              getRowId={(row) =>  row.blockUniqueId}
              onRowClick={Handle}
              rowsPerPageOptions={[5]}
            
            />
          </div>
      </div>
    </div>
        {/*<Model action={openDilog} getDistrict={getDistrict} setOpenAlert={setOpenAlert} singleDistrict={singleDistrict} dispatch={dispatch} setAction={setOpenDialog}/>*/}
        <BlockModel  action={openDilog} getDistrict={getDistrict} setOpenAlert={setOpenAlert} singleDistrict={singleDistrict} dispatch={dispatch} setAction={setOpenDialog}/>
        <AlertMssg  action={openAlert} setAction={setOpenAlert}/>
    </div>
  );
}
