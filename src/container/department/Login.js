import React, { useRef, useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Login(props) {

    const [login, setLogin] =useState("Login")
    const [reset, setReset] = useState(false)


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
                  <form>
                    {
                        reset ?
                        null
                        :
                        login === "Login" ?
                        null 
                        :
                        <div className="form-outline mb-4">
                      <input  type="name" id="form2Example11" className="form-control" placeholder=" Name" />
                    </div>
                    }
                    {
                        reset ?
                        <div className="form-outline mb-4">
                      <input  type="email" id="form2Example11" className="form-control" placeholder=" email address" />
                    </div>
                    :
                    <>
                    
                    <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" className="form-control" placeholder=" email address" />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" className="form-control" placeholder="password" />
                  </div>
                  </>
                    }
                    
                    {
                        reset ?
                        <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">done</button>
                    </div>
                    :
                        login === "Login" ?
                        <div className="text-center pt-1 pb-1">
                      <button  className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">login</button>
                    </div>
                    :
                    <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">signup</button>
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
                    
                  </form>
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