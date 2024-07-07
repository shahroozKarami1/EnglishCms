import React, { useState } from 'react'
import "./Products.css"
import { listProducts } from '../../Datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';

export default function UsersList() {


  let [productData, setProductData] = useState(listProducts)
  function removeHandler(productID) {
    setProductData(productData.filter((filterItem) => {
      return filterItem.id != productID
    }))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      editable: false,
      renderCell: (params) => {
        return (
          <Link to="/" className='dataGrid-avator__link'>
            <img src={params.row.poster} alt="" className='dataGrid-avator' />
            {params.row.title}
          </Link>

        )
      }
    },

    {
      field: 'price',
      headerName: 'Price',
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
              <Link to={`/product/${params.row.id}`}><button className='dataGrid-actives__edit'>Edit</button></Link>
              <DeleteIcon className='dataGrid-actives__trash' onClick={() => removeHandler(params.row.id)} />
            </div>
          </>


        )
      }
    },
  ];

  const rows = productData


  return (
    <>

      <div className='dataGrid-wrapper'>
        <DataGrid
          style={{
            backgroundColor: "transparent",
            color: "#fff"
          }}
          rows={rows}
          columns={columns}
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
