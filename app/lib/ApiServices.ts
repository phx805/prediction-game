import { CovalentClient } from "@covalenthq/client-sdk";

interface ApiServicesPropType {
  address: string;
}

const ApiServices = async ({ address }: ApiServicesPropType) => {
  const client = new CovalentClient("cqt_rQDhFWh8qxVbFxX6tmJb3gVWRK8d");
  const resp = await client.NftService.getNftsForAddress(
    "avalanche-testnet",
    address,
    { withUncached: true }
  );
  //   console.log(resp.data);
  return resp.data;
};

export default ApiServices;
