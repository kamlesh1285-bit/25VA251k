```jsx
import React from "react";

function Student(props) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      borderRadius: "5px"
    }}>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

export default Student;
```
