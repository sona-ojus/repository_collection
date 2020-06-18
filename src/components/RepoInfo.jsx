import React from '../../node_modules/react'

class RepoInfo extends React.Component {
    render(){
        return(
            <div>
                <a href={this.props.info.url}>{this.props.info.name}</a>
                <div>{this.props.info.description}</div>
                <div>{this.props.info.updated_at}</div>  
                <hr />                          
            </div>
        )
    }
}

export default RepoInfo;