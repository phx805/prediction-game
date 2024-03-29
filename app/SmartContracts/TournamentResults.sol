// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;


// Deploy on Fuji


import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";


/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/resources/link-token-contracts/
 */


/**
 * @title GettingStartedFunctionsConsumer
 * @notice This is an example contract to show how to make HTTP requests using Chainlink
 * @dev This contract uses hardcoded values and should not be used in production.
 */
contract TournamentResults is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;


    // State variables to store the last request ID, response, and error
    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;


    // Custom error type
    error UnexpectedRequestID(bytes32 requestId);


    // Event to log responses
    event Response(
        bytes32 indexed requestId,
        string results,
        bytes response,
        bytes err
    );


    // Hardcoded for Fuji
    // Supported networks https://docs.chain.link/chainlink-functions/supported-networks
    address router = 0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0;
    bytes32 donID =
        0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000;


    //Callback gas limit
    uint32 gasLimit = 300000;


    // JavaScript source code
    // Fetch results name from the Star Wars API.
    // Documentation: https://swapi.dev/documentation#people
    string source =
    "const apiResponse = await Functions.makeHttpRequest({"
  "url: `https://api.sheety.co/6d41d80c83c8ca44a50178f2843333cb/tournamentApi/attributes`"
"});"


"if (apiResponse.error) {"
  "console.error(apiResponse.error);"
  "throw new Error(\"Request failed\");"
"}"


"const { data } = apiResponse;"


"let stringData;"


"if (typeof data !== 'string') {"
  "stringData = JSON.stringify(data);"
"} else {"
  "stringData = data;"
"}"


"console.log('API response data:', stringData);"


"return Functions.encodeString(stringData);";


    // State variable to store the returned results information
     string public results;


    /**
     * @notice Initializes the contract with the Chainlink router address and sets the contract owner
     */
    constructor() FunctionsClient(router) ConfirmedOwner(msg.sender) {}




    function sendRequest(
        uint64 subscriptionId
    ) external onlyOwner returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source); // Initialize the request with JS code
         // Set the arguments for the request


        // Send the request and store the request ID
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );


        return s_lastRequestId;
    }


    /**
     * @notice Callback function for fulfilling a request
     * @param requestId The ID of the request to fulfill
     * @param response The HTTP response data
     * @param err Any errors from the Functions request
     */
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId); // Check if request IDs match
        }
        // Update the contract's state variables with the response and any errors
        s_lastResponse = response;
        s_lastError = err;


        // Emit an event to log the response
        emit Response(requestId, results, s_lastResponse, s_lastError);
    }
}



