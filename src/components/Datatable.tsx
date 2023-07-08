import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';



const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'brand', headerName: "Whiskey Brand", flex: 1},
    { field: 'model', headerName: "Whiskey Model", flex: 1},
    { field: 'year', headerName: "Year", flex: 1},
    { field: 'price', headerName: "Price", flex: 1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { whiskeyData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="d-flex flex-row">
            <div>
                <button
                    className="datatable-3 "
                    onClick={() => handleOpen()}
                >
                    Add New Whiskey
                </button>
            </div> 
            <Button onClick={handleOpen} className="datatable-1" >Update</Button>
            <Button onClick={deleteData} className="datatable-2" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 d-flex flex-column"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-light my-2 rounded">My Whiskeys</h2>
            <DataGrid 
            rows={whiskeyData} 
            columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable