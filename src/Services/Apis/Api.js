import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { async } from "q";
// import headers from '../../../mock/header'

export const loginUser = createAsyncThunk('LoginUser', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/login`, data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})
export const sendOtp = createAsyncThunk('otpSend', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/sendotp`, data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addUser = createAsyncThunk('addUser', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/register-user`, data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const verifyOtp = createAsyncThunk('verifyOtp', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/resetpassword/verifyOTP`, data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const departmantList = createAsyncThunk('departmantList', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/dept/getalldepartmentandscheme`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})
export const userList = createAsyncThunk('userList', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/user/getalluser`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const totalVilleges = createAsyncThunk('departmantList', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getallvillagecount`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const getAllDistrict = createAsyncThunk('getAllDistrict', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getalldistrict`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})
export const getAllVilleges = createAsyncThunk('getAllVilleges', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getallvillage`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const changeSurveyStatus = createAsyncThunk('changeSurveyStatus', async (id) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/survey/changesurveystatus/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})


export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_Test_Url}/api/user/deleteuser/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})
export const deleteSurvey = createAsyncThunk('deleteSurvey', async (id) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/survey/deletesurey/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }})
export const addAssignmentOfVillege = createAsyncThunk('assignVilleges', async ({id,data}) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/villageassignmentofsurveyor/${id}`,{Village:data}, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const removeAssignmentOfVillege = createAsyncThunk('removeAssignmentOfVillege', async ({id,data}) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/deselectvillagefromuser/${id}`,{villageIds:data}, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})
export const addAssignmentOfDepartmsnt = createAsyncThunk('assignDepartmant', async ({id,data}) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/deptassignmentofsurveyor/${id}`,{Departments:data}, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const removeAssignmentOfDepartmsnt = createAsyncThunk('removeassignDepartmant', async ({id,data}) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/user/deselectvillagefromuser/${id}`,{Departments:data}, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const zoneList = createAsyncThunk('zoneList', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getallzone`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const getTalukaList = createAsyncThunk('getTalukaList', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getalltaluka`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const villegeList = createAsyncThunk('villegeList', async ({zoneId,blockUniqueId}) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getallvillage/${zoneId}/${blockUniqueId}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const talukaList = createAsyncThunk('talukaList', async ({zoneId,blockUniqueId}) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getblockbyid/${zoneId}/${blockUniqueId}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const surveyList = createAsyncThunk('surveyList', async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/survey/getallsurveylist`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addDepartment = createAsyncThunk('addDepartment', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/dept/adddepartment`,data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addSurvey = createAsyncThunk('addSurvey', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/survey/addnewsurvey`,data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addZone = createAsyncThunk('addZone', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/zone/addnewzone`,data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addVillage = createAsyncThunk('addVillage', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/zone/addnewvillage/${data.zoneId}`,data.data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addTaluka = createAsyncThunk('addTaluka', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/zone/addnewtaluka/${data.zoneId}`,data.data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const addAndUpdateQuestion = createAsyncThunk('question', async (data) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/dept/updateoraddquestion/${data.departmentId}`,data.data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})



export const editDepartmant = createAsyncThunk('editDepartment', async ({data,id}) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/dept/updatedepartment/${id}`,data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const editZone = createAsyncThunk('editZone', async ({data,id}) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_Test_Url}/api/zone/updatezone/${id}`,data, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const deleteDepartmant = createAsyncThunk('deleteDepartmant', async (id) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_Test_Url}/api/dept/deletedepartmentbyid/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const schemeList = createAsyncThunk('schemeList', async (id) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/dept/getallschemebydepartment/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const zoneById = createAsyncThunk('zoneById', async (id) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_Test_Url}/api/zone/getzonebyid/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})

export const deleteZone = createAsyncThunk('deleteZone', async (id) => {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_Test_Url}/api/zone/deletezone/${id}`, { headers:{ 'content-Type' : 'application/json' }})
    console.log(res.data, "reducer")
    return res.data
  }
  catch (err) {
    return err 
  }
})