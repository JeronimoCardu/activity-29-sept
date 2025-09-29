export default function UserProfile(props) {
  return (
    <div className={`user-profile user-info tag ${props.layout}`}>
      <h1>{props.user.nombre}</h1>
      <p>email: {props.showEmail ? props.user.email : "*******@*****"}</p>
      <p>phone: {props.showPhone ? props.user.telefono : "*******"}</p>
    </div>
  );
}
