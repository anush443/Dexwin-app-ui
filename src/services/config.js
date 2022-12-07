let config = {};

config.Contract = { 
	address: "0x1c77930fEED5580431679066D260348E91B05D72",
	//"0x94c0104e7a296efde81cb69e2a5295a675e594b8",
	//"0x3Bfff6a44BbEd2956601aC33000bfa745565CaD6",
	abi: [
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "userAddress",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "functionSignature",
					"type": "bytes"
				},
				{
					"internalType": "bytes32",
					"name": "sigR",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "sigS",
					"type": "bytes32"
				},
				{
					"internalType": "uint8",
					"name": "sigV",
					"type": "uint8"
				}
			],
			"name": "executeMetaTransaction",
			"outputs": [
				{
					"internalType": "bytes",
					"name": "",
					"type": "bytes"
				}
			],
			"payable": true,
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "a",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferer20",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "userAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfertouser",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_token",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "userAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address payable",
					"name": "relayerAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bytes",
					"name": "functionSignature",
					"type": "bytes"
				}
			],
			"name": "MetaTransactionExecuted",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "balance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "user",
					"type": "address"
				}
			],
			"name": "getNonce",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "quote",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]
}

module.exports = {config}