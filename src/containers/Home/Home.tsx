import { useCheckSession } from "../../utils/customHooks";
import NavBar from "../../components/NavBar";

const Home = () => {
  useCheckSession();

  return (
    <div>
      <NavBar />
      <p>Home</p>
    </div>
  );
};

export default Home;
