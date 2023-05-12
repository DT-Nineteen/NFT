import { gql, useQuery } from "@apollo/client";
import { GetOwnedNFTs, GetOwnedNFTsVariables, GetOwnedNFTs_nfts } from "./__generated__/GetOwnedNFTs";
import useSigner from "state/signer";
import {NFT} from "./interfaces"
import { ethers } from "ethers";
import { parseRawNFT } from "./helper";
import {NFT_MARKET_ADDRESS} from './config'


const useOwnedNFTs = () =>{
    const {address} = useSigner();
    const {data} = useQuery<GetOwnedNFTs, GetOwnedNFTsVariables>(
        GET_OWNED_NFTS,
        {variables:{owner: address ?? ""}, skip: !address}
    );
    const ownedNFTs = data?.nfts.map(parseRawNFT);
    return {ownedNFTs};
}

const GET_OWNED_NFTS = gql`
  query GetOwnedNFTs($owner: String!) {
    nfts(where: { to: $owner }) {
      id
      from
      to
      price
      tokenURI
    }
  }
`;

export default useOwnedNFTs;