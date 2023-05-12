/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnedNFTs
// ====================================================

export interface GetOwnedNFTs_nfts {
  __typename: "NFT";
  id: string;
  from: any;
  to: any;
  price: any;
  tokenURI: string;
}

export interface GetOwnedNFTs {
  nfts: GetOwnedNFTs_nfts[];
}

export interface GetOwnedNFTsVariables {
  owner: string;
}
