import { SignUp as ClerkSignUp, useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { clerkAppearance } from '../config/clerk';

export default function SignUp() {
  const { isSignedIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (isSignedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle={
        <p>
          Already have an account?{' '}
          <Link to="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      }
    >
      <ClerkSignUp appearance={clerkAppearance} />
    </AuthLayout>
  );
}