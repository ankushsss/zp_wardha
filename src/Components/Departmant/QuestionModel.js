import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addDepartment,addAndUpdateQuestion,editDepartmant } from '../../Services/Apis/Api';
import { useParams } from 'react-router-dom';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

export default function QuestionModel({action,dispatch,getDepartmentList,setAction,singleDepartmantInformation,setOpenAlert}) {
  const [open, setOpen] = React.useState(false);
  const [questionData, setQuestionData] = React.useState({
    question:"",
  })
  const [numberOfQuestion, setNumberOfQuestion] = React.useState(0)
  const [numberOfQuestionArray, setNumberOfQuestionArray] = React.useState([])


  const [range, setRange] = React.useState({
    startRange:'',
    endRange:''
  })
 
  const handelChangeOfQuestionNumber = (e)=>{
       
  }

  const {departmentId,departmentName,schemeId} = useParams()
 console.log(departmentId,departmentName,"departmentId")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeDialog = ()=>{
    setAction({...action,open:false})
    setQuestionData("")
  }

   React.useEffect(() => {
    action.type=="sedit"?setQuestionData(singleDepartmantInformation.deptName):setQuestionData("")
   }, [singleDepartmantInformation,action])
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
            
            var id = `question${components.join("")}`
          let rangeArray = []
          for(let rangeSet = parseInt(range.startRange);rangeSet <= parseInt(range.endRange);rangeSet++)
          {
            rangeArray.push(rangeSet)
          }
          console.log(singleDepartmantInformation,"singleDepartmantInformation")
          let sendQuestionData =action.type=="edit"?{
            question:questionData.question,
            schemeId:schemeId,
            questionId:singleDepartmantInformation._id,
            range:rangeArray
          } :{
            question:questionData.question,
            schemeId:schemeId,
           
            range:rangeArray
          }
        var data = {schemeId:singleDepartmantInformation.schemeId,questionId:id,schemeName:questionData}
        const response =  action.type=="edit"?await dispatch(addAndUpdateQuestion({data:sendQuestionData,departmentId:departmentId})):await dispatch(addAndUpdateQuestion({data:sendQuestionData,departmentId:departmentId}))
        console.log(response)
        setOpenAlert({
            open:true,
            mssg:action.type=="edit"?"Question edit successfully":"Question add successfully",
            type:"success"
        })
        setAction({...action,open:false})
        getDepartmentList()
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
      <Dialog open={action.open} style={{width:"70%",height:"100%"}} onClose={()=>closeDialog()}>
        <DialogTitle>      
             {action.type == "add"? "Add Question":"Edit Question"}
        </DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            type="text"
            value={questionData.question}
            onChange={(e)=>setQuestionData({question:e.target.value})}
            fullWidth
            variant="outlined"
            rows={5}
            multiline
          />
{/*<Box>
                <TextField
                autoFocus
                margin="dense"
                
                label="Start Range"
                type="text"
                value={range.startRange}
                
                onChange={(e)=>setRange({...range,startRange:e.target.value})}
                variant="outlined"
                
                />
                <TextField
                autoFocus
                margin="dense"
                value={range.endRange}
                
                label="End Range"
                type="text"
               
                onChange={(e)=>setRange({...range,endRange:e.target.value})}
                style={{marginLeft:"10px"}}
                variant="outlined"
                
                />
  </Box>*/}
  
      <FormControl style={{marginTop:"20px"}}fullWidth>
      <InputLabel id="demo-simple-select-label">Number Of Button</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={numberOfQuestion}
        label="Number Of Button"
        onChange={(e)=>{
          setNumberOfQuestion(e.target.value)
          for(let number =0; number<e.target.value;number++ )
          {
            numberOfQuestionArray.push(number)
          }
          setNumberOfQuestionArray(numberOfQuestionArray)
        }}
      >
         {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((value)=>{
          return(
              <MenuItem value={value}>{value}</MenuItem>

          )
         })}
      </Select>
      

    </FormControl>
    {numberOfQuestionArray.map((res)=>{
      return(<Grid  style={{textAlign:"center",marginTop:"20px"}}>
      <TextField placeholder='name' width="50%"/>
      <TextField placeholder='value' width="50%" style={{marginLeft:"20px"}}/>


   </Grid>)
    })}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>closeDialog()}>Cancel</Button>
          <Button onClick={()=>addScheme()}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
