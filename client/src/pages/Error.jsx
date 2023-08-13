import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import swr from '../assets/images/swr.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <img src={swr} alt="the url that is went wrong!!!!!!1" />
        <h3>the url that is went wrong!!!!!!!</h3>
        <Link to="/dashboard">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;