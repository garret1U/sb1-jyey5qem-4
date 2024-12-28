import { UserProfile as ClerkUserProfile } from '@clerk/clerk-react';
import Layout from '../components/Layout';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { useRole } from '../hooks/useRole';

export default function UserProfilePage() {
  const { role } = useRole();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <ProfileHeader />
        <div className="mt-8 bg-white shadow rounded-lg">
          <ClerkUserProfile
            appearance={{
              elements: {
                rootBox: 'w-full p-6',
                card: 'w-full shadow-none p-0',
                navbar: 'hidden',
                pageScrollBox: 'p-0',
                profileSection: {
                  marginBottom: '2rem'
                },
                formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700',
                formFieldInput: 'rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
                profilePage: {
                  boxShadow: 'none',
                  width: '100%'
                }
              }
            }}
          />
        </div>
      </div>
    </Layout>
  );
}