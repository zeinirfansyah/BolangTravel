import { PropTypes } from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useStore from '../store/store';

const ProtectedRoute = ({ children, requiredData, redirectPath }) => {
  const store = useStore();
  const location = useLocation();

  const missingData = requiredData.filter((field) => !store.bookingData[field]);
  if (missingData.length > 0) {
    return <Navigate to={`${redirectPath}`} replace state={{ from: location, missingData }} />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requiredData: PropTypes.arrayOf(PropTypes.string).isRequired,
  redirectPath: PropTypes.string.isRequired
};

export default ProtectedRoute;