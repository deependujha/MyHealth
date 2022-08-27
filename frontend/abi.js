const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "hos",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "def",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "ins",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dat",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "allowEmployee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "banEmployee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dataAnalystOrg",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defenceOrg",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "person",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_what",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_med",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tags",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_note",
          "type": "string"
        }
      ],
      "name": "enterData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hospitalOrg",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "insuranceOrg",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "person",
          "type": "address"
        }
      ],
      "name": "viewData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "what",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "medicines",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tags",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "note",
              "type": "string"
            }
          ],
          "internalType": "struct dataArr[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
export default ABI;