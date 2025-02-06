import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const bscTestnet = {
  id: 97,
  name: 'Binance Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    },
    public: {
      http: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
    },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com/' },
  },
  testnet: true,
};

export const config = getDefaultConfig({
  appName: 'FreePad',
  projectId: 'f6944e67672a59c2ac32f0ec4777dfd8',
  chains: [
    bscTestnet,
  ],
});
