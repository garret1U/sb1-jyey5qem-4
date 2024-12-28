import { UserButton as ClerkUserButton } from '@clerk/clerk-react';
import { Shield } from 'lucide-react';
import { useRole } from '../../hooks/useRole';
import { useNavigate } from 'react-router-dom';

export function UserButton() {
  const { role } = useRole();
  const navigate = useNavigate();
  const roleLabel = role === 'admin' ? 'Admin' : 'Member';

  return (
    <div className="flex flex-col items-end relative">
      <ClerkUserButton
        appearance={{
          elements: {
            avatarBox: 'w-10 h-10',
            userButtonPopoverCard: 'right-0 mt-2',
            userButtonPopoverActions: 'p-0 divide-y divide-gray-100 [&>*:first-child]:hidden',
            userButtonPopoverActionButton: 'w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50',
            userButtonPopoverActionButtonText: 'text-sm font-medium',
            userButtonPopoverFooter: 'hidden'
          }
        }}
        afterSignOutUrl="/sign-in"
        showName={true}
        afterSwitchSessionUrl="/profile"
        userProfileUrl="/profile"
      />
      <div className="absolute -top-1 -right-1 bg-indigo-600 rounded-full px-2 py-0.5 flex items-center">
        <Shield className="w-3 h-3 text-white mr-1" />
        <span className="text-xs font-medium text-white">{roleLabel}</span>
      </div>
    </div>
  );
}