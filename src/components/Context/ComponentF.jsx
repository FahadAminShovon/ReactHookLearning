import React from 'react';
import { UserContext, ChannelContext } from '../../App';


const ComponentF = () => {
    return ( 
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                        <>
                                            <div>channel name: {channel}</div>
                                            <div>subscriber name: {user}</div>

                                        </>
                                        ) 
                                    }
                                }
                            </ChannelContext.Consumer>
                        ) 
                    }
                }
            </UserContext.Consumer>
            Component F
        </div>
     );
}
 
export default ComponentF;