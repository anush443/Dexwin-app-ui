// let config = {};
// config.contract = {
//     address: "0x67fa0F798c86bfCF7b6ac3C237aF56932ED27CC3",
//     abi:[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "address payable", "name": "relayerAddress", "type": "address" }, { "indexed": false, "internalType": "bytes", "name": "functionSignature", "type": "bytes" } ], "name": "MetaTransactionExecuted", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "bytes", "name": "functionSignature", "type": "bytes" }, { "internalType": "bytes32", "name": "sigR", "type": "bytes32" }, { "internalType": "bytes32", "name": "sigS", "type": "bytes32" }, { "internalType": "uint8", "name": "sigV", "type": "uint8" } ], "name": "executeMetaTransaction", "outputs": [ { "internalType": "bytes", "name": "", "type": "bytes" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "user", "type": "address" } ], "name": "getNonce", "outputs": [ { "internalType": "uint256", "name": "nonce", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "quote", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "string", "name": "newQuote", "type": "string" } ], "name": "setQuote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getQuote", "outputs": [ { "internalType": "string", "name": "currentQuote", "type": "string" }, { "internalType": "address", "name": "currentOwner", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
// }

// let config = {};
// config.contract = {
//     address: "0xff55d0770390dbB4c68cfF102077aAB3cacb324f",
//     abi:[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "address payable", "name": "relayerAddress", "type": "address" }, { "indexed": false, "internalType": "bytes", "name": "functionSignature", "type": "bytes" } ], "name": "MetaTransactionExecuted", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "bytes", "name": "functionSignature", "type": "bytes" }, { "internalType": "bytes32", "name": "sigR", "type": "bytes32" }, { "internalType": "bytes32", "name": "sigS", "type": "bytes32" }, { "internalType": "uint8", "name": "sigV", "type": "uint8" } ], "name": "executeMetaTransaction", "outputs": [ { "internalType": "bytes", "name": "", "type": "bytes" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "user", "type": "address" } ], "name": "getNonce", "outputs": [ { "internalType": "uint256", "name": "nonce", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "quote", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "string", "name": "newQuote", "type": "string" } ], "name": "setQuote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getQuote", "outputs": [ { "internalType": "string", "name": "currentQuote", "type": "string" }, { "internalType": "address", "name": "currentOwner", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" } ]
// }

// let config = {};
// config.contract = {
//     address: "0x8856dcb439296efc47a68ad6c5cb02ff2157f2d4",
//     abi: [ { "inputs": [ { "internalType": "address", "name": "_token1", "type": "address" }, { "internalType": "address", "name": "manager", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "userAddress", "type": "address" }, { "indexed": false, "internalType": "address payable", "name": "relayerAddress", "type": "address" }, { "indexed": false, "internalType": "bytes", "name": "functionSignature", "type": "bytes" } ], "name": "MetaTransactionExecuted", "type": "event" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "Blist", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint8", "name": "option", "type": "uint8" }, { "internalType": "string", "name": "bet_TYPE", "type": "string" }, { "internalType": "uint256", "name": "oddvalues", "type": "uint256" }, { "internalType": "uint256", "name": "payout", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "_safeTransferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "balanceOF", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256[2]", "name": "a", "type": "uint256[2]" } ], "name": "calculateBetPayoutAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "address", "name": "userAddress", "type": "address" }, { "internalType": "bytes", "name": "functionSignature", "type": "bytes" }, { "internalType": "bytes32", "name": "sigR", "type": "bytes32" }, { "internalType": "bytes32", "name": "sigS", "type": "bytes32" }, { "internalType": "uint8", "name": "sigV", "type": "uint8" } ], "name": "executeMetaTransaction", "outputs": [ { "internalType": "bytes", "name": "", "type": "bytes" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "address", "name": "user", "type": "address" } ], "name": "getNonce", "outputs": [ { "internalType": "uint256", "name": "nonce", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "internalType": "uint256", "name": "a", "type": "uint256" }, { "internalType": "uint256", "name": "_id", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "option", "type": "uint8" }, { "internalType": "string", "name": "bettype", "type": "string" }, { "internalType": "uint256", "name": "oddvalue", "type": "uint256" } ], "name": "placebet", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "staticPayoutOdds", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token1", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "internalType": "uint256", "name": "odd", "type": "uint256" } ], "name": "updatebet", "outputs": [ { "internalType": "uint256[2]", "name": "", "type": "uint256[2]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]
// }

