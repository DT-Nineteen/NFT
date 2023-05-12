import NFTCard from "components/NFTCard";
import useNFTMarket from "state/nft-market";

const OwnedPage = () => {
  const {ownedNFTs, ownedListedNFTs} = useNFTMarket();

    return (
    <div className="flex w-full flex-col">
     <div className = "flex flex-wrap">
      {ownedNFTs?.map(nft =><NFTCard className="mr-2 mb-2" nft={nft} key={nft.id}/>)}
      </div>
      <div className = "flex flex-wrap">
      {ownedListedNFTs?.map(nft =><NFTCard className="mr-2 mb-2" nft={nft} key={nft.id}/>)}
      </div>
    </div>
  );
};

export default OwnedPage;
