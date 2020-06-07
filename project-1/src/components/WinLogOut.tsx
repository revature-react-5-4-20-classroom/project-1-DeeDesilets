
import React from 'react';





interface IWinLogOutProps {
  logoutUser: () => void;
    history: any; 
  
}
export default class WinLogOut extends React.Component <IWinLogOutProps, any> {
  
    
    componentDidMount()  {
        this.props.logoutUser();
    }  

    componentWillUnmount() {
        this.props.history.push('/home'); 
    }     
        
    
    
         
    render() {
        
        return (
            <div>
                <h1>Thanks for stopping by.</h1>
                <h1>Come again soon.</h1>
                <h1> Good Bye. </h1>
            

               

            
                
            
            
           
            </div>
        );
    }

    
}

