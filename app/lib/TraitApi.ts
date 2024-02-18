import { CovalentClient } from "@covalenthq/client-sdk";

const TraitApi = async () => {
    const client = new CovalentClient("cqt_rQDhFWh8qxVbFxX6tmJb3gVWRK8d");
    const resp = await client.NftService.getCollectionTraitsSummary("avalanche-testnet","0x3E887DafC8A4535CF5Fc472e68A32Ea8582550EB");
    console.log(resp.data);
}

// const apiKey = // your API key (Warning: do not supply it like this in the production environment)

// const getDataFromCovalentAPI = async (nftContract) => {
// 	const getTraitSummaryEndpoint = '<https://api.covalenthq.com/v1/eth-mainnet/nft/${nftContract}/traits_summary/>'
// 	const res = await fetch(getTraitSummaryEndpoint, {method: 'GET', headers: {
//       "Authorization": `Basic ${btoa(apiKey + ':')}`
//     }})
	
//   return res.json()
// }

// const getTraitPercentage = ( trait, res ) => {
//     const match = res.data.items.find(item => trait === item.name)
//     if (match) {
//         return match.value_string.trait_percentage
//     } else {
//         console.log("Trait not found.")
//     }
// }

// const main = async () => {
// 		const collectionAddress = '0x59468516a8259058baD1cA5F8f4BFF190d30E066'
//     const trait = "Special"
// 		const data = await getDataFromCovalentAPI(collectionAddress)
//     console.log(`Trait percentage of ${trait} is:`, getTraitPercentage(trait, data))
// }

// main()