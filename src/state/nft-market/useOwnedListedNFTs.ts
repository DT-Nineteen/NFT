import { gql, useQuery } from "@apollo/client";
import { GetOwnedNFTs_nfts } from "./__generated__/GetOwnedNFTs";
import useSigner from "state/signer";
import {NFT} from "./interfaces"
import { ethers } from "ethers";
import {NFT_MARKET_ADDRESS} from './config'

import { GetOwnedlistedNFTs, GetOwnedlistedNFTsVariables } from "./__generated__/GetOwnedlistedNFTs";
import { parseRawNFT } from "./helper";

const useOwnedListedNFTs = () =>{
    const {address} = useSigner();
    const {data} = useQuery<GetOwnedlistedNFTs, GetOwnedlistedNFTsVariables>(
        GET_OWNED_LISTED_NFTS,
        {variables:{owner: address ?? ""}, skip: !address}
    );
    const ownedListedNFTs = data?.nfts.map(parseRawNFT);
    return {ownedListedNFTs};
}

const GET_OWNED_LISTED_NFTS = gql`
  query GetOwnedlistedNFTs($owner: String!) {
    nfts(where: { to: "0x4D7CadE299603998824B7A85818D90A85296E28f" from: $owner }) {
      id
      from
      to
      price
      tokenURI
    }
  }
`;
export default useOwnedListedNFTs;