let config = {};
const Contract = {
  address: "0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6",
  abi: [
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "userAddress",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "functionSignature",
          type: "bytes",
        },
        {
          internalType: "bytes32",
          name: "sigR",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "sigS",
          type: "bytes32",
        },
        {
          internalType: "uint8",
          name: "sigV",
          type: "uint8",
        },
      ],
      name: "executeMetaTransaction",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "newQuote",
          type: "string",
        },
      ],
      name: "setQuote",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "a",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferer20",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_token",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "userAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address payable",
          name: "relayerAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "functionSignature",
          type: "bytes",
        },
      ],
      name: "MetaTransactionExecuted",
      type: "event",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "user",
          type: "address",
        },
      ],
      name: "getNonce",
      outputs: [
        {
          internalType: "uint256",
          name: "nonce",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getQuote",
      outputs: [
        {
          internalType: "string",
          name: "currentQuote",
          type: "string",
        },
        {
          internalType: "address",
          name: "currentOwner",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "quote",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
};

// let config = {};
// config.contract = {
//     address: "0xf625eF76aD19Dc18002d43F855803B03DF2D4241",
//     abi:[
// 		{
// 			"constant": false,
// 			"inputs": [
// 				{
// 					"internalType": "contract IERC20",
// 					"name": "token",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "address",
// 					"name": "sender",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "address",
// 					"name": "recipient",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "amount",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "_safeTransferFrom",
// 			"outputs": [],
// 			"payable": false,
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"constant": false,
// 			"inputs": [
// 				{
// 					"internalType": "address",
// 					"name": "userAddress",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "bytes",
// 					"name": "functionSignature",
// 					"type": "bytes"
// 				},
// 				{
// 					"internalType": "bytes32",
// 					"name": "sigR",
// 					"type": "bytes32"
// 				},
// 				{
// 					"internalType": "bytes32",
// 					"name": "sigS",
// 					"type": "bytes32"
// 				},
// 				{
// 					"internalType": "uint8",
// 					"name": "sigV",
// 					"type": "uint8"
// 				}
// 			],
// 			"name": "executeMetaTransaction",
// 			"outputs": [
// 				{
// 					"internalType": "bytes",
// 					"name": "",
// 					"type": "bytes"
// 				}
// 			],
// 			"payable": true,
// 			"stateMutability": "payable",
// 			"type": "function"
// 		},
// 		{
// 			"constant": false,
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "a",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "_id",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "_amount",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint8",
// 					"name": "option",
// 					"type": "uint8"
// 				},
// 				{
// 					"internalType": "string",
// 					"name": "bettype",
// 					"type": "string"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "oddvalue",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "placebet",
// 			"outputs": [],
// 			"payable": false,
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"inputs": [
// 				{
// 					"internalType": "address",
// 					"name": "_token1",
// 					"type": "address"
// 				},
// 				{
// 					"internalType": "address",
// 					"name": "manager",
// 					"type": "address"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "nonpayable",
// 			"type": "constructor"
// 		},
// 		{
// 			"anonymous": false,
// 			"inputs": [
// 				{
// 					"indexed": false,
// 					"internalType": "address",
// 					"name": "userAddress",
// 					"type": "address"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "address payable",
// 					"name": "relayerAddress",
// 					"type": "address"
// 				},
// 				{
// 					"indexed": false,
// 					"internalType": "bytes",
// 					"name": "functionSignature",
// 					"type": "bytes"
// 				}
// 			],
// 			"name": "MetaTransactionExecuted",
// 			"type": "event"
// 		},
// 		{
// 			"constant": false,
// 			"inputs": [],
// 			"name": "withdraw",
// 			"outputs": [],
// 			"payable": false,
// 			"stateMutability": "nonpayable",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "balanceOF",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "Blist",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "id",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "amount",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint8",
// 					"name": "option",
// 					"type": "uint8"
// 				},
// 				{
// 					"internalType": "string",
// 					"name": "bet_TYPE",
// 					"type": "string"
// 				},
// 				{
// 					"internalType": "uint256",
// 					"name": "oddvalues",
// 					"type": "uint256"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "amount",
// 					"type": "uint256"
// 				},
// 				{
// 					"internalType": "uint256[2]",
// 					"name": "a",
// 					"type": "uint256[2]"
// 				}
// 			],
// 			"name": "calculateBetPayoutAmount",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [
// 				{
// 					"internalType": "address",
// 					"name": "user",
// 					"type": "address"
// 				}
// 			],
// 			"name": "getNonce",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "nonce",
// 					"type": "uint256"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"name": "staticPayoutOdds",
// 			"outputs": [
// 				{
// 					"internalType": "uint256",
// 					"name": "",
// 					"type": "uint256"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		},
// 		{
// 			"constant": true,
// 			"inputs": [],
// 			"name": "token1",
// 			"outputs": [
// 				{
// 					"internalType": "contract IERC20",
// 					"name": "",
// 					"type": "address"
// 				}
// 			],
// 			"payable": false,
// 			"stateMutability": "view",
// 			"type": "function"
// 		}
// 	]
// }

module.exports = { Contract };
