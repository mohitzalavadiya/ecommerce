import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { Formik, useFormik, Form } from 'formik';

function Login(props) {

    const [login, setLogin] =useState("Login")
    const [reset, setReset] = useState(false)

    let schemaobj, initValues;

    if(login === 'Login' && !reset){
      schemaobj = {
        email: yup.string().required("please enter your email").email("please enter valid email"),
        password: yup.string().min(6, "your password to short").required("plaese enter password")
      }
      initValues = {
        email: '',
        password: ''
      }
    }else if(login === 'signup'  && !reset){
      schemaobj = {
        name : yup.string().required("please enter your name"),
        email: yup.string().required("please enter your email").email("please enter valid email"),
        password: yup.string().min(6, "your password to short").required("plaese enter password")
      }
      initValues = {
        name :'',
        email: '',
        password: ''
      }
    }else{
      schemaobj = {
        email: yup.string().required("please enter your email").email("please enter valid email")
      }
      initValues = {
        email: ''
      }
    }

  const  LocalStor = (values) => {

    const localdata = JSON.parse(localStorage.getItem('user'))

    if(localdata === null){
      localStorage.setItem('user', JSON.stringify([values]))
    }else{
      localdata.push(values)
      localStorage.setItem('user', JSON.stringify(localdata))
    }
    }


    let schema = yup.object().shape(schemaobj);

      const formikobj = useFormik({
        initialValues: initValues,
        validationSchema : schema,
        enableReinitialize:true,
        onSubmit: (values, action) => {
          alert(JSON.stringify(values, null, 2));
          action.resetForm()
          LocalStor(values);
        },
      });

      const{ handleChange, handleSubmit, errors, handleBlur, touched, values} = formikobj


    return (
       <div>
  <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-6">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{width: 185}} alt="logo" />
                    {
                        reset ?
                        <h4 className="mt-1 mb-5 pb-1">forget password</h4>
                        :
                        login === "Login" ?
                        <h4 className="mt-1 mb-5 pb-1">Login</h4>
                        :
                        <h4 className="mt-1 mb-5 pb-1">signup</h4>
                    }
                   
                  </div>
                  <Formik values={formikobj}>
                  <Form onSubmit={handleSubmit}>
                    {
                        reset ?
                        null
                        :
                        login === "Login" ?
                        null 
                        :
                        <div className="form-outline mb-4">
                      <input  type="name" id="form2Example11" className="form-control" name='name' placeholder=" Name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                      <p className='text-danger'>{errors.name && touched.name ? errors.name : ''}</p>
                    </div>
                    }
                    
                       
                        <div className="form-outline mb-4">
                      <input  type="email" id="form2Example11" name='email' className="form-control" onChange={handleChange} onBlur={handleBlur} placeholder=" email address" value={values.email} />
                      <p className='text-danger'>{errors.email && touched.email ? errors.email : ''}</p>
                    </div>                                                  
                    {
                      reset ?
                      null
                      :
                      <div className="form-outline mb-4">
                      <input type="password" id="form2Example22" className="form-control" name='password' onChange={handleChange} onBlur={handleBlur} placeholder="password"  value={values.password} />
                      <p className='text-danger'>{errors.password && touched.password ? errors.password : ''}</p>
                    </div>
                    }
                   
                    
                    {
                        reset ?
                        <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">done</button>
                    </div>
                    :
                        login === "Login" ?
                        <div className="text-center pt-1 pb-1">
                      <button  className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">login</button>
                    </div>
                    :
                    <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">signup</button>
                    </div>
                    }
                    
                    
                    <button  type="button" className='border-0 '   onClick={() => {setReset(true)}} >Forgot password?</button>
                    {
                        login === "Login" ?     
                        <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={() => {setLogin("signup"); setReset(false)}}>Create new</button>
                    </div>
                    :
                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">already have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={() => {setLogin("Login");  setReset(false)}}>Login</button>
                    </div>
                    }
                    
                  </Form>
                 </Formik>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
}

export default Login;