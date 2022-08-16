import React from 'react';
import Navbar from './components/Navbar';
import Badge from './components/Badge';
import BadgeForm from './components/BadgeForm';


const props = {
  firstName: 'Octavio',
  lastName: 'Lopez',
  jobTitle: 'Frontend',
  username: 'octavio123'
}

class App extends React.Component {
  state = {
    form: { 
      firstName: "",
      lastName: ""
    }
  }

  handleChange = e => {
 
    //Modificamos el estado
    this.setState({
      form: { 
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  
  render(){
    console.log(this.state)
    return (
      <>
        <Navbar/>
        <Badge data={props} state={this.state}/>
        <BadgeForm handleChange={this.handleChange}/>
      </>
    );
  }
  
}

export default App;
