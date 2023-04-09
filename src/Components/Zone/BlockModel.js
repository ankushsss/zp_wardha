import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addZone,editZone } from '../../Services/Apis/Api';
import { useParams } from 'react-router-dom';


export default function BlockModel({action,dispatch,getDistrict,setAction,singleDistrict,setOpenAlert}) {
  const [open, setOpen] = React.useState(false);
  const [block, setBlock] = React.useState("")
  const {zoneId,zoneName} = useParams()
 console.log(zoneId,zoneName,"zoneId")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeDialog = ()=>{
    setAction({...action,open:false})
    setBlock("")
  }

   React.useEffect(() => {
console.log(singleDistrict)
    action.type=="edit"?setBlock(singleDistrict.blockName):setBlock("")
   }, [singleDistrict,action])
   async function addScheme(){
        try{
            var date = new Date();
            var components = [
                date.getYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            ];
            
            var id = `block${components.join("")}`
          
        var data = {blockUniqueId:singleDistrict.blockUniqueId,blockName:block}
        const response =  action.type=="edit"?await dispatch(editZone({data:data,id:zoneId})):await dispatch(addZone({blockName:block,blockUniqueId:id,zoneId:zoneId}))
        console.log(response)
        setOpenAlert({
            open:true,
            mssg:action.type=="edit"?"Block edit successfully":"Block add successfully",
            type:"success"
        })
        setAction({...action,open:false})
        getDistrict()
        }
        catch(err)
        {
            setOpenAlert({
                open:true,
                mssg:"Something Wrong",
                type:"Error"
            })
        }

  }

  return (
    <div>
   
      <Dialog open={action.open} onClose={()=>closeDialog()}>
        <DialogTitle>      
             {action.type == "add"? "Add Block":"Edit Block"}
        </DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            label="Block Name"
            type="text"
            value={block}
            onChange={(e)=>setBlock(e.target.value)}
            fullWidth
            variant="outlined"
          />
       
          
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>closeDialog()}>Cancel</Button>
          <Button onClick={()=>addScheme()}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
