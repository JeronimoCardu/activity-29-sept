import "./misComponentes.css";
import "./components/usercards.css";

export default function App() {
  const users = [
    { name: 'Rena Altube', email: 'rena.altube@example.com', age: 23, isOnline: true },
    { name: 'Ian Badino', email: 'ian.badino@example.com', age: 23, isOnline: false },
    { name: 'Walter Molino', email: 'walter.molino@example.com', age: 23, isOnline: true },
    { name: 'Jeronimo Cardu', email: 'jeronimo.cardu@example.com', age: 23, isOnline: false },
  ];
  return (
    <div>
      <div className="component-section">
        <h2>Propuesta 1: Tarjetas de Usuario</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {users.map((user) => (
            <UserCard key={user.email} {...user} />
            ))}
        </div>
      </div>

      <MyButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="medium"
        onClick=""
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="small"
        onClick=""
      />
      <MyButton
        text="Don't click me"
        variant="danger"
        size="large"
        disabled={true}
        onClick=""
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="primary"
        size="large"
        onClick=""
      />
      <MyButton
        disabled={false}
        text="Click me"
        variant="secondary"
        size="medium"
        onClick=""
      />
    </div>
  );
}

import CustomButton from "./components/CustomButton";
import UserProfile from "./components/UserProfile";
import Product from "./components/Product";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    console.log(count + 1);
    setCount(count + 1);
  }

  const usuarios = [
    {
      user: {
        id: 1,
        nombre: "María López",
        email: "maria.lopez@example.com",
        telefono: "+54 9 11 1234-5678",
      },
      showEmail: true,
      showPhone: false,
      layout: "horizontal",
    },
    {
      user: {
        id: 2,
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        telefono: "+54 9 11 8765-4321",
      },
      showEmail: false,
      showPhone: true,
      layout: "vertical",
    },
    {
      user: {
        id: 3,
        nombre: "Lucía Fernández",
        email: "lucia.fernandez@example.com",
        telefono: "+54 9 221 123-4567",
      },
      showEmail: true,
      showPhone: true,
      layout: "horizontal",
    },
    {
      user: {
        id: 4,
        nombre: "Carlos Gómez",
        email: "carlos.gomez@example.com",
        telefono: "+54 9 261 987-6543",
      },
      showEmail: false,
      showPhone: false,
      layout: "vertical",
    },
  ];

  return (
    <main>
      <div>
        <CustomButton
          disabled={false}
          text="Click me"
          variant="primary"
          size="medium"
          onClick={addCount}
        />
        <CustomButton
          disabled={false}
          text="Click me"
          variant="secondary"
          size="small"
          onClick={addCount}
        />
        <CustomButton
          text="Don't click me"
          variant="danger"
          size="large"
          disabled={true}
          onClick={addCount}
        />
        <CustomButton
          disabled={false}
          text="Click me"
          variant="primary"
          size="large"
          onClick={addCount}
        />
        <CustomButton
          disabled={false}
          text="Click me"
          variant="secondary"
          size="medium"
          onClick={addCount}
        />
      </div>
      <br />
      {usuarios.map((u) => (
        <UserProfile
          key={u.id}
          user={u.user}
          showEmail={u.showEmail}
          showPhone={u.showPhone}
          layout={u.layout}
        />
      ))}
      <div>
        <Product name="Silla" price={500} discount={10} category="Mueble" />
        <Product name="Milanesa" price={200} category="Alimento" />
      </div>
    </main>
  );
}
