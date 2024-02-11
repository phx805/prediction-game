import { CovalentClient } from "@covalenthq/client-sdk";

const ApiServices = async () => {
    const client = new CovalentClient("cqt_rQDhFWh8qxVbFxX6tmJb3gVWRK8d");
    const resp = await client.NftService.getNftsForAddress("avalanche-testnet","0xDC4b55aD4c9074Ce50E5e178a050654c063ef758", {"withUncached": true});
    console.log(resp.data);
}

export default ApiServices;