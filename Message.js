import { Card, CardContent, Typography } from '@material-ui/core'

import "./Message.css"
import React, { forwardRef } from 'react';



const Message = forwardRef(({message, username,unme} , ref) => {
    const isUser = username ===unme ;
    return (
        <div ref={ref} className={`message ${isUser &&'message_user'}`}>
            <Card className={isUser? "message_usercard":  "message_guestcard"}>
                <CardContent>
                    <Typography
                    color="white"
                    ariant="h5"
                     component="h2"
                    >
                  {!isUser &&    ` ${message.username || 'UNKNOWN_USER' } SAYS `}{message.message}
                    
                    </Typography>
                </CardContent>
            </Card>
            {/* <h2>{props.username}:{props.text}</h2> */}
            
        </div>
    )
    })

export default Message;
