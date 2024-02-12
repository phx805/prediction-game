import { CovalentClient } from "@covalenthq/client-sdk";

const ApiServices = async (address: string) => {
  const client = new CovalentClient("cqt_rQDhFWh8qxVbFxX6tmJb3gVWRK8d");
  if (!address) return;
  const resp = await client.NftService.getNftsForAddress(
    "avalanche-testnet",
    address,
    { withUncached: true }
  );
  return resp.data;
};

export default ApiServices;
