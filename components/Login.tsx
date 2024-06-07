const Login = () => {
    return(
        <div class = "login-container">
        <h2>Login</h2>
        <form action = "/login" method= "POST">
            <label for = "email">Email</label>
            <input type = "text" id= "email" name = "email" required />

            <label for = "password">Password</label>
            <input type = "text" id= "password" name = "password" required />

            <button type= "submit">Login</button>
            <p class = "register-link">
                Don't have an account? <a href = "/register">Register</a>
            </p>
        </form>
    </div>
    )
}

export default Login