import React from 'react';

var MyContext = React.createContext();

export class ContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_info:{},
            repo_info:[]
        };
    }

    componentDidMount(){
        fetch('https://api.github.com/users/supreetsingh247')
        .then(response => response.json())
        .then(data => this.setState({user_info : data}));

        fetch('https://api.github.com/users/supreetsingh247/repos')
        .then(response => response.json())
        .then(data => this.setState({repo_info : data}));
    }

    render(){
        return(
            <div>
                <MyContext.Provider value={{
                    state: this.state
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}

// export default ContextProvider;
export const UserConsumer = MyContext.Consumer;
