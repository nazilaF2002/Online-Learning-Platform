import './RigesterForm.css';
export default function RegisterForm(){
    return(
      <div className='p-5 mt-5'>
    <div className=" w-75  w-md-50 mx-auto border border_color p-2 pb-md-5 px-md-5 pt-md-4 rounded">
        <h3 className="text-center mb-4 _teacherName" style={{color:'rgb(68, 90, 74)'}} >
            Register and start learning !
        </h3>
    <form>
    <div className="mb-3">
      <label for="Full_Name" className="form-label">Full Name</label>
      <input type="text" name="fullName" className="form-control" id="Full_Name"/>
    </div>
    {/* gender */}
    <div className="mb-3">
    <label  className="form-label">Gender</label><br />
        <div className="form-group border rounded p-2 ">
      <div className="form-check">
      <input type="radio" className="form-check-input" name="gender" value="femal" />
      <label htmlFor="">Female</label>
      </div>
      <div className="form-check">
      <input type="radio" className="form-check-input" name="gender" value="male"/>
      <label htmlFor="">Male</label>
      </div>
       </div>
    </div>
    {/* courses */}
    <div className="mb-3">
    <label  className="form-label">You can select more than one course</label><br />
        <div className="form-group border rounded p-2 ">
      <div className="form-check">
      <input type="checkbox" className="form-check-input" name="FrontEnd" value="FrontEnd" />
      <label htmlFor="">Front-End</label>
      </div>
      <div className="form-check">
      <input type="checkbox" className="form-check-input" name="BackEnd" value="BackEnd" />
      <label htmlFor="">Back-End</label>
      </div>
      <div className="form-check">
      <input type="checkbox" className="form-check-input" name="uiux" value="uiux" />
      <label htmlFor="">UI & UX</label>
      </div>
      <div className="form-check">
      <input type="checkbox" className="form-check-input" name="graphic" value="graphic" />
      <label htmlFor="">Graphic</label>
      </div>
       </div>
    </div>
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
    )
}