import IconPlus from "/utlis/images/icon-plus.svg"


export const Voting  = ({iconPlus,iconMinus}) => (
    <>
     <span className="vote_counter">
                <button className="btn btn_upvote"aria-label="Up vote">
                  <img src={iconPlus} alt="upvote comment" className="img_upvote" />
                    </button>
                <p className="vote_count">12</p>
                <button className="btn btn_upvote" aria-label="Down Vote" >
                  <img src={iconMinus} alt="down vote comment" className="downvote" />
                </button>

            </span>
           

    </>
)