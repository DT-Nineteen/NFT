import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";

const HomePage = () => {
  const {ListedNFTs} = useNFTMarket();
  return (
    <div className="flex w-full flex-col">
       <div className = "flex flex-wrap">
      {ListedNFTs?.map(nft =><NFTCard className="mr-2 mb-2" nft={nft} key={nft.id}/>)}
      </div>
    </div>
  );
};

export default HomePage;
