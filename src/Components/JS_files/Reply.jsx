
 
 const Reply =  ({icon}) =>(
    <>
     <span className="reply_header">
              <div className="reply_img_wrapper">
                  <img src={icon} alt="" className="reply_img" /></div>

                <p className="reply_span">
                  Reply
     </p>
            </span>
    </>
)

export default Reply;