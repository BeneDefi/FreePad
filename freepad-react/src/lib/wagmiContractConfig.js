import FreepadNFTABI from "../../ABIs/FreepadNFT.json";

const wagmiContractConfig = {
  address: import.meta.env.VITE_FREEPAD_NFT_SCA,
  abi: FreepadNFTABI,
};

export { wagmiContractConfig };