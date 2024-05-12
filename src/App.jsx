import "./App.css";

function App() {
  return (
    <>
      <div className="div">
        <section className="form ">
          <div className="text">
            <h3>Your logo</h3>
            <h2>Login</h2>
            <form>
              <p>Email</p>
              <input type="email" placeholder="username@gmail.com" />
              <p>Password</p>
              <input type="password" placeholder="Password" />
              <h5>Forgot Password?</h5>
              <button>Sign in</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
