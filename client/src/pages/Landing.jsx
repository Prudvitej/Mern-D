import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/bg.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Bunny creations" className="logo" width='100px'/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus eius maiores in consectetur expedita sapiente deleniti?
            Fugit aliquid quae repellat sit sequi ipsa quas quos praesentium,
            quibusdam temporibus amet perferendis!
          </p>
          <Link to="/register" className="btn register-link">
            Register 
          </Link>
          <Link to="/login" className="btn">
            Login / Demo user
          </Link>
        </div>
        <img src={main} alt="job" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
