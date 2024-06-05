import React from "react"
import '../styles/Form.css'
import userPics2 from '/user_pics2.jpeg'

export const Form = () =><React.Fragment>
    <form action="" className="user_form">
        <textarea cols={10}  name="textarea" placeholder="Enter comments here" id="user_input" />
        {/* sender */}
        <div className="form_send">
            <div className="img_wrapper">
            <img src={userPics2} alt="user picture" className="user_pics" />
            </div>
        <button type="submit" className="btn form_btn">Submit</button>
        </div>
    </form>

</React.Fragment>