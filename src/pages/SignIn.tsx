import { SignIn as ClerkSignIn, useAuth } from '@clerk/clerk-react';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { clerkAppearance } from '../config/clerk';

export default function SignIn() {
  const { isSignedIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (isSignedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <AuthLayout
      title="Gun Club Scorer"
      subtitle={
        <p>
          Need an account?{' '}
          <Link to="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      }
    >
      <ClerkSignIn appearance={clerkAppearance} />
    </AuthLayout>
  );
}