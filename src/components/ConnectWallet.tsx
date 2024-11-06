import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { Button } from './Button';
import { WalletModal } from './WalletModal';

export const ConnectWallet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnect = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        variant="primary"
        icon={Wallet}
        onClick={handleConnect}
        className="shadow-lg shadow-accent/20 hover:shadow-accent/30"
      >
        Connect Wallet
      </Button>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};