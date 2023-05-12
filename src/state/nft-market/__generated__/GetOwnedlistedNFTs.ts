/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOwnedlistedNFTs
// ====================================================

export interface GetOwnedlistedNFTs_nfts {
  __typename: "NFT";
  id: string;
  from: any;
  to: any;
  price: any;
  tokenURI: string;
}

export interface GetOwnedlistedNFTs {
  nfts: GetOwnedlistedNFTs_nfts[];
}

export interface GetOwnedlistedNFTsVariables {
  owner: string;
}
