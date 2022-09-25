import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addDataAction } from '../../redux/action/AdminAction';

function Admin(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [deldata, setDeldata] = useState([]);
    const [alertopen, setAlertOpen] = React.useState(false);
    const [update, setUpdate] = useState(false)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
       formik.resetForm()
       setUpdate(false)
    };

    const handlealertOpen = () => {
        setAlertOpen(true);
    };

    const handlealertClose = () => {
        setAlertOpen(false);
      Form.resetForm()
    };

    let schema = yup.object().shape({
        name: yup.string().required("required"),
        price: yup.number().required("required").positive().integer(),
        size: yup.number().required("required"),
        quenity: yup.number().required("required")
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            size: '',
            quenity: ''
        },
        validationSchema: schema,
        onSubmit: (values, action) => {
            action.resetForm();
            if(update){
                newdata(values)
            }else{
                storevalue(values)
            }
            handleClose()
            loaddata()
        },
    });
    const { handleBlur, handleChange, handleSubmit, errors, touched, values } = formik

    const storevalue = (values) => {
        const localdata = JSON.parse(localStorage.getItem('product'))

        let id = Math.floor(Math.random() * 1000)
        const withid = {
            id: id,
            ...values
        }
        if (localdata === null) {
            localStorage.setItem('product', JSON.stringify([withid]))
        } else {
            localdata.push(withid);
            localStorage.setItem('product', JSON.stringify(localdata))
        }
    }

    const loaddata = () => {
        const localdata = JSON.parse(localStorage.getItem('product'))

        if (localdata !== null) {
            setData(localdata)
        }
    }
    const deletefun = (params) => {
        const localdata = JSON.parse(localStorage.getItem('product'))

        const ddata = localdata.filter((f) => f.id !== deldata)
        setData(ddata)
        localStorage.setItem('product', JSON.stringify(ddata))
        handlealertClose()
    }
    const delsure = () =>{
        handlealertOpen();
    }
    const updatedata = (params) => {
        handleClickOpen();
        setUpdate(true)
        formik.setValues(params.row)
    }
    const newdata = (values) => {
        const localdata = JSON.parse(localStorage.getItem('product'))

        const updata = localdata.map((u) => {
            if(u.id === values.id){
                return values;
            }else{
                return u;
            }
        })

        localStorage.setItem('product', JSON.stringify(updata))

        loaddata()
        setUpdate(false)
        
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'price', headerName: 'Price', width: 170 },
        { field: 'size', headerName: 'Size', width: 170 },
        { field: 'quenity', headerName: 'Quenity', width: 170 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
                <>
                <IconButton aria-label="edit" onClick={() => updatedata(params)}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => {delsure(); setDeldata(params.id)}}>
                    <DeleteIcon />
                </IconButton>
                </>
                
            )
        },

    ];
    const admin = useSelector((state)=> state.admin)
    useEffect(() => {
       dispatch(addDataAction())
    }, [])

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Our Product
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Our Product</DialogTitle>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>
                            <TextField
                                margin="dense"
                                name="name"
                                label="Product Name"
                                type="name"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}

                            />
                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                            <TextField
                                margin="dense"
                                name="price"
                                label="Price"
                                type="name"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                            />
                            <p>{errors.price && touched.price ? errors.price : ''}</p>
                            <TextField
                                margin="dense"
                                name="size"
                                label="Size"
                                type="name"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.size}
                            />
                            <p>{errors.size && touched.size ? errors.size : ''}</p>
                            <TextField
                                margin="dense"
                                name="quenity"
                                label="Quenity"
                                type="name"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.quenity}
                            />
                            <p>{errors.quenity && touched.quenity ? errors.quenity : ''}</p>

                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                {
                                    update ?
                                <Button type='submit'>Update</Button>
                                :
                                <Button type='submit'>Submit</Button>
                                }
                            </DialogActions>
                        </DialogContent>
                    </Form>
                </Formik>
            </Dialog>


            <div>
                <Dialog
                    open={alertopen}
                    onClose={handlealertClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are You Sure?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={handlealertClose}>No</Button>
                        <Button onClick={deletefun} autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Admin;