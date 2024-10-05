import React from "react";
class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.user=props.user;
        this.state={
            count: 0,

        }
    }

render(){
    const {count}=this.state;
    return( <div>
    <h1>Here we have<b><i> {this.user}</i></b> from props</h1>
    <h1>Class based component</h1>
    <h3>name:satish</h3>
    <p>location:shiggaon</p>
    <p>experience:3+</p>
    <h1>{count}</h1>
    <button onClick={()=>{
        this.setState({count:this.state.count+1});
        console.log(count);
    }}>click me</button>
</div>)
}
}
export default UserClass;