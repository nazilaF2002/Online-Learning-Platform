import userProfile from '../../images/user_profile.png';
import { useState } from 'react';
import './profile.css'
export default function Profile(){
    const [imgSrc, setImgSrc] = useState(userProfile);
    function displayThumbnail(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImgSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return(
        <div className="container mt-5 py-5 ">
        <form action="">
            <div className="row">
                <div className="col-md-6  mb-5 mb-md-auto ">
                <img src={imgSrc} className=' mb-5 _IMG ' style={{width:'250px',height:'250px',borderRadius:'50%'}} alt="" /> <br />
                <div className="row">
                    <div className="col-12 photo_change">
                    <label htmlFor=""><h6 >Change Photo : </h6></label> <br/>
                    <input type="file"  onChange={displayThumbnail} name="profileImg" id="" />
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="mb-3">
                    <h3 className='mb-md-4 _title'>Student Full Name</h3>
                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                       {/* email password */}
                    <div className=" mb-5">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                     <input type="password" className="form-control" id="exampleInputPassword1"/>
                       </div>
                 </div> 
                 <button type="submit" className="  btn w-100 text-center " id='submit_btn_color' >Save Changes</button>
                </div>
            </div>
              
         </form> 
        </div>
    );
}