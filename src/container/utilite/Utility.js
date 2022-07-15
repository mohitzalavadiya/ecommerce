export const isLogin = () => {
    const ddata =  localStorage.getItem('user');
    if(ddata === "1234"){
      return true
    }else{
      return false
    }
  }