import { Outlet, Link } from "react-router-dom";

function User() {
  return (
    <>
      <h1>This is the User Component</h1>
      <ul>
        <li><Link to="orders">User Orders</Link></li>
        <li><Link to="profile">User Profile</Link></li>
      </ul>
      <Outlet /> {/* Renders nested routes */}
    </>
  );
}

export function Orders() {
  return (
    <>
      <h2>This is the User Orders Component</h2>
    </>
  );
}

export function Profile() {
  return (
    <>
      <h2>This is the User Profile Component</h2>
    </>
  );
}

export default User;
