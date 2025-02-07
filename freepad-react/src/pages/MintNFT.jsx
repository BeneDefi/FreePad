import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect, useWriteContract } from 'wagmi';
import { parseEther } from 'viem'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { wagmiContractConfig } from '../lib/wagmiContractConfig';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const MintNFT = () => {
  const [minting, setMinting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const { writeContract } = useWriteContract();

  const handleMint = async () => {
    setMinting(true);
    setError('');

    try {
      await writeContract({
        ...wagmiContractConfig,
        functionName: 'mint',
        args: [],
        value: parseEther('0.0017'),
        gasLimit: 300000,
      });
      
      setMinting(false);
      setSuccess(true);
    } catch (err) {
      setMinting(false);
      console.error('Minting Error:', err);
      setError(err.message);
    }
  };

  return (
    <div>
  <NavBar />
  <main className="p-4">
    <section className="mint min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="mint-container bg-white shadow-xl rounded-2xl p-8">
          <h1 className="mint-text text-3xl font-bold mb-6 text-left">Mint Your FreePad NFT</h1>
          {!isConnected ? (
            <ConnectButton />
          ) : (
            <>
              <button
                onClick={handleMint}
                disabled={minting}
                className="mint-btn bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 disabled:opacity-50"
              >
                {minting ? 'Minting...' : 'Mint FreePad NFT'}
              </button>
            </>
          )}
          {success && <p className="text-green-600 mt-4">NFT Minted Successfully!</p>}
          {error && <p className="text-red-600 mt-4">Error: {error}</p>}
        </div>
        <div>
          <a href="#">
            <img 
              className="mint-img" 
              src="/freepadlogo.png" 
              alt="FreePad Logo" 
              style={{ width: '200px' }} 
            />
          </a>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</div>
  );
};

export default MintNFT;
