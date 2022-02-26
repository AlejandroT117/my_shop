import { useState } from "react";

export const Form = () => {

  const [values, setValues] = useState({
    nombre: "",
    email: "",
  });


  const handleInputChange =(e)=>{
    console.log(e.target.name)
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <div className="container col-md-8 my-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleInputChange}
          className="form-control my-2"
          placeholder="Tu nombre"
          value={values.nombre}
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          className="form-control my-2"
          placeholder="Tu email"
          value={values.email}
        />
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </form>
    </div>
  );
};
