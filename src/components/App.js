import React from '../../node_modules/react'
import '../styles/App.css'

import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <LeftComponent/>
                <RightComponent/>
            </>
        )
    }
}

export default App;

