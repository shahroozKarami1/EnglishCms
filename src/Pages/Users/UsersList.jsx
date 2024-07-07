import React, { useState } from 'react'
import "./UsersList.css"
import { listUser } from '../../Datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';

export default function UsersList() {


  let [userData, setUserData] = useState(listUser)
  function   removeHandler(userID) {
         setUserData(    userData.filter((filterItem)  =>  {
              return   filterItem.id  !=  userID
          })  )
}
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'User',
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <Link to="/"  className='dataGrid-avator__link'>
            <img src={params.row.avator} alt=""   className='dataGrid-avator' />
          {params.row.name}
          </Link>
          
        )
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      editable: false,
    },
    {
      field: 'transactions',
      headerName: 'Transactions',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: "action",
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
        <>

        <div className='dataGrid-actives'>
        <Link  to= {`/users/${params.row.id}`}><button   className='dataGrid-actives__edit'>Edit</button></Link>
        <DeleteIcon   className='dataGrid-actives__trash'   onClick  = {()  =>  removeHandler(params.row.id)}  />
        </div>
        </>


        )
      }
    },
  ];

  const rows = userData


  return (
    <>

    <div className='dataGrid-wrapper'>
      <DataGrid
        style={{
          backgroundColor:  "transparent"  ,  
          color :  "#fff"
        }}
        rows={rows}
        columns={columns}
          disableRowSelectionOnClick  
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          

        
      />

    </div>




    </>
  )
}
