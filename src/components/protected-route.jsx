/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname, search } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    const returnTo = pathname + search;
    const params = new URLSearchParams();
    params.set("sign-in", "true");
    params.set("redirect_url", returnTo);
    return <Navigate to={`/?${params.toString()}`} replace />;
  }

  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== "/onboarding"
  )
    return <Navigate to="/onboarding" />;

  return children;
};

export default ProtectedRoute;
