```jsx id="69zz0l"
import React, { useState, useEffect } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  // Fetch API Data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  // Form Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      formErrors.email = "Email is required";
    }

    if (password.length < 6) {
      formErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Registration Successful!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
          <p style={{ color: "red" }}>
            {errors.name}
          </p>
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <p style={{ color: "red" }}>
            {errors.email}
          </p>
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
          <p style={{ color: "red" }}>
            {errors.password}
          </p>
        </div>

        <button type="submit">
          Register
        </button>

      </form>

      <hr />

      <h2>Users Fetched from API</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
```
