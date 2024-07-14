import React from 'react';
import ReactDOM from 'react-dom'; 


const CommentDetail = props  => {
    return (
        <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt='avatar' />
                </a>

                <div className='content'>
                    <a href='/' className='author'>
                        {props.authore}
                    </a>
                    <div className='metadata'>
                        <span className='date'>{props.timeAgo}</span>
                    </div>
                    <div className='text'>{props.content}</div>
                </div>
            </div>
    )
}

export default CommentDetail;