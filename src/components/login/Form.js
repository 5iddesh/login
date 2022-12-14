export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("succesfull");
    // let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let userData = { email, password };

     e.target.email.value = e.target.password.value = "";
    alert("login successfull!");
    console.log(userData);
    const response = fetch("http://localhost:3000/api/auth/login",{
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
    console.warn(response);
  };
  return (
    <form
      className="container"
      onSubmit={(e) => handleSubmit(e)}
      style={{ marginTop: "30px" }}
    >
      <h1>Welcome to Jammy</h1>

      <label htmlFor="email">
        Email
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter your Email here"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </label>
      <div className="btn-parent">
        <button type="submit" className="submit-btn">
          Login
        </button>
      </div>
    </form>
  );
}
