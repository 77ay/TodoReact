import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'',desTask:''}

   handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div>
               <input type="hidden" name="id" value={this.props.id} /><br/>
               Todo<input type="text" name="task" onChange={this.handleChange} />
               Describe<input type="text" name="desTask" onChange={this.handleChange} /> <br/>
               <button onClick={() => this.props.addTask(this.state.task,this.state.desTask)}>Add Describe </button>
           </div>
       )
   }
}

export default InputTask