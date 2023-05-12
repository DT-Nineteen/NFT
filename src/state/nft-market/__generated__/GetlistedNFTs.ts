/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetlistedNFTs
// ====================================================

export interface GetlistedNFTs_nfts {
  __typename: "NFT";
  id: string;
  from: any;
  to: any;
  price: any;
  tokenURI: string;
}

export interface GetlistedNFTs {
  nfts: GetlistedNFTs_nfts[];
}

export interface GetlistedNFTsVariables {
  currentAddress: string;
}
