import "./App.css";
import MyButton from "./components/MyButton";
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
