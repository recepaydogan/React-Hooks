import "./App.css";
import useForm from "./useForm";

function App() {
  const { values, handleChange, handleFormSubmit } = useForm({
    name: "",
    lastName: "",
    email: "",
  });
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button> Submit</button>
      </form>
    </>
  );
}

export default App;
