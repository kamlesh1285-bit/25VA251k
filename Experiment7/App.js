```jsx
import React from "react";
import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Student Information System</h1>

      <Student
        name="Rahul Sharma"
        course="B.Tech CSE"
        marks="85"
      />

      <Student
        name="Priya Singh"
        course="BCA"
        marks="92"
      />

      <Student
        name="Amit Kumar"
        course="MCA"
        marks="78"
      />
    </div>
  );
}

export default App;
```

