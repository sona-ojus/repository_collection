import React from '../../node_modules/react'
import '../styles/NavBar.css'
import { UserConsumer } from './ContextProvider'
import RepoInfo from './RepoInfo'

class RightComponent extends React.Component {
    render(){
        return(
            <UserConsumer>
                    {
                        (data)=>{
                            return(
                                <div className="right-container">                
                                    <div className="topnav">
                                        <a href="#Overview">Overview</a>
                                        <a className="active" href="">Repository</a>
                                        <a href="#Stars">Stars</a>
                                        <a href="#Followers">Followers</a>
                                        <a href="#Following">Following</a>
                                    </div>

                                    <input type="text" onChange={data.getSearchResults}/>
                                    <select>
                                        <option>Type</option>
                                    </select>
                                    <select onChange={data.getLanguageResults}>
                                    <option>Select Language</option>
                                    { data.state.languages.map(lang => {
                                            if(lang !== undefined)
                                                return <option>{lang}</option>
                                        })    
                                    }                                    
                                    </select>
                                    <button>New</button>

                                    { data.state.repo_info.map(info => <RepoInfo info={info} /> )}
                                        
                                    </div>   
                            )
                        }
                    }
                </UserConsumer>            
        )
    }
}

export default RightComponent;