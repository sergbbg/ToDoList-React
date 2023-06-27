import { Component } from 'react';

import './add-form.css';





class AddForm extends Component {
   constructor(props){
       super(props);
       this.state = {
           name: ""
       }
   }

onValueChange = (e) =>{
   this.setState({
       [e.target.name] : e.target.value
   })
}

onSubmit = (e) => {
   e.preventDefault();
   if (this.state.name == null ) return;
   this.props.onAdd(this.state.name);
   this.setState({
       name: ''
   })
}
    

   render(){
       const{name}= this.state
   return (
       <div className="app-add-form">
           <h3 className="header-new-task">Добавьте новую задачу</h3>
           <form
               className="add-form d-flex"
                   onSubmit = {this.onSubmit}>
               <input type="text"
                   className="form-control new-post-label"
                   placeholder="Новая задача"
                   name="name" 
                   value={name}
                   
                   onChange={this.onValueChange}
                   />
               
               <button type="submit"
                       className="btn btn-outline-light">Добавить</button>
           </form>
       </div>
   )
}
}

export default AddForm;