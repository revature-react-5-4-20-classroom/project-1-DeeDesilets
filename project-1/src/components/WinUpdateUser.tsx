import React from 'react';
import User from '../models/User';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import {updateUser} from '../api/Employee1';
import { toast } from 'react-toastify';

interface IWinUpdateUserProps {
    history: any;
    loggedInUser: User;
    
}
interface IWinUpdateUserState {
            userId: number;

            username: string; 

	        password: string;

	        firstName: string;

	        lastName: string;

	        email: string;
        }



export default class WinUpdateUser extends React.Component <IWinUpdateUserProps,IWinUpdateUserState  > {

    constructor(props: IWinUpdateUserProps ) {

        super(props);

        this.state = {
            userId: 0,

            username: " ", 

	        password: " ",

	        firstName: " ",

	        lastName: " ",

	        email: " ",
        };

    }

    setUserId = (changeEvent: any) => {



        this.setState({
    
    
    
          userId: parseInt(changeEvent.currentTarget.value, 10),
    
    
    
        });
    
    };

    setUsername = (changeEvent: any) => {



        this.setState({
    
    
    
          username: changeEvent.currentTarget.value, 
    
    
    
        });
    
    };
     
    SetPassword= (changeEvent: any) => {



        this.setState({
    
    
    
          password: changeEvent.currentTarget.value, 
    
    
    
        });
    
    
    
      };
    
      setFirstName = (changeEvent: any) => {
  
  
  
        
          this.setState ({
            
            firstName: changeEvent.currentTarget.value,
    
    
    
        });
    
      };
    
    
     
      setLastName = (changeEvent: any) => {
  
  
  
        this.setState({
    
    
    
          lastName: changeEvent.currentTarget.value, 
    
    
    
        });
    
    
    
      };

      setEmail = (changeEvent: any) => {
  
  
  
        this.setState({
    
    
    
          email: changeEvent.currentTarget.value, 
    
    
    
        });
    
    
    
      };

    
      clearForm = () => {

        this.setState({
  
            username: " ", 

	        password: " ",

	        firstName: " ",

	        lastName: " ",

	        email: " ",
  
            
        })
  
    }
    
     updateAuser = async (submitEvent: any) =>  {

        submitEvent.preventDefault();

        
                try {
        
        
                   if(await updateUser(this.state.userId, this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email)) {
                   
                    toast(`employee updated successfully!`, {type: "success"});
                   }
    
                } catch (e) {
        
                    toast(e.message, {type:"error"});
        
                }
                this.clearForm();
            }
        
         
    
    
    
      
  






    render() {

        return (

            <Form onSubmit={this.updateAuser}>

<FormGroup>

<Label for="userId">Employee ID#</Label>

  <Input

    onChange={this.setUserId}

    value={this.state.userId}

    type="text"

    name="userId"

    id="userId"
    required

  />       
              
              </FormGroup>

              <FormGroup>

              <Label for="username">Username </Label>

                <Input

                  onChange={this.setUsername}

                  value={this.state.username}

                  type="text"

                  name="username"

                  id="username"
                  
                  
required
                  

                />

              </FormGroup>


              <FormGroup>

              <Label for="password">Password</Label>

                <Input

                  onChange={this.SetPassword}

                  value={this.state.password}

                  type="text"

                  name="password"

                  id="password"
                  
required
                />

              </FormGroup>

<FormGroup>

<Label for="firstname">First Name</Label>

  <Input

    onChange={this.setFirstName}

    value={this.state.firstName}

    type="text"

    name="firstname"

    id="firstname"

    Required

  />

</FormGroup>

<FormGroup>

              <Label for="lastname">Last Name</Label>

                <Input

                  onChange={this.setLastName}

                  value={this.state.lastName}

                  type="text"

                  name="lastname"

                  id="lastnamed"
                  
required
                />

              </FormGroup>

<FormGroup>

<Label for="email">Email Address</Label>

  <Input

    onChange={this.setEmail}

    value={this.state.email}

    type="text"

    name="email"

    id="email"

    Required

  />

</FormGroup>

              

              

             

              

              <Button type="submit">Submit Employee Update</Button>

              

            </Form>

        );

    }

}