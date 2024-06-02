import React from "react"
import '../styles/Card.css'
import IconMinus from "/utlis/images/icon-minus.svg"
import IconPlus from "/utlis/images/icon-plus.svg"
import replyIcon from '/utlis/images/icon-reply.svg'
import userPics from "/user_pics.jpg"

const Card = () =>{
    return <React.Fragment>
        <div className="user_post_card">

        <div className="user_details">
            <div className="user_pics_wrapper">
            <img src={userPics} alt="" className="user_pics" />
            </div>
            <h4 className="user_name">Salam Adigun</h4>
            <h4 className="post_time">1 month Ago</h4>
        </div>

        {/* post contents */}

        <p className="user_post_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at vel expedita voluptatem optio ab, minus maiores nobis veritatis magnam.        </p>
    {/* Footer */}
        <div className="card_footer">
            <span className="vote_counter">
                <button className="btn btn_upvote"aria-label="Up vote">
                  <img src={IconPlus} alt="upvote comment" className="img_upvote" />
                    </button>
                <p className="vote_count">12</p>
                <button className="btn btn_upvote" aria-label="Down Vote" >
                  <img src={IconMinus} alt="down vote comment" className="downvote" />
                </button>

            </span>
            <span className="reply_header">
              <div className="reply_img_wrapper">
                  <img src={replyIcon} alt="" className="reply_img" /></div>

                <p className="reply_span">
                  Reply
     </p>
            </span>
        </div>

        </div>
    </React.Fragment>

}

export default Card