import React from '../../node_modules/react'
import '../styles/NavBar.css'
import { UserConsumer } from './ContextProvider'
import RepoInfo from './RepoInfo'

class RightComponent extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    searchAction = () => {
        
    }

    render(){
        return(
            <div className="right-container">
                <div className="topnav">
                    <a href="#home">Overview</a>
                    <a className="active" href="#news">Repository</a>
                    <a href="#contact">Stars</a>
                    <a href="#about">Followers</a>
                    <a href="#about">Following</a>
                </div>

                <input type="text" onChange={this.searchAction}/>
                <select>
                    <option>Type</option>
                </select>
                <select>
                    <option>Language</option>
                </select>
                <button>New</button>

                <UserConsumer>
                    {
                        (data)=>{
                                return data.state.repo_info.map(info => 
                                     <RepoInfo info={info} />
                            )
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default RightComponent;