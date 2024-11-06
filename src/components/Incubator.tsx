import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { Button } from './Button';

export const Incubator = () => {
  const [usdtAmount, setUsdtAmount] = useState<number>(100);
  const rewardRate = 2.5; // CTE per USDT
  const expectedRewards = usdtAmount * rewardRate;
  const totalDeposited = 156789; // This would come from your backend/blockchain
  const userTotalDeposited = 1250; // This would come from user's wallet/blockchain data
  const goalAmount = 1000000; // 1M USDT goal
  const progressPercentage = (totalDeposited / goalAmount) * 100;

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 text-white relative overflow-hidden border border-white/10">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 gradient-text">CTE Incubator</h2>
          <p className="text-gray-400">Participate in the initial token distribution</p>
        </div>

        <div className="space-y-6">
          {/* Total Deposits Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-sm text-primary-200 mb-1">Total USDT Deposited</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-accent">{totalDeposited.toLocaleString()}</span>
                <span className="text-sm text-primary-400">USDT</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-sm text-primary-200 mb-1">Your Total Deposits</div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-accent">{userTotalDeposited.toLocaleString()}</span>
                <span className="text-sm text-primary-400">USDT</span>
              </div>
            </div>
          </div>

          {/* Progress Bar with Counter */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm text-primary-200">
              <span>Progress</span>
              <span className="font-medium">
                {totalDeposited.toLocaleString()}/{goalAmount.toLocaleString()} USDT
              </span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent/60"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Deposit Interface */}
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-1">
              <div className="relative">
                <input
                  type="number"
                  value={usdtAmount}
                  onChange={(e) => setUsdtAmount(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter USDT amount"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  USDT
                </span>
              </div>
            </div>

            <Button variant="primary" icon={Wallet} className="md:col-span-1">
              Deposit
            </Button>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 md:col-span-1">
              <div className="text-xs text-gray-400">Expected Rewards</div>
              <div className="text-lg font-semibold text-accent">
                {expectedRewards.toFixed(2)} $CTE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};