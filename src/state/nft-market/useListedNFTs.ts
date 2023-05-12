import { gql, useQuery } from "@apollo/client";
import { GetOwnedNFTs_nfts } from "./__generated__/GetOwnedNFTs";
import useSigner from "state/signer";
import {NFT} from "./interfaces"
import { ethers } from "ethers";
import {NFT_MARKET_ADDRESS} from './config'

import { GetOwnedlistedNFTs, GetOwnedlistedNFTsVariables } from "./__generated__/GetOwnedlistedNFTs";
import { parseRawNFT } from "./helper";
import { GetlistedNFTs, GetlistedNFTsVariables } from "./__generated__/GetlistedNFTs";

const useListedNFTs = () =>{
    const {address} = useSigner();
    const {data} = useQuery<GetlistedNFTs, GetlistedNFTsVariables>(
        GET_LISTED_NFTS,
        {variables:{currentAddress: address ?? ""}, skip: !address}
    );
    const ListedNFTs = data?.nfts.map(parseRawNFT);
    return {ListedNFTs};
}

const GET_LISTED_NFTS = gql`
  query GetlistedNFTs($currentAddress: String!) {
    nfts(where: { to: "0x4D7CadE299603998824B7A85818D90A85296E28f" from_not: $currentAddress }) {
      id
      from
      to
      price
      tokenURI
    }
  }
`;
export default useListedNFTs;