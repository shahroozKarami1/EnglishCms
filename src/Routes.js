import Home from "./Pages/Home/Home"
import NewUser from "./Pages/NewUser/NewUser"
import Products from "./Pages/Products/Products"
import UsersList from "./Pages/Users/UsersList"
import ProDetails from './Pages/ProDetails/ProDetails.jsx'
import  Report  from  "./Pages/Report/Report"
import Mail from "./Pages/Mail/Mail"
let  Routes  =  [
    {path  : "/"    ,  element  :  <Home></Home>}  ,  
    {path  : "/newUser"    ,  element  :  <NewUser></NewUser>}  ,  
    {path  : "/products"    ,  element  :  <Products></Products>}  ,  
    {path  : "/users"    ,  element  :  <UsersList></UsersList>}  ,  
    {path  : "/product/:productID"    ,  element  :  <ProDetails></ProDetails>}  ,  
    {path  : "/reports"    ,  element  :  <Report></Report>}  ,  
    {path  : "/mail"    ,  element  :  <Mail></Mail>}  ,  

]


export  default  Routes 