import BlockiesSvg from 'blockies-react-svg';

interface ProfileMenuProps {
  address: string | undefined;
  avatarUrl: string | undefined;
  disconnect: () => void;
}

export const ProfileMenu = ({
  address,
  avatarUrl,
  disconnect,
}: ProfileMenuProps) => {
  const formatAddress = (address: string | undefined): string => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 6)}`;
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border-solid border-2 border-light-nav-text dark:border-dark-nav-text">
          {avatarUrl ? (
            <img alt="Avatar" src={avatarUrl} />
          ) : (
            <BlockiesSvg address={address ? address : ''} />
          )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-lg w-52 text-light-text"
      >
        <li>
          <a>{formatAddress(address)}</a>
        </li>
        <li>
          <a role="button" onClick={() => disconnect()}>
            Disconnect
          </a>
        </li>
      </ul>
    </div>
  );
};
