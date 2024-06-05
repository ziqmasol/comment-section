import React from "react"
import '../styles/Card.css'
import IconMinus from "/utlis/images/icon-minus.svg"
import IconPlus from "/utlis/images/icon-plus.svg"
import replyIcon from '/utlis/images/icon-reply.svg'
import userPics from "/user_pics.jpg"
import Reply from "./Reply"
import { Voting } from "./Voting"

const Card = () =>{
    return <React.Fragment>
        <div className="user_post_card">
    <div className="user">

        <div className="user_details">
            <div className="user_pics_wrapper">
            <img src={userPics} alt="" className="user_pics" />
            </div>
            <h4 className="user_name">Salam Adigun</h4>
            <h4 className="post_time">1 month Ago</h4>

            <div className="user_reply display"><Reply icon={replyIcon} /></div>
        </div>

        {/* post contents */}

        <p className="user_post_content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam illo necessitatibus corrupti nulla. Nihil fugiat, illo natus consequuntur doloremque doloribus tenetur corrupti illum maiores. Tempora soluta inventore veritatis fugit facilis totam consequuntur ipsum magnam. Officiis libero molestiae illo deleniti nemo porro, quisquam minus exercitationem sint?     </p>
    </div>
    {/* Footer */}
        <div className="card_footer">

          <Voting iconMinus={IconMinus} iconPlus={IconPlus}  />
            <div className="desktop">

            <Reply icon={replyIcon} />
            </div>
            {/*  */}
        </div>

        </div>
    </React.Fragment>

}

export default Card