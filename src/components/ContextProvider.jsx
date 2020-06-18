import React from 'react';

var MyContext = React.createContext();

export class ContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_info:{},
            repo_info:[],
            original_repo:[]
        };
    }

    componentDidMount(){
        fetch('https://api.github.com/users/supreetsingh247')
        .then(response => response.json())
        .then(data => this.setState({user_info : data}));

        fetch('https://api.github.com/users/supreetsingh247/repos')
        .then(response => response.json())
        .then(data => this.setState({repo_info : data, original_repo: data}));
    }

    getLanguage = (e) => {
        var repo = this.state.original_repo.filter(info => {
            var xSub = info.name.substring(0, 3).toLowerCase()
            return info.name.toLowerCase().includes(e.target.value) || this.checkName(xSub, e.target.value)
        })
        this.setState({repo_info: repo});
    }

    checkName = (name, str) => {
        var pattern = str.split("").map((x)=>{
            return `(?=.*${x})`
        }).join("");
        var regex = new RegExp(`${pattern}`, "g")
        return name.match(regex);
    }

    render(){
        return(
            <div>
                <MyContext.Provider value={{
                    state: this.state,
                    getLanguage: this.getLanguage
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}

// export default ContextProvider;
export const UserConsumer = MyContext.Consumer;
