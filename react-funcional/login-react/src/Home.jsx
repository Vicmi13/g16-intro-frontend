import React from "react";

const Home = ({logout}) => {
  const fecha_actual = new Date().toLocaleDateString();
  
  // se deberá ocultar este componente ????? 🤡

  const handleLogout = () => {
     {/* STEP 2 MANDAR INFO DE COMP HIJO AL PADRE (función) */}
    logout()
  }

  return (
    <div style={{ border: "3px solid #f4f0f0", width: 250, height: 300, borderLeftColor: 'orange' }}>
      Usuario loggeado en el día de 🤡 {fecha_actual}

      {/* STEP 1 DEFINIR EVENTO PARA CERRAR SESION */}
      <button onClick={handleLogout}> Cerrar sesión </button> 

    </div>
  );
};

export default Home;
