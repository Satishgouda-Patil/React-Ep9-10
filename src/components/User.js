const User=(props)=>{
    const {user} = props;
    console.log(user);
    return <div>
         <h1>Here we have <b><i>{user}</i></b> from props</h1>
        <h1>function based component</h1>
        <h3>name:satish</h3>
        <p>location:shiggaon</p>
        <p>experience:3+</p>
    </div>
}

export default User;