import './RigesterForm.css'
export default function LoginForm(){
    return(
      <div className="p-5 mt-5" >
        <div className="container-fluied w-75  w-md-50 mx-auto border border_color p-2 pb-md-5 px-md-5 pt-md-4 rounded">
        <h3 className="text-center mb-4 _teacherName" style={{color:'rgb(68, 90, 74)'}} >
           Welcome Back !
        </h3>
    <form>
    {/* email */}
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    {/* email password */}
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="submit" className="  btn w-100 text-center" id='submit_btn_color' >Submit</button>
  </form>
  </div> 
  </div>
    );
}