
export default function Login(props){
    async function handleSubmit(event){
        event.preventDefault();
        let user = {
            userName: event.target.username.value,
            password: event.target.password.value
        }
        
        let url = "http://localhost:3200/login";
        let options = {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        }

        let response = await fetch(url,options);
        let responseData = await response.json();
        console.log(responseData);

    }
    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                UserName: <input type="text" name="username" id="username" /><br />
                Password: <input type="password" name="password" id="password" /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}