import React from '../../node_modules/react'
import { UserConsumer } from './ContextProvider'

class LeftComponent extends React.Component {
    render(){
        return(
            <div className="left-container">
                <UserConsumer>
                    {(data)=>{
                        return (
                            <>
                                <img alt="prof_pic" src={data.state.user_info.avatar_url} />
                                <h2>{data.state.user_info.name}</h2>
                                <h3>{data.state.user_info.login}</h3>
                                <div>{data.state.user_info.bio}</div>
                                <button>Edit Bio</button>
                                <div>{data.state.user_info.company}</div>
                                <div>{data.state.user_info.location}</div>
                            </>
                        )
                    }}
                </UserConsumer>
            </div>
        );
    }
}

export default LeftComponent;