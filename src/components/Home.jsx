/** @format */
import "../App.css";

const Home = ({ logout, user }) => {
  return (
    <div className="d-flex mt-5">
      <h1>Hello world</h1>
      <button onClick={logout}>Logout</button>
      <h2>{user?.email}</h2>
    </div>
  );
};

export default Home;
