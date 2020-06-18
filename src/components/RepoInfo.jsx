import React from '../../node_modules/react'

class RepoInfo extends React.Component {
    constructor(props){
        super(props);
    }  

    render(){
        return(
            <div>
                <div>{this.props.info.name}</div>
                <div>{this.props.info.description}</div>
                <div>{this.props.info.updated_at}</div>  
                <hr />                          
            </div>
        )
    }
}

export default RepoInfo;