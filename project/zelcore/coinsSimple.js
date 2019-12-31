const coins = {
  zelcash: {
    coin: "zelcash",
    name: "Zel",
    uri: ["zelcash", "zel"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    wif: "80",
    normalAddress: "t1",
    normalAddressB: "t1",
    scriptAddress: "t3",
    scriptAddressB: "t3",
    slip: 19167,
    addresses: [],
    api: [
      "https://explorer.zel.zelcore.io/api/",
      "https://explorer.zel.cash/api/",
      "https://explorer2.zel.cash/api/",
      "https://explorer.zelcash.online/api/",
      "https://explorer-asia.zel.cash/api/"
    ],
    pathunix: "zelcash",
    path: "Zelcash",
    unit: "ZEL",
    config: "zelcash",
    rpcport: 16124,
    testnetrpcport: 26124,
    type: "zcash",
    explorer: [
      "https://explorer.zel.zelcore.io/tx/",
      "https://explorer.zel.cash/tx/",
      "https://explorer2.zel.cash/tx/",
      "https://explorer.zelcash.online/tx/",
      "https://explorer-asia.zel.cash/tx/"
    ],
    logolink: "./img/assets/ZEL.svg",
    node: [
      "explorer.zel.zelcore.io",
      "explorer.zel.cash",
      "explorer2.zel.cash",
      "explorer.zelcash.online"
    ],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#183c87"
  },
  testnet: {
    coin: "testnet",
    name: "Test Coin",
    uri: ["testnet", "testzel"],
    pubKeyHash: "1d25",
    scriptHash: "1cba",
    wif: "ef",
    normalAddress: "tm",
    normalAddressB: "tm",
    scriptAddress: "t2",
    scriptAddressB: "t2",
    slip: 1,
    addresses: [],
    api: ["https://testnet.zel.cash/api/"],
    pathunix: "zelcash",
    path: "Zelcash",
    unit: "TESTZEL",
    config: "zelcash",
    rpcport: 26124,
    testnetrpcport: 26124,
    type: "zcash",
    explorer: ["https://testnetnodes.zel.cash/tx/"],
    logolink: "./img/assets/TESTZEL.svg",
    node: ["testnet.zel.cash"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#3e30a0"
  },
  bitcoin: {
    coin: "bitcoin",
    name: "Bitcoin",
    uri: ["bitcoin", "btc"],
    pubKeyHash: "00",
    scriptHash: "05",
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "1",
    scriptAddressB: "3",
    wif: "80",
    slip: 0,
    addresses: [],
    api: [
      "https://explorer.btc.zelcore.io/api/",
      "https://insight.bitpay.com/api/",
      "https://blockexplorer.com/api/"
    ],
    pathunix: "bitcoin",
    path: "Bitcoin",
    unit: "BTC",
    config: "bitcoin",
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "btc",
    explorer: [
      "https://explorer.btc.zelcore.io/tx/",
      "https://insight.bitpay.com/tx/",
      "https://blockexplorer.com/tx/"
    ],
    logolink: "./img/assets/BTC.svg",
    node: [
      "explorer.btc.zelcore.io",
      "insight.bitpay.com",
      "blockexplorer.com"
    ],
    fee: 0.0000226,
    feepolicy: {
      economy: 20,
      normal: 100,
      fast: 180
    },
    color: "#f7931a"
  },
  ethereum: {
    coin: "ethereum",
    name: "Ethereum",
    uri: ["ethereum", "eth"],
    slip: 60,
    addresses: [],
    api: ["https://api.etherscan.io/api?module=account&action=txlist&address="],
    unit: "ETH",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ETH.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee_url: "https://www.etherchain.org/api/gasPriceOracle",
    fee: 35000,
    feepolicy: {
      economy: 4,
      normal: 8,
      fast: 14
    },
    color: "#b0b0b0",
    contractAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18
  },
  litecoin: {
    coin: "litecoin",
    name: "Litecoin",
    uri: ["litecoin", "ltc"],
    pubKeyHash: "30",
    scriptHash: "32",
    normalAddress: "L",
    scriptAddress: "3",
    normalAddressB: "L",
    scriptAddressB: "M",
    wif: "b0",
    slip: 2,
    addresses: [],
    api: [
      "https://explorer.ltc.zelcore.io/api/",
      "https://insight.litecore.io/api/",
      "https://litecoinblockexplorer.net/api/"
    ],
    pathunix: "litecoin",
    path: "Litecoin",
    unit: "LTC",
    config: "litecoin",
    rpcport: 9332,
    testnetrpcport: 19332,
    type: "btc",
    explorer: [
      "https://explorer.ltc.zelcore.io/tx/",
      "https://insight.litecore.io/tx/",
      "https://litecoinblockexplorer.net/tx/"
    ],
    logolink: "./img/assets/LTC.svg",
    node: [
      "explorer.ltc.zelcore.io",
      "insight.litecore.io",
      "litecoinblockexplorer.net"
    ],
    fee: 0.0004,
    feepolicy: {
      economy: 200,
      normal: 500,
      fast: 1000
    },
    color: "#385d9a"
  },
  zcash: {
    coin: "zcash",
    name: "Zcash",
    uri: ["zcash", "zec"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    slip: 133,
    addresses: [],
    api: [
      "https://explorer2.zec.zelcore.io/api/",
      "https://explorer.zec.zelcore.io/api/",
      "https://explorer2.zecmate.com/api/",
      "https://explorer.zecmate.com/api/",
      "https://explorer.z.cash/api/"
    ],
    pathunix: "zcash",
    path: "Zcash",
    unit: "ZEC",
    config: "zcash",
    rpcport: 8232,
    testnetrpcport: 18232,
    type: "zcash",
    explorer: [
      "https://explorer2.zec.zelcore.io/tx/",
      "https://explorer.zec.zelcore.io/tx/",
      "https://explorer2.zecmate.com/tx/",
      "https://explorer.zecmate.com/tx/",
      "https://explorer.z.cash/tx/"
    ],
    logolink: "./img/assets/ZEC.svg",
    node: [
      "explorer2.zec.zelcore.io",
      "explorer.zec.zelcore.io",
      "explorer2.zecmate.com",
      "explorer2.zecmate.com",
      "explorer.z.cash"
    ],
    fee: 0.0000226,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#f4b728"
  },
  bitcoinz: {
    coin: "bitcoinz",
    name: "BitcoinZ",
    uri: ["bitcoinz", "btcz"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    slip: 177,
    addresses: [],
    api: [
      "https://explorer2.btcz.zelcore.io/api/",
      "https://explorer.btcz.zelcore.io/api/",
      "https://explorer.btcz.rocks/api/"
    ],
    pathunix: "bitcoinz",
    path: "BitcoinZ",
    unit: "BTCZ",
    config: "bitcoinz",
    rpcport: 1979,
    testnetrpcport: 11979,
    type: "zcash",
    explorer: [
      "https://explorer2.btcz.zelcore.io/tx/",
      "https://explorer.btcz.zelcore.io/tx/",
      "https://explorer.btcz.rocks/tx/"
    ],
    logolink: "./img/assets/BTCZ.svg",
    node: [
      "explorer2.btcz.zelcore.io",
      "explorer.btcz.zelcore.io",
      "explorer.btcz.rocks"
    ],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#42abcc"
  },
  ravencoin: {
    coin: "ravencoin",
    name: "Ravencoin",
    uri: ["ravencoin", "rvn"],
    pubKeyHash: "3c",
    scriptHash: "7a",
    normalAddress: "R",
    normalAddressB: "R",
    scriptAddress: "r",
    scriptAddressB: "r",
    wif: "80",
    slip: 175,
    addresses: [],
    api: [
      "https://api.ravencoin.org/api/",
      "https://explorer.rvn.zelcore.io/api/",
      "https://ravencoin.network/api/",
      "https://ravenexplorer.minermore.com/api/",
      "https://explorer.ravenland.org/api/"
    ],
    pathunix: "raven",
    path: "Raven",
    unit: "RVN",
    config: "raven",
    rpcport: 8766,
    testnetrpcport: 18766,
    type: "btc",
    explorer: [
      "https://explorer.rvn.zelcore.io/tx/",
      "https://api.ravencoin.org/tx/",
      "https://ravencoin.network/tx/",
      "https://ravenexplorer.minermore.com/tx/",
      "https://explorer.ravenland.org/tx/"
    ],
    logolink: "./img/assets/RVN.svg",
    node: [
      "explorer.rvn.zelcore.io",
      "api.ravencoin.org",
      "ravencoin.network",
      "ravenexplorer.minermore.com",
      "explorer.ravenland.org"
    ],
    fee: 0.00001,
    feepolicy: {
      economy: 4,
      normal: 8,
      fast: 16
    },
    color: "#f05239"
  },
  bitcore: {
    coin: "bitcore",
    name: "Bitcore",
    uri: ["bitcore", "btx"],
    pubKeyHash: "03",
    scriptHash: "7d",
    normalAddress: "2",
    scriptAddress: "s",
    normalAddressB: "2",
    scriptAddressB: "s",
    wif: "80",
    slip: 160,
    addresses: [],
    api: ["https://explorer.btx.zelcore.io/api/"],
    pathunix: "bitcore",
    path: "Bitcore",
    unit: "BTX",
    config: "bitcore",
    rpcport: 8556,
    testnetrpcport: 50332,
    type: "btc",
    explorer: ["https://explorer.btx.zelcore.io/tx/"],
    logolink: "./img/assets/BTX.svg",
    node: ["explorer.btx.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#ed3483"
  },
  hush: {
    coin: "hush",
    name: "Hush",
    uri: ["hush"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    slip: 197,
    addresses: [],
    api: ["https://explorer.hush.zelcore.io/api/"],
    pathunix: "hush",
    path: "Hush",
    unit: "HUSH",
    config: "hush",
    rpcport: 8822,
    testnetrpcport: 18822,
    type: "zcash",
    explorer: ["https://explorer.hush.zelcore.io/tx/"],
    logolink: "./img/assets/HUSH.svg",
    node: ["explorer.hush.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#2d2d2d"
  },
  binance: {
    coin: "binance",
    name: "Binance",
    uri: ["binance", "bnb"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb8c77482e45f1f44de1745f52c74426c631bdd52&address="
    ],
    unit: "BNB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BNB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    color: "#f3ba2f",
    decimals: 18
  },
  sonm: {
    coin: "sonm",
    name: "Sonm",
    uri: ["sonm"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63&address="
    ],
    unit: "SONM",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SONM.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
    color: "#6522ff",
    decimals: 18
  },
  omisego: {
    coin: "omisego",
    name: "OmiseGO",
    uri: ["omisego", "omg"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd26114cd6EE289AccF82350c8d8487fedB8A0C07&address="
    ],
    unit: "OMG",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/OMG.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
    color: "#1a53f0",
    decimals: 18
  },
  zilliqa: {
    coin: "zilliqa",
    name: "Zilliqa",
    uri: ["zilliqa", "zil"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27&address="
    ],
    unit: "ZIL",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ZIL.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
    color: "#49c1bf",
    decimals: 12
  },
  zrx: {
    coin: "zrx",
    name: "0x",
    uri: ["0x", "zrx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe41d2489571d322189246dafa5ebde1f4699f498&address="
    ],
    unit: "ZRX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ZRX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    color: "#404040",
    decimals: 18
  },
  golem: {
    coin: "golem",
    name: "Golem",
    uri: ["golem", "gnt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa74476443119A942dE498590Fe1f2454d7D4aC0d&address="
    ],
    unit: "GNT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GNT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    color: "#002d64",
    decimals: 18
  },
  kucoin: {
    coin: "kucoin",
    name: "KuCoin",
    uri: ["kucoin", "kcs"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x039b5649a59967e3e936d7471f9c3700100ee1ab&address="
    ],
    unit: "KCS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/KCS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x039b5649a59967e3e936d7471f9c3700100ee1ab",
    color: "#0093dd",
    decimals: 6
  },
  bat: {
    coin: "bat",
    name: "Basic Attention Token",
    uri: ["basicattentiontoken", "bat"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0d8775f648430679a709e98d2b0cb6250d2887ef&address="
    ],
    unit: "BAT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BAT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    color: "#ff5000",
    decimals: 18
  },
  maker: {
    coin: "maker",
    name: "Maker",
    uri: ["maker", "mkr"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address="
    ],
    unit: "MKR",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MKR.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    color: "#1abc9c",
    decimals: 18
  },
  kyber: {
    coin: "kyber",
    name: "Kyber",
    uri: ["kyber", "knc"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdd974d5c2e2928dea5f71b9825b8b646686bd200&address="
    ],
    unit: "KNC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/KNC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    color: "#31cb9e",
    decimals: 18
  },
  enigma: {
    coin: "enigma",
    name: "Enigma",
    uri: ["enigma", "eng"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4&address="
    ],
    unit: "ENG",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ENG.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    color: "#cd2667",
    decimals: 8
  },
  tenx: {
    coin: "tenx",
    name: "TenX",
    uri: ["tenx", "pay"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xB97048628DB6B661D4C2aA833e95Dbe1A905B280&address="
    ],
    unit: "PAY",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/PAY.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
    color: "#48d0e0",
    decimals: 18
  },
  substratum: {
    coin: "substratum",
    name: "Substratum",
    uri: ["substratum", "sub"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8d75959f1e61ec2571aa72798237101f084de63a&address="
    ],
    unit: "SUB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SUB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x8d75959f1e61ec2571aa72798237101f084de63a",
    color: "#ef4138",
    decimals: 18
  },
  civic: {
    coin: "civic",
    name: "Civic",
    uri: ["civic", "cvc"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x41e5560054824ea6b0732e656e3ad64e20e94e45&address="
    ],
    unit: "CVC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/CVC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    color: "#3ab03e",
    decimals: 8
  },
  stox: {
    coin: "stox",
    name: "Stox",
    uri: ["stox", "stx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45&address="
    ],
    unit: "STX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/STX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
    color: "#710afc",
    decimals: 18
  },
  bitcoingold: {
    coin: "bitcoingold",
    name: "Bitcoin Gold",
    uri: ["bitcoingold", "btg"],
    pubKeyHash: "26",
    scriptHash: "17",
    normalAddress: "G",
    scriptAddress: "A",
    normalAddressB: "G",
    scriptAddressB: "A",
    wif: "80",
    slip: 156,
    addresses: [],
    api: ["https://explorer.bitcoingold.org/insight-api/"],
    pathunix: "bitcoingold",
    path: "BitcoinGold",
    unit: "BTG",
    config: "bitcoingold",
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "btc",
    explorer: ["https://explorer.bitcoingold.org/insight/tx/"],
    logolink: "./img/assets/BTG.svg",
    node: ["explorer.bitcoingold.org"],
    fee: 0.0000226,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10
    },
    color: "#eba809"
  },
  snowgem: {
    coin: "snowgem",
    name: "Snowgem",
    uri: ["snowgem", "xsg"],
    pubKeyHash: "1c28",
    scriptHash: "1c2d",
    normalAddress: "s1",
    scriptAddress: "s3",
    normalAddressB: "s1",
    scriptAddressB: "s3",
    wif: "80",
    slip: 19171,
    addresses: [],
    api: [
      "https://explorer.xsg.zelcore.io/api/",
      "https://explorer.snowgem.org/api/"
    ],
    pathunix: "snowgem",
    path: "Snowgem",
    unit: "XSG",
    config: "snowgem",
    rpcport: 16112,
    testnetrpcport: 26112,
    type: "zcash",
    explorer: [
      "https://explorer.xsg.zelcore.io/tx/",
      "https://explorer.snowgem.org/tx/"
    ],
    logolink: "./img/assets/XSG.svg",
    node: ["explorer.xsg.zelcore.io", "explorer.snowgem.org"],
    fee: 0.00001,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10
    },
    color: "#d21e2b"
  },
  btcp: {
    coin: "btcp",
    name: "Bitcoin Private",
    uri: ["bitcoinprivate", "btcp"],
    pubKeyHash: "1325",
    scriptHash: "13af",
    normalAddress: "b1",
    scriptAddress: "bx",
    normalAddressB: "b1",
    scriptAddressB: "bx",
    wif: "80",
    slip: 183,
    addresses: [],
    api: ["https://explorer.btcprivate.org/api/"],
    pathunix: "btcprivate",
    path: "BTCPrivate",
    unit: "BTCP",
    config: "btcprivate",
    rpcport: 7932,
    testnetrpcport: 17932,
    type: "zcash",
    explorer: ["https://explorer.btcprivate.org/tx/"],
    logolink: "./img/assets/BTCP.svg",
    node: ["explorer.btcprivate.org"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#272e64"
  },
  anon: {
    coin: "anon",
    name: "Anon",
    uri: ["anon"],
    pubKeyHash: "0582",
    scriptHash: "5389",
    normalAddress: "An",
    scriptAddress: "3Z",
    normalAddressB: "An",
    scriptAddressB: "3Z",
    wif: "80",
    slip: 220,
    addresses: [],
    api: [
      "https://explorer.anon.zelcore.io/api/",
      "https://explorer2.anon.zelcore.io/api/"
    ],
    pathunix: "anon",
    path: "Anon",
    unit: "ANON",
    config: "anon",
    rpcport: 3130,
    testnetrpcport: 3127,
    type: "zcash",
    explorer: [
      "https://explorer.anon.zelcore.io/tx/",
      "https://explorer2.anon.zelcore.io/tx/"
    ],
    logolink: "./img/assets/ANON.svg",
    node: ["explorer.anon.zelcore.io", "explorer2.anon.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#ba252b"
  },
  zen: {
    coin: "zen",
    name: "Horizen",
    uri: ["horizen", "zen"],
    pubKeyHash: "2089",
    scriptHash: "2096",
    normalAddress: "zn",
    scriptAddress: "zs",
    normalAddressB: "zn",
    scriptAddressB: "zs",
    wif: "80",
    slip: 121,
    addresses: [],
    api: [
      "https://explorer.zensystem.io/api/",
      "https://explorer.zen-solutions.io/api/"
    ],
    pathunix: "zen",
    path: "ZEN",
    unit: "ZEN",
    config: "zen",
    rpcport: 8231,
    testnetrpcport: 18231,
    type: "zcash",
    explorer: [
      "https://explorer.zensystem.io/tx/",
      "https://explorer.zen-solutions.io/tx/"
    ],
    logolink: "./img/assets/ZEN.svg",
    node: ["explorer.zensystem.io", "explorer.zen-solutions.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#61b884"
  },
  safecoin: {
    coin: "safecoin",
    name: "Safecoin",
    uri: ["safecoin", "safe"],
    pubKeyHash: "3d",
    scriptHash: "56",
    normalAddress: "R",
    scriptAddress: "b",
    normalAddressB: "R",
    scriptAddressB: "c",
    wif: "bd",
    slip: 19165,
    addresses: [],
    api: [
      "https://explorer.safe.zelcore.io/api/",
      "https://explorer.safecoin.org/api/"
    ],
    pathunix: "safecoin",
    path: "Safecoin",
    unit: "SAFE",
    config: "safecoin",
    rpcport: 8771,
    testnetrpcport: 18771,
    type: "zcash",
    explorer: [
      "https://explorer.safe.zelcore.io/tx/",
      "https://explorer.safecoin.org/tx/"
    ],
    logolink: "./img/assets/SAFE.svg",
    node: ["explorer.safe.zelcore.io", "explorer.safecoin.org"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#00688b"
  },
  komodo: {
    coin: "komodo",
    name: "Komodo",
    uri: ["komodo", "kmd"],
    pubKeyHash: "3c",
    scriptHash: "55",
    normalAddress: "R",
    scriptAddress: "b",
    normalAddressB: "R",
    scriptAddressB: "b",
    wif: "bc",
    slip: 141,
    addresses: [],
    api: [
      "https://explorer.kmd.zelcore.io/api/",
      "https://www.kmdexplorer.io/api/"
    ],
    pathunix: "komodo",
    path: "Komodo",
    unit: "KMD",
    config: "komodo",
    rpcport: 7771,
    testnetrpcport: 17771,
    type: "zcash",
    explorer: [
      "https://explorer.kmd.zelcore.io/tx/",
      "https://www.kmdexplorer.io/tx/"
    ],
    logolink: "./img/assets/KMD.svg",
    node: ["explorer.kmd.zelcore.io", "www.kmdexplorer.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#00edd3"
  },
  zcoin: {
    coin: "zcoin",
    name: "Zcoin",
    uri: ["zcoin", "xzc"],
    pubKeyHash: "52",
    scriptHash: "07",
    normalAddress: "a",
    scriptAddress: "3",
    normalAddressB: "Z",
    scriptAddressB: "4",
    wif: "d2",
    slip: 136,
    addresses: [],
    api: [
      "https://explorer.zcoin.zelcore.io/api/",
      "https://insight.zcoin.io/api/",
      "https://explorer.zcoin.io/api/"
    ],
    pathunix: "zcoin",
    path: "Zcoin",
    unit: "XZC",
    config: "zcoin",
    rpcport: 8888,
    testnetrpcport: 18888,
    type: "btc",
    explorer: [
      "https://explorer.zcoin.zelcore.io/tx/",
      "https://insight.zcoin.io/tx/",
      "https://explorer.zcoin.io/tx/"
    ],
    logolink: "./img/assets/XZC.svg",
    node: [
      "explorer.zcoin.zelcore.io",
      "insight.zcoin.io",
      "explorer.zcoin.io"
    ],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#3fad54"
  },
  usdt: {
    coin: "usdt",
    name: "Tether",
    uri: ["tether", "usdt"],
    pubKeyHash: "00",
    scriptHash: "05",
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "1",
    scriptAddressB: "3",
    wif: "80",
    slip: 0,
    addresses: [],
    api: ["https://api.omniexplorer.info"],
    pathunix: "usdt",
    path: "Tether",
    unit: "USDT",
    config: "usdt",
    rpcport: 8332,
    type: "omni",
    explorer: ["https://omniexplorer.info/tx/"],
    logolink: "./img/assets/USDT.svg",
    node: ["omniexplorer.info"],
    fee: 0.0000226,
    feepolicy: {
      economy: 7,
      normal: 15,
      fast: 30
    },
    color: "#26a17a"
  },
  // usdtERC: {
  //   coin: "usdtERC",
  //   name: "Tether ERC20",
  //   uri: ["tether", "usdt"],
  //   addresses: [],
  //   api: [
  //     "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=",
  //   ],
  //   unit: "USDT",
  //   type: "eth",
  //   explorer: [
  //     "https://etherscan.io/tx/",
  //   ],
  //   logolink: "./img/assets/USDT.svg",
  //   node: [
  //     "https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3",
  //   ],
  //   fee: 63000,
  //   feepolicy: {
  //     economy: 10,
  //     normal: 15,
  //     fast: 20,
  //   },
  //   contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  //   color: "#26a17a",
  //   decimals: 6,
  // },
  zero: {
    coin: "zero",
    name: "Zero",
    uri: ["zero"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    slip: 19173,
    addresses: [],
    api: [
      "https://explorer.zer.zelcore.io/api/",
      "https://insight.zerocurrency.io/insight/api/"
    ],
    pathunix: "zero",
    path: "Zero",
    unit: "ZER",
    config: "zero",
    rpcport: 23811,
    testnetrpcport: 23812,
    type: "zcash",
    explorer: [
      "https://explorer.zer.zelcore.io/tx/",
      "https://insight.zerocurrency.io/insight/tx/"
    ],
    logolink: "./img/assets/ZER.svg",
    node: ["explorer.zer.zelcore.io", "insight.zerocurrency.io"],
    fee: 0.0000226,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#000000"
  },
  bitcoincash: {
    coin: "bitcoincash",
    name: "Bitcoin Cash",
    uri: ["bitcoincash", "bch"],
    pubKeyHash: "00",
    scriptHash: "05",
    normalAddress: "1",
    scriptAddress: "3",
    normalAddressB: "q",
    scriptAddressB: "p",
    wif: "80",
    slip: 145,
    addresses: [],
    api: [
      "bch.imaginary.cash",
      "blackie.c3-soft.com",
      "electron.jochen-hoenicke.de"
    ],
    proxy: [
      "https://proxy.genx.zelcore.io/?server=bch.imaginary.cash&port=50002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.grs.zelcore.io/?server=bch.imaginary.cash&port=50002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.sin.zelcore.io/?server=bch.imaginary.cash&port=50002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.genx.zelcore.io/?server=blackie.c3-soft.com&port=50002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.grs.zelcore.io/?server=blackie.c3-soft.com&port=50002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.sin.zelcore.io/?server=blackie.c3-soft.com&port=50002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.genx.zelcore.io/?server=electron.jochen-hoenicke.de&port=51002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.grs.zelcore.io/?server=electron.jochen-hoenicke.de&port=51002&contype=tls&coin=bitcoincash&call=",
      "https://proxy.sin.zelcore.io/?server=electron.jochen-hoenicke.de&port=51002&contype=tls&coin=bitcoincash&call="
    ],
    pathunix: "bitcoincash",
    path: "Bitcoin Cash",
    unit: "BCH",
    config: "bitcoin",
    rpcport: 8332,
    testnetrpcport: 18332,
    type: "electrum",
    explorer: [
      "https://blockchair.com/bitcoin-cash/transaction/",
      "https://explorer.bitcoin.com/bch/tx/"
    ],
    logolink: "./img/assets/BCH.svg",
    node: ["blockdozer.com"],
    fee: 0.0000226,
    feepolicy: {
      economy: 7,
      normal: 15,
      fast: 30
    },
    color: "#4cca47"
  },
  arcblock: {
    coin: "arcblock",
    name: "ArcBlock",
    uri: ["arcblock", "abt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb98d4c97425d9908e66e53a6fdf673acca0be986&address="
    ],
    unit: "ABT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ABT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
    color: "#54f5f4",
    decimals: 18
  },
  adex: {
    coin: "adex",
    name: "AdEx",
    uri: ["adex", "adx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4470bb87d77b963a013db939be332f927f2b992e&address="
    ],
    unit: "ADX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ADX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4470bb87d77b963a013db939be332f927f2b992e",
    color: "#1b75bc",
    decimals: 4
  },
  aeternity: {
    coin: "aeternity",
    name: "Aeternity",
    uri: ["aeternity", "ae"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d&address="
    ],
    unit: "AE",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/AE.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
    color: "#de3f6b",
    decimals: 18
  },
  airswap: {
    coin: "airswap",
    name: "AirSwap",
    uri: ["airswap", "ast"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x27054b13b1b798b345b591a4d22e6562d47ea75a&address="
    ],
    unit: "AST",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/AST.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    color: "#00a3ff",
    decimals: 4
  },
  bigbom: {
    coin: "bigbom",
    name: "Bigbom",
    uri: ["bigbom", "bbo"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x84f7c44b6fed1080f647e354d552595be2cc602f&address="
    ],
    unit: "BBO",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BBO.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x84f7c44b6fed1080f647e354d552595be2cc602f",
    color: "#4dae4a",
    decimals: 18
  },
  appcoins: {
    coin: "appcoins",
    name: "AppCoins",
    uri: ["appcoins", "appc"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db&address="
    ],
    unit: "APPC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/APPC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
    color: "#fe6b79",
    decimals: 18
  },
  bluzelle: {
    coin: "bluzelle",
    name: "Bluzelle",
    uri: ["bluzelle", "blz"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5732046a883704404f284ce41ffadd5b007fd668&address="
    ],
    unit: "BLZ",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BLZ.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x5732046a883704404f284ce41ffadd5b007fd668",
    color: "#18578c",
    decimals: 18
  },
  bancor: {
    coin: "bancor",
    name: "Bancor",
    uri: ["bancor", "bnt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c&address="
    ],
    unit: "BNT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BNT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    color: "#000d2b",
    decimals: 18
  },
  coinfi: {
    coin: "coinfi",
    name: "CoinFi",
    uri: ["coinfi", "cofi"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3136ef851592acf49ca4c825131e364170fa32b3&address="
    ],
    unit: "COFI",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/COFI.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x3136ef851592acf49ca4c825131e364170fa32b3",
    color: "#23adf0",
    decimals: 18
  },
  dai: {
    coin: "dai",
    name: "Sai",
    uri: ["sai"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359&address="
    ],
    unit: "SAI",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SAI.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    color: "#FFCA26",
    decimals: 18
  },
  digixgoldtoken: {
    coin: "digixgoldtoken",
    name: "Digix Gold",
    uri: ["digixgoldtoken", "dgx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf&address="
    ],
    unit: "DGX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DGX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
    color: "#c09f57",
    decimals: 9
  },
  electrify: {
    coin: "electrify",
    name: "Electrify",
    uri: ["electrify.asia", "electrify", "elec"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd49ff13661451313ca1553fd6954bd1d9b6e02b9&address="
    ],
    unit: "ELEC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ELEC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    color: "#f90",
    decimals: 18
  },
  aelf: {
    coin: "aelf",
    name: "Aelf",
    uri: ["aelf", "elf"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e&address="
    ],
    unit: "ELF",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ELF.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e",
    color: "#2b60bf",
    decimals: 18
  },
  enjincoin: {
    coin: "enjincoin",
    name: "EnjinCoin",
    uri: ["enjincoin", "enj"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c&address="
    ],
    unit: "ENJ",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ENJ.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    color: "#63c0e3",
    decimals: 18
  },
  storj: {
    coin: "storj",
    name: "Storj",
    uri: ["storj"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac&address="
    ],
    unit: "STORJ",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/STORJ.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    color: "#2683ff",
    decimals: 8
  },
  iost: {
    coin: "iost",
    name: "IOST",
    uri: ["iost"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab&address="
    ],
    unit: "IOST",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/IOST.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
    color: "#000000",
    decimals: 18
  },
  dent: {
    coin: "dent",
    name: "DENT",
    uri: ["dent"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3597bfd533a99c9aa083587b074434e61eb0a258&address="
    ],
    unit: "DENT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DENT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    color: "#fa2922",
    decimals: 8
  },
  ethlend: {
    coin: "ethlend",
    name: "ETHLend",
    uri: ["ethlend", "lend"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x80fB784B7eD66730e8b1DBd9820aFD29931aab03&address="
    ],
    unit: "LEND",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/LEND.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
    color: "#00acc7",
    decimals: 18
  },
  chainlink: {
    coin: "chainlink",
    name: "ChainLink",
    uri: ["chainlink", "link"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x514910771af9ca656af840dff83e8264ecf986ca&address="
    ],
    unit: "LINK",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/LINK.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x514910771af9ca656af840dff83e8264ecf986ca",
    color: "#2A5ADA",
    decimals: 18
  },
  decentraland: {
    coin: "decentraland",
    name: "Decentraland",
    uri: ["decentraland", "mana"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0f5d2fb29fb7d3cfee444a200298f468908cc942&address="
    ],
    unit: "MANA",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MANA.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    color: "#bfb5af",
    decimals: 18
  },
  loopring: {
    coin: "loopring",
    name: "Loopring",
    uri: ["loopring", "lrc"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xEF68e7C694F40c8202821eDF525dE3782458639f&address="
    ],
    unit: "LRC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/LRC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xEF68e7C694F40c8202821eDF525dE3782458639f",
    color: "#1c60ff",
    decimals: 18
  },
  qash: {
    coin: "qash",
    name: "QASH",
    uri: ["qash"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6&address="
    ],
    unit: "QASH",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/QASH.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
    color: "#1348e8",
    decimals: 6
  },
  iconomi: {
    coin: "iconomi",
    name: "Iconomi",
    uri: ["iconomi", "icn"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x888666CA69E0f178DED6D75b5726Cee99A87D698&address="
    ],
    unit: "ICN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ICN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x888666CA69E0f178DED6D75b5726Cee99A87D698",
    color: "#466496",
    decimals: 18
  },
  mco: {
    coin: "mco",
    name: "MCO",
    uri: ["monaco", "mco"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb63b606ac810a52cca15e44bb630fd42d8d1d83d&address="
    ],
    unit: "MCO",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MCO.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
    color: "#002d72",
    decimals: 8
  },
  poet: {
    coin: "poet",
    name: "po.et",
    uri: ["po.et", "poet", "poe"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195&address="
    ],
    unit: "POE",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/POE.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
    color: "#43b880",
    decimals: 8
  },
  polymath: {
    coin: "polymath",
    name: "Polymath",
    uri: ["polymath", "poly"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec&address="
    ],
    unit: "POLY",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/POLY.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    color: "#252e6a",
    decimals: 18
  },
  powerledger: {
    coin: "powerledger",
    name: "Power Ledger",
    uri: ["powerledger", "powr"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x595832f8fc6bf59c85c527fec3740a1b7a361269&address="
    ],
    unit: "POWR",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/POWR.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    color: "#00cdd7",
    decimals: 6
  },
  ripiocredit: {
    coin: "ripiocredit",
    name: "Ripio Credit",
    uri: ["ripiocreditnetwork", "ripiocredit", "rcn"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6&address="
    ],
    unit: "RCN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/RCN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    color: "#4155ff",
    decimals: 18
  },
  raidentoken: {
    coin: "raidentoken",
    name: "Raiden Token",
    uri: ["raidentoken", "rdn"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6&address="
    ],
    unit: "RDN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/RDN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    color: "#000000",
    decimals: 18
  },
  requestnetwork: {
    coin: "requestnetwork",
    name: "Request Network",
    uri: ["requestnetwork", "req"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8f8221afbb33998d8584a2b05749ba73c37a938a&address="
    ],
    unit: "REQ",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/REQ.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    color: "#6cfdcc",
    decimals: 18
  },
  status: {
    coin: "status",
    name: "Status",
    uri: ["status", "snt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x744d70fdbe2ba4cf95131626614a1763df805b9e&address="
    ],
    unit: "SNT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SNT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 240000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    color: "#505db7",
    decimals: 18
  },
  salt: {
    coin: "salt",
    name: "SALT",
    uri: ["salt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4156D3342D5c385a87D264F90653733592000581&address="
    ],
    unit: "SALT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SALT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4156D3342D5c385a87D264F90653733592000581",
    color: "#40b2b5",
    decimals: 8
  },
  storm: {
    coin: "storm",
    name: "STORM",
    uri: ["storm"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433&address="
    ],
    unit: "STORM",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/STORM.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433",
    color: "#6b38df",
    decimals: 18
  },
  eidoo: {
    coin: "eidoo",
    name: "Eidoo",
    uri: ["eidoo", "edo"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xced4e93198734ddaff8492d525bd258d49eb388e&address="
    ],
    unit: "EDO",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/EDO.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xced4e93198734ddaff8492d525bd258d49eb388e",
    color: "#234858",
    decimals: 18
  },
  trueusd: {
    coin: "trueusd",
    name: "TrueUSD",
    uri: ["trueusd", "tusd"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0000000000085d4780b73119b644ae5ecd22b376&address="
    ],
    unit: "TUSD",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/TUSD.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x0000000000085d4780b73119b644ae5ecd22b376",
    color: "#56cabd",
    decimals: 18
  },
  dentacoin: {
    coin: "dentacoin",
    name: "Dentacoin",
    uri: ["dentacoin", "dcn"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address="
    ],
    unit: "DCN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DCN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
    color: "#041e42",
    decimals: 0
  },
  wax: {
    coin: "wax",
    name: "WAX",
    uri: ["wax"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x39Bb259F66E1C59d5ABEF88375979b4D20D98022&address="
    ],
    unit: "WAX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/WAX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x39Bb259F66E1C59d5ABEF88375979b4D20D98022",
    color: "#f78e1e",
    decimals: 8
  },
  wings: {
    coin: "wings",
    name: "Wings",
    uri: ["wings"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x667088b212ce3d06a1b553a7221E1fD19000d9aF&address="
    ],
    unit: "WINGS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/WINGS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
    color: "#46f1ff",
    decimals: 18
  },
  data: {
    coin: "data",
    name: "Data",
    uri: ["data"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x69b148395ce0015c13e36bffbad63f49ef874e03&address="
    ],
    unit: "DTA",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DTA.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x69b148395ce0015c13e36bffbad63f49ef874e03",
    color: "#70d463",
    decimals: 18
  },
  funfair: {
    coin: "funfair",
    name: "FunFair",
    uri: ["funfair", "fun"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x419d0d8bdd9af5e606ae2232ed285aff190e711b&address="
    ],
    unit: "FUN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/FUN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    color: "#e42c84",
    decimals: 8
  },
  kin: {
    coin: "kin",
    name: "KIN",
    uri: ["kin"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5&address="
    ],
    unit: "KIN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/KIN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
    color: "#003ec5",
    decimals: 18
  },
  zclassic: {
    coin: "zclassic",
    name: "Zclassic",
    uri: ["zclassic", "zcl"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    slip: 147,
    addresses: [],
    api: ["https://explorer.zcl.zelcore.io/api/"],
    pathunix: "zclassic",
    path: "Zclassic",
    unit: "ZCL",
    config: "zclassic",
    rpcport: 8023,
    testnetrpcport: 18023,
    type: "zcash",
    explorer: ["https://explorer.zcl.zelcore.io/tx/"],
    logolink: "./img/assets/ZCL.svg",
    node: ["explorer.zcl.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#c86f35"
  },
  sirin: {
    coin: "sirin",
    name: "Sirin",
    uri: ["sirinlabstoken", "sirin", "srn"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25&address="
    ],
    unit: "SRN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SRN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    color: "#070f12",
    decimals: 18
  },
  aurora: {
    coin: "aurora",
    name: "Aurora",
    uri: ["aurora", "aoa"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9ab165d795019b6d8b3e971dda91071421305e5a&address="
    ],
    unit: "AOA",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/AOA.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x9ab165d795019b6d8b3e971dda91071421305e5a",
    color: "#6ee4e5",
    decimals: 18
  },
  theta: {
    coin: "theta",
    name: "Theta",
    uri: ["theta"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3883f5e181fccaF8410FA61e12b59BAd963fb645&address="
    ],
    unit: "THETA",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/THETA.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x3883f5e181fccaF8410FA61e12b59BAd963fb645",
    color: "#29b3eb",
    decimals: 18
  },
  dash: {
    coin: "dash",
    name: "Dash",
    uri: ["dash"],
    pubKeyHash: "4C",
    scriptHash: "10",
    wif: "CC",
    normalAddress: "X",
    normalAddressB: "X",
    scriptAddress: "7",
    scriptAddressB: "7",
    slip: 5,
    addresses: [],
    api: [
      "https://explorer.dash.zelcore.io/api/",
      "https://insight.dash.org/insight/api/",
      "https://explorer.mydashwallet.org/api/"
    ],
    pathunix: "dashcore",
    path: "DashCore",
    unit: "DASH",
    config: "dash",
    rpcport: 9998,
    testnetrpcport: 19998,
    type: "btc",
    explorer: [
      "https://explorer.dash.zelcore.io/tx/",
      "https://insight.dash.org/insight/tx/",
      "https://explorer.mydashwallet.org/tx/"
    ],
    logolink: "./img/assets/DASH.svg",
    node: [
      "explorer.dash.zelcore.io",
      "insight.dash.org",
      "explorer.mydashwallet.org"
    ],
    fee: 0.00001,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10
    },
    color: "#008de4"
  },
  monero: {
    coin: "monero",
    name: "Monero",
    uri: ["monero", "xmr"],
    openAlias: "xmr",
    pubKeyHash: "4C",
    wif: "CC",
    normalAddress: "4",
    normalAddressB: "X",
    scriptAddress: "7",
    scriptAddressB: "7",
    nettype: 0,
    coinUnitPlaces: 12,
    addressPrefix: 18,
    slip: 128,
    addresses: [],
    api: [
      "https://zel.mymonero.com:8443",
      "https://api.mymonero.com:8443",
      "https://backend.xmr.zelcore.io",
      "https://backend2.xmr.zelcore.io",
      "https://backend3.xmr.zelcore.io"
    ],
    pathunix: "monero",
    path: "Monero",
    unit: "XMR",
    config: "monero",
    rpcport: 9998,
    testnetrpcport: 19998,
    type: "cryptonight",
    explorer: [
      "https://explorer.xmr.zelcore.io/tx/",
      "https://moneroblocks.info/tx/",
      "https://xmrchain.net/tx/"
    ],
    logolink: "./img/assets/XMR.svg",
    node: ["explorer.xmr.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 2,
      fast: 3
    },
    color: "#ff6600"
  },
  usdc: {
    coin: "usdc",
    name: "USD Coin",
    uri: ["usdcoin", "usdc"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&address="
    ],
    unit: "USDC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/USDC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    color: "#2775CA",
    decimals: 6
  },
  gusd: {
    coin: "gusd",
    name: "Gemini Dollar",
    uri: ["geminidollar", "gusd"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd&address="
    ],
    unit: "GUSD",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GUSD.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
    color: "#20bcd4",
    decimals: 2
  },
  pax: {
    coin: "pax",
    name: "Paxos Standard",
    uri: ["paxosstandard", "pax"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8e870d67f660d95d5be530380d0ec0bd388289e1&address="
    ],
    unit: "PAX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/PAX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    color: "#00522C",
    decimals: 18
  },
  etc: {
    coin: "etc",
    name: "Ethereum Classic",
    uri: ["ethereumclassic", "etc"],
    slip: 61,
    addresses: [],
    api: ["https://blockscout.com/etc/mainnet/api/?module=account&action="],
    unit: "ETC",
    type: "etc",
    explorer: ["https://blockscout.com/etc/mainnet/tx/"],
    logolink: "./img/assets/ETC.svg",
    node: [
      "https://etc-geth.0xinfra.com",
      "https://etc-parity.0xinfra.com",
      "https://etc.guarda.co",
      "https://ethereumclassic.network",
      "https://web3.gastracker.io"
    ],
    fee: 35000,
    feepolicy: {
      economy: 0.1,
      normal: 0.3,
      fast: 1
    },
    color: "#34fa99",
    contractAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    decimals: 18
  },
  coni: {
    coin: "coni",
    name: "Coni",
    uri: ["coni"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x2c949199cff14aeaf1b33d64db01f48fb57f592f&address="
    ],
    unit: "CONI",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/CONI.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x2c949199cff14aeaf1b33d64db01f48fb57f592f",
    color: "#465FF0",
    decimals: 8
  },
  tok: {
    coin: "tok",
    name: "Tokok",
    uri: ["tokok", "tok"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9a49f02e128a8e989b443a8f94843c0918bf45e7&address="
    ],
    unit: "TOK",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/TOK.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x9a49f02e128a8e989b443a8f94843c0918bf45e7",
    color: "#f5692c",
    decimals: 8
  },
  genesis: {
    coin: "genesis",
    name: "Genesis",
    uri: ["genesisnetwork", "genesis", "genx"],
    pubKeyHash: "1c",
    scriptHash: "3f",
    wif: "30",
    electrum: "genesis",
    normalAddress: "C",
    normalAddressB: "C",
    scriptAddress: "S",
    scriptAddressB: "S",
    slip: 19181,
    addresses: [],
    api: ["explorer.genx.zelcore.io"],
    proxy: [
      "https://proxy.genx.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=genesis&call=",
      "https://proxy.grs.zelcore.io/?server=explorer.genx.zelcore.io&port=50002&contype=tls&coin=genesis&call="
    ],
    pathunix: "genesis",
    path: "Genesis",
    unit: "GENX",
    config: "genesis",
    rpcport: 7234,
    testnetrpcport: 17234,
    type: "electrum",
    explorer: ["https://explorer.genx.zelcore.io/tx/"],
    logolink: "./img/assets/GENX.svg",
    node: ["explorer.genx.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#1ea1ef"
  },
  por: {
    coin: "por",
    name: "Proof Of Review",
    uri: ["proofofreview", "por"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x08c507046e12cd1538741d067d28411f2b922062&address="
    ],
    unit: "POR",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/POR.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x08c507046e12cd1538741d067d28411f2b922062",
    color: "#101010",
    decimals: 18
  },
  bzedge: {
    coin: "bzedge",
    name: "BZEdge",
    uri: ["bzedge", "bze"],
    pubKeyHash: "1cb8",
    scriptHash: "1cbd",
    normalAddress: "t1",
    scriptAddress: "t3",
    normalAddressB: "t1",
    scriptAddressB: "t3",
    wif: "80",
    slip: 19175,
    addresses: [],
    api: [
      "https://explorer.bze.zelcore.io/api/",
      "https://explorer.getbze.com/api/"
    ],
    pathunix: "bzedge",
    path: "BZEdge",
    unit: "BZE",
    config: "bzedge",
    rpcport: 1980,
    testnetrpcport: 11980,
    type: "zcash",
    explorer: [
      "https://explorer.bze.zelcore.io/tx/",
      "https://explorer.getbze.com/tx/"
    ],
    logolink: "./img/assets/BZE.svg",
    node: ["explorer.bze.zelcore.io", "explorer.getbze.com"],
    fee: 0.00001,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#00c3e2"
  },
  bithereum: {
    coin: "bithereum",
    name: "Bithereum",
    uri: ["bithereum", "bth"],
    pubKeyHash: "19",
    scriptHash: "28",
    wif: "80",
    electrum: "bithereum",
    normalAddress: "B",
    normalAddressB: "B",
    scriptAddress: "H",
    scriptAddressB: "H",
    slip: 19183,
    addresses: [],
    port: 50002,
    contype: "tls",
    api: ["explorer.bth.zelcore.io"],
    proxy: [
      "https://proxy.bth.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=bithereum&call=",
      "https://proxy.genx.zelcore.io/?server=explorer.bth.zelcore.io&port=50002&contype=tls&coin=bithereum&call="
    ],
    pathunix: "bithereum",
    path: "Bithereum",
    unit: "BTH",
    config: "bithereum",
    rpcport: 18554,
    testnetrpcport: 19554,
    type: "electrum",
    explorer: ["https://explorer.bth.zelcore.io/tx/"],
    logolink: "./img/assets/BTH.svg",
    node: ["explorer.bth.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#F8C545"
  },
  adt: {
    coin: "adt",
    name: "AdToken",
    uri: ["adtoken", "adt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd0d6d6c5fe4a677d343cc433536bb717bae167dd&address="
    ],
    unit: "ADT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ADT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
    color: "#2350a4",
    decimals: 9
  },
  mft: {
    coin: "mft",
    name: "Mainframe Token",
    uri: ["mainframe", "mainframetoken", "mft"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdf2c7238198ad8b389666574f2d8bc411a4b7428&address="
    ],
    unit: "MFT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MFT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    color: "#da1157",
    decimals: 18
  },
  atl: {
    coin: "atl",
    name: "ATLANT",
    uri: ["atlant", "atl"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05&address="
    ],
    unit: "ATL",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ATL.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
    color: "#004dff",
    decimals: 18
  },
  ant: {
    coin: "ant",
    name: "Aragon",
    uri: ["aragon", "ant"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x960b236A07cf122663c4303350609A66A7B288C0&address="
    ],
    unit: "ANT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ANT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x960b236A07cf122663c4303350609A66A7B288C0",
    color: "#01c0e3",
    decimals: 18
  },
  arn: {
    coin: "arn",
    name: "Aeron",
    uri: ["aeron", "arn"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6&address="
    ],
    unit: "ARN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ARN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6",
    color: "#033152",
    decimals: 8
  },
  brd: {
    coin: "brd",
    name: "Bread",
    uri: ["bread", "breadtoken", "brd"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x558ec3152e2eb2174905cd19aea4e34a23de9ad6&address="
    ],
    unit: "BRD",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BRD.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
    color: "#302442",
    decimals: 18
  },
  rep: {
    coin: "rep",
    name: "Augur",
    uri: ["augur", "rep"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1985365e9f78359a9B6AD760e32412f4a445E862&address="
    ],
    unit: "REP",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/REP.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    color: "#553580",
    decimals: 18
  },
  qkc: {
    coin: "qkc",
    name: "QuarkChain Token",
    uri: ["quarkchaintoken", "quarkchain", "qkc", "quark"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664&address="
    ],
    unit: "QKC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/QKC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
    color: "#00cbff",
    decimals: 18
  },
  loom: {
    coin: "loom",
    name: "LOOM",
    uri: ["loomnetwork", "loom"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0&address="
    ],
    unit: "LOOM",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/LOOM.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    color: "#5756e6",
    decimals: 18
  },
  eurs: {
    coin: "eurs",
    name: "STASIS EURS",
    uri: ["stasiseurs", "eurs", "stasis"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdb25f211ab05b1c97d595516f45794528a807ad8&address="
    ],
    unit: "EURS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/EURS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    color: "#2468e4",
    decimals: 2
  },
  commercium: {
    coin: "commercium",
    name: "Commercium",
    uri: ["commercium", "cmm"],
    pubKeyHash: "1c",
    scriptHash: "33",
    normalAddress: "C",
    scriptAddress: "M",
    normalAddressB: "C",
    scriptAddressB: "M",
    wif: "8c",
    slip: 19177,
    addresses: [],
    api: [
      "https://explorer.cmm.zelcore.io/api/",
      "https://explorer.commercium.net/api/"
    ],
    pathunix: "commercium",
    path: "Commercium",
    unit: "CMM",
    config: "commercium",
    rpcport: 12020,
    testnetrpcport: 22020,
    type: "zcash",
    explorer: [
      "https://explorer.cmm.zelcore.io/tx/",
      "https://explorer.commercium.net/tx/"
    ],
    logolink: "./img/assets/CMM.svg",
    node: ["explorer.cmm.zelcore.io", "explorer.commercium.net"],
    fee: 0.00001,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10
    },
    color: "#0097ff"
  },
  groestlcoin: {
    coin: "groestlcoin",
    name: "Groestlcoin",
    uri: ["groestlcoin", "grs"],
    pubKeyHash: "24",
    scriptHash: "05",
    wif: "80",
    electrum: "groestlcoin",
    normalAddress: "F",
    normalAddressB: "g",
    scriptAddress: "3",
    scriptAddressB: "3",
    slip: 17,
    addresses: [],
    api: [
      "explorer.grs.zelcore.io",
      "electrum10.groestlcoin.org",
      "electrum11.groestlcoin.org",
      "electrum13.groestlcoin.org",
      "electrum14.groestlcoin.org"
    ],
    proxy: [
      "https://proxy.grs.zelcore.io/?server=127.0.0.1&port=56002&contype=tls&coin=groestlcoin&call=",
      "https://proxy.bth.zelcore.io/?server=explorer.grs.zelcore.io&port=56002&contype=tls&coin=groestlcoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum10.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum10.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum10.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum11.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum11.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum11.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum13.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum13.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum13.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum14.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum14.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum14.groestlcoin.org&port=50001&contype=tls&coin=groestlcoin&call="
    ],
    pathunix: "groestlcoin",
    path: "Groestlcoin",
    unit: "GRS",
    config: "groestlcoin",
    rpcport: 1441,
    testnetrpcport: 17766,
    type: "electrum",
    explorer: [
      "https://explorer.grs.zelcore.io/tx/",
      "https://groestlsight.groestlcoin.org/tx/"
    ],
    logolink: "./img/assets/GRS.svg",
    node: ["explorer.grs.zelcore.io", "groestlsight.groestlcoin.org"],
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#0e98be"
  },
  gunthy: {
    coin: "gunthy",
    name: "GUNTHY",
    uri: ["gunthy"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x3684b581db1f94b721ee0022624329feb16ab653&address="
    ],
    unit: "GUNTHY",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GUNTHY.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x3684b581db1f94b721ee0022624329feb16ab653",
    color: "#C79D5F",
    decimals: 18
  },
  metal: {
    coin: "metal",
    name: "Metal",
    uri: ["metal", "mtl"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xF433089366899D83a9f26A773D59ec7eCF30355e&address="
    ],
    unit: "MTL",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MTL.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xF433089366899D83a9f26A773D59ec7eCF30355e",
    color: "#ff3667",
    decimals: 8
  },
  ethos: {
    coin: "ethos",
    name: "EthOS",
    uri: ["ethos"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5af2be193a6abca9c8817001f45744777db30756&address="
    ],
    unit: "ETHOS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ETHOS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x5af2be193a6abca9c8817001f45744777db30756",
    color: "#0fc",
    decimals: 8
  },
  singularitynet: {
    coin: "singularitynet",
    name: "SingularityNET",
    uri: ["singularitynet", "agi"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8eb24319393716668d768dcec29356ae9cffe285&address="
    ],
    unit: "AGI",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/AGI.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x8eb24319393716668d768dcec29356ae9cffe285",
    color: "#5a2ff1",
    decimals: 8
  },
  ambrosus: {
    coin: "ambrosus",
    name: "Ambrosus",
    uri: ["ambrosus", "amb"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce&address="
    ],
    unit: "AMB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/AMB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
    color: "#8ae3ff",
    decimals: 18
  },
  blockmasoncreditprotocol: {
    coin: "blockmasoncreditprotocol",
    name: "BlockMason Credit Protocol",
    uri: ["blockmasoncreditprotocol", "bcpt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1c4481750daa5ff521a2a7490d9981ed46465dbd&address="
    ],
    unit: "BCPT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BCPT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
    color: "#f90",
    decimals: 18
  },
  blox: {
    coin: "blox",
    name: "Blox",
    uri: ["blox", "cdt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af&address="
    ],
    unit: "CDT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/CDT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
    color: "#047fff",
    decimals: 18
  },
  celertoken: {
    coin: "celertoken",
    name: "CelerToken",
    uri: ["celertoken", "celer", "celr"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4f9254c83eb525f9fcf346490bbb3ed28a81c667&address="
    ],
    unit: "CELR",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/CELR.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
    color: "#000",
    decimals: 18
  },
  cindicator: {
    coin: "cindicator",
    name: "Cindicator",
    uri: ["cindicator", "cnd"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd4c435f5b09f855c3317c8524cb1f586e42795fa&address="
    ],
    unit: "CND",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/CND.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    color: "#0d0520",
    decimals: 18
  },
  streamrdatacoin: {
    coin: "streamrdatacoin",
    name: "Streamr DATAcoin",
    uri: ["streamrdatacoin", "streamr", "datacoin"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0cf0ee63788a0849fe5297f3407f701e122cc023&address="
    ],
    unit: "DATA",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DATA.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    color: "#ff5c00",
    decimals: 18
  },
  agrello: {
    coin: "agrello",
    name: "Agrello",
    uri: ["agrello", "dlt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x07e3c70653548B04f0A75970C1F81B4CBbFB606f&address="
    ],
    unit: "DLT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DLT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x07e3c70653548B04f0A75970C1F81B4CBbFB606f",
    color: "#4c82ed",
    decimals: 18
  },
  dock: {
    coin: "dock",
    name: "Dock",
    uri: ["dock"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe5dada80aa6477e85d09747f2842f7993d0df71c&address="
    ],
    unit: "DOCK",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DOCK.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
    color: "#2c2b3f",
    decimals: 18
  },
  everex: {
    coin: "everex",
    name: "Everex",
    uri: ["everex", "evx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8&address="
    ],
    unit: "EVX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/EVX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
    color: "#3f54b7",
    decimals: 4
  },
  gifto: {
    coin: "gifto",
    name: "Gifto",
    uri: ["gifto", "gto"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xc5bbae50781be1669306b9e001eff57a2957b09d&address="
    ],
    unit: "GTO",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GTO.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xc5bbae50781be1669306b9e001eff57a2957b09d",
    color: "#5f318f",
    decimals: 5
  },
  genesisvision: {
    coin: "genesisvision",
    name: "Genesis Vision",
    uri: ["genesisvision", "gvt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x103c3a209da59d3e7c4a89307e66521e081cfdf0&address="
    ],
    unit: "GVT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GVT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x103c3a209da59d3e7c4a89307e66521e081cfdf0",
    color: "#16b9ad",
    decimals: 18
  },
  holotoken: {
    coin: "holotoken",
    name: "HoloToken",
    uri: ["holo", "holotoken", "hot"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6c6ee5e31d828de241282b9606c8e98ea48526e2&address="
    ],
    unit: "HOT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/HOT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    color: "#00a6ae",
    decimals: 18
  },
  insolar: {
    coin: "insolar",
    name: "Insolar",
    uri: ["insolar", "ins"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5b2e4a700dfbc560061e957edec8f6eeeb74a320&address="
    ],
    unit: "INS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/INS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x5b2e4a700dfbc560061e957edec8f6eeeb74a320",
    color: "#263238",
    decimals: 10
  },
  iotex: {
    coin: "iotex",
    name: "IoTeX",
    uri: ["iotex", "iotx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6fb3e0a217407efff7ca062d46c26e5d60a14d69&address="
    ],
    unit: "IOTX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/IOTX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    color: "#00b4a0",
    decimals: 18
  },
  selfkey: {
    coin: "selfkey",
    name: "SelfKey",
    uri: ["selfkey", "key"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4cc19356f2d37338b9802aa8e8fc58b0373296e7&address="
    ],
    unit: "KEY",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/KEY.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    color: "#23e6fe",
    decimals: 18
  },
  lunyr: {
    coin: "lunyr",
    name: "Lunyr",
    uri: ["lunyr", "lun"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xfa05A73FfE78ef8f1a739473e462c54bae6567D9&address="
    ],
    unit: "LUN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/LUN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
    color: "#f14e10",
    decimals: 18
  },
  monetha: {
    coin: "monetha",
    name: "Monetha",
    uri: ["monetha", "mth"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaf4dce16da2877f8c9e00544c93b62ac40631f16&address="
    ],
    unit: "MTH",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MTH.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
    color: "#001c3e",
    decimals: 5
  },
  oax: {
    coin: "oax",
    name: "oax",
    uri: ["oax"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x701c244b988a513c945973defa05de933b23fe1d&address="
    ],
    unit: "OAX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/OAX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x701c244b988a513c945973defa05de933b23fe1d",
    color: "#161c32",
    decimals: 18
  },
  ost: {
    coin: "ost",
    name: "OST",
    uri: ["ost"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x8eb24319393716668d768dcec29356ae9cffe285&address="
    ],
    unit: "OST",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/OST.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x8eb24319393716668d768dcec29356ae9cffe285",
    color: "#34445b",
    decimals: 18
  },
  populous: {
    coin: "populous",
    name: "Populous",
    uri: ["populous", "ppt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a&address="
    ],
    unit: "PPT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/PPT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
    color: "#5ca0f6",
    decimals: 8
  },
  quantstamp: {
    coin: "quantstamp",
    name: "Quantstamp",
    uri: ["quantstamp", "qsp"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d&address="
    ],
    unit: "QSP",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/QSP.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
    color: "#4cbbfd",
    decimals: 18
  },
  ren: {
    coin: "ren",
    name: "Ren",
    uri: ["ren"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x408e41876cccdc0f92210600ef50372656052a38&address="
    ],
    unit: "REN",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/REN.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x408e41876cccdc0f92210600ef50372656052a38",
    color: "#001b3a",
    decimals: 18
  },
  iexecrlc: {
    coin: "iexecrlc",
    name: "iExec RLC",
    uri: ["iexecrlc", "rlc"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x607F4C5BB672230e8672085532f7e901544a7375&address="
    ],
    unit: "RLC",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/RLC.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x607F4C5BB672230e8672085532f7e901544a7375",
    color: "#fbd503",
    decimals: 9
  },
  singulardtv: {
    coin: "singulardtv",
    name: "SingularDTV",
    uri: ["singulardtv", "sngls"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009&address="
    ],
    unit: "SNGLS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/SNGLS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
    color: "#b30d23",
    decimals: 0
  },
  tierion: {
    coin: "tierion",
    name: "Tierion",
    uri: ["tierion", "tnt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8&address="
    ],
    unit: "TNT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/TNT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
    color: "#ff4081",
    decimals: 8
  },
  viberate: {
    coin: "viberate",
    name: "Viberate",
    uri: ["viberate", "vib"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724&address="
    ],
    unit: "VIB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/VIB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
    color: "#ff1e43",
    decimals: 18
  },
  vibe: {
    coin: "vibe",
    name: "VIBE",
    uri: ["vibe"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xe8ff5c9c75deb346acac493c463c8950be03dfba&address="
    ],
    unit: "VIBE",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/VIBE.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
    color: "#00bfff",
    decimals: 18
  },
  tael: {
    coin: "tael",
    name: "Tael",
    uri: ["tael", "wabi"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x286bda1413a2df81731d4930ce2f862a35a609fe&address="
    ],
    unit: "WABI",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/WABI.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x286bda1413a2df81731d4930ce2f862a35a609fe",
    color: "#ff5847",
    decimals: 18
  },
  wepower: {
    coin: "wepower",
    name: "WePower",
    uri: ["wepower", "wpr"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4CF488387F035FF08c371515562CBa712f9015d4&address="
    ],
    unit: "WPR",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/WPR.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4CF488387F035FF08c371515562CBa712f9015d4",
    color: "#f5e74b",
    decimals: 18
  },
  dibicoin: {
    coin: "dibicoin",
    name: "Dibicoin",
    uri: ["dibicoin", "dibi"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xf39e4b22050334aaf04259d30d73e78bfee8ab58&address="
    ],
    unit: "DIBI",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DIBI.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xf39e4b22050334aaf04259d30d73e78bfee8ab58",
    color: "#183c87",
    decimals: 3
  },
  bitcoinzero: {
    coin: "bitcoinzero",
    name: "Bitcoin Zero",
    uri: ["bitcoinzero", "bzx"],
    pubKeyHash: "4b",
    scriptHash: "22",
    wif: "d2",
    electrum: "bitcoinzero",
    normalAddress: "X",
    normalAddressB: "X",
    scriptAddress: "E",
    scriptAddressB: "F",
    slip: 284,
    addresses: [],
    api: ["explorer.bzx.zelcore.io"],
    proxy: [
      "https://proxy.bzx.zelcore.io/?server=127.0.0.1&port=55002&contype=tls&coin=bitcoinzero&call=",
      "https://proxy.grs.zelcore.io/?server=explorer.bzx.zelcore.io&port=55002&contype=tls&coin=bitcoinzero&call=",
      "https://proxy.genx.zelcore.io/?server=explorer.bzx.zelcore.io&port=55002&contype=tls&coin=bitcoinzero&call=",
      "https://proxy.bth.zelcore.io/?server=explorer.bzx.zelcore.io&port=55002&contype=tls&coin=bitcoinzero&call="
    ],
    pathunix: "bitcoinzero",
    path: "Bitcoinzero",
    unit: "BZX",
    config: "bitcoinzero",
    rpcport: 29201,
    testnetrpcport: 29201,
    type: "electrum",
    explorer: ["https://explorer.bzx.zelcore.io/tx/"],
    logolink: "./img/assets/BZX.svg",
    node: ["explorer.bzx.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#000000"
  },
  etherparty: {
    coin: "etherparty",
    name: "Etherparty",
    uri: ["etherparty", "fueltoken", "fuel"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xea38eaa3c86c8f9b751533ba2e562deb9acded40&address="
    ],
    unit: "FUEL",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/FUEL.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
    color: "#3d4c7c",
    decimals: 18
  },
  bnbbinance: {
    coin: "bnbbinance",
    name: "BNB",
    uri: [
      "binancecoin",
      "binancechain",
      "binance",
      "bnbbinance",
      "binancebnb",
      "bnb"
    ],
    slip: 714,
    addresses: [],
    api: [
      "https://dex.binance.org/",
      "https://dex-european.binance.org/",
      "https://dex-asiapacific.binance.org/",
      "https://dex-atlantic.binance.org/"
    ],
    unit: "BNB",
    type: "bnb",
    explorer: ["https://explorer.binance.org/tx/"],
    logolink: "./img/assets/BNB.svg",
    node: ["https://explorer.binance.org/"],
    fee: 0.00125,
    feepolicy: {
      economy: 0.5,
      normal: 1,
      fast: 2
    },
    color: "#f3ba2f",
    decimals: 8
  },
  ripple: {
    coin: "ripple",
    name: "XRP",
    uri: ["ripple", "xrp"],
    // pubKeyHash: "3c",
    // scriptHash: "7a",
    // normalAddress: "R",
    // normalAddressB: "R",
    // scriptAddress: "r",
    // scriptAddressB: "r",
    // wif: "80",
    slip: 144,
    addresses: [],
    api: ["https://data.ripple.com/v2/accounts/"],
    pathunix: "ripple",
    path: "Ripple",
    unit: "XRP",
    config: "ripple",
    rpcport: 5005,
    type: "ripple",
    explorer: ["https://xrpscan.com/tx/"],
    logolink: "./img/assets/XRP.svg",
    node: ["wss://s1.ripple.com"],
    fee: 0.00002,
    feepolicy: {
      economy: 1,
      normal: 5,
      fast: 10
    },
    color: "#0a93eb"
  },
  // xcash: {
  //   coin: "xcash",
  //   name: "X-CASH",
  //   uri: [
  //     "xcash",
  //     "x-cash",
  //   ],
  //   openAlias: "xca",
  //   pubKeyHash: "4C",
  //   wif: "CC",
  //   normalAddress: "4",
  //   normalAddressB: "X",
  //   scriptAddress: "7",
  //   scriptAddressB: "7",
  //   nettype: 10,
  //   coinUnitPlaces: 6,
  //   addressPrefix: 0x5c134,
  //   slip: 128,
  //   addresses: [],
  //   api: [
  //     "https://backend.xcash.zelcore.io",
  //   ],
  //   pathunix: "xcash",
  //   path: "Xcash",
  //   unit: "XCASH",
  //   config: "xcash",
  //   rpcport: 9998,
  //   testnetrpcport: 19998,
  //   type: "cryptonight",
  //   explorer: [
  //     "https://explorer.xcash.zelcore.io/tx/",
  //   ],
  //   logolink: "./img/assets/XCASH.svg",
  //   node: [
  //     "explorer.xcash.zelcore.io",
  //   ],
  //   fee: 0.00001,
  //   feepolicy: {
  //     economy: 1,
  //     normal: 2,
  //     fast: 3,
  //   },
  //   color: "#ff6600",
  // },
  axe: {
    coin: "axe",
    name: "Axe",
    uri: ["axe", "axerunners", "axecore"],
    pubKeyHash: "37",
    scriptHash: "10",
    normalAddress: "P",
    scriptAddress: "7",
    normalAddressB: "P",
    scriptAddressB: "7",
    wif: "cc",
    slip: 4242,
    addresses: [],
    api: [
      "https://explorer.axe.zelcore.io/api/",
      "https://insight.axecore.net/api/"
    ],
    pathunix: "axecore",
    path: "AxeCore",
    unit: "AXE",
    config: "axe",
    rpcport: 9337,
    testnetrpcport: 19337,
    type: "btc",
    explorer: [
      "https://explorer.axe.zelcore.io/tx/",
      "https://insight.axecore.net/tx/"
    ],
    logolink: "./img/assets/AXE.svg",
    node: ["explorer.axe.zelcore.io", "insight.axecore.net"],
    fee: 0.0000226,
    feepolicy: {
      economy: 3,
      normal: 5,
      fast: 10
    },
    color: "#00a0ea"
  },
  unussedleo: {
    coin: "unussedleo",
    name: "Unus Sed Leo",
    uri: ["unussedleo", "leo"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3&address="
    ],
    unit: "LEO",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/LEO.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    color: "#0B171F",
    decimals: 18
  },
  beaxy: {
    coin: "beaxy",
    name: "Beaxy",
    uri: ["beaxy", "beaxyexchangetoken", "beaxytoken", "beaxyexchange", "bxy"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x827d53c8170af52625f414bde00326fc8a085e86&address="
    ],
    unit: "BXY",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BXY.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x827d53c8170af52625f414bde00326fc8a085e86",
    color: "#00acac",
    decimals: 18
  },
  stableusd: {
    coin: "stableusd",
    name: "StableUSD",
    uri: ["stableusd", "stably", "usds"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe&address="
    ],
    unit: "USDS",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/USDS.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe",
    color: "#5c90e8",
    decimals: 6
  },
  nuke: {
    coin: "nuke",
    name: "Half Life",
    uri: ["halflife", "nuke", "nuketoken"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xc58c0Fca06908E66540102356f2E91edCaEB8D81&address="
    ],
    unit: "NUKE",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/NUKE.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xc58c0Fca06908E66540102356f2E91edCaEB8D81",
    color: "#fb351f",
    decimals: 18
  },
  eos: {
    coin: "eos",
    name: "EOS",
    uri: ["eos"],
    wif: "80",
    slip: 194,
    addresses: [],
    chainID: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
    api: [
      "https://api.eossweden.org",
      "https://api.eosdetroit.io",
      "https://eos.eoscafeblock.com",
      "https://eosbp.atticlab.net",
      "https://eos.greymass.com:443"
    ],
    pathunix: "eos",
    path: "Eos",
    unit: "EOS",
    config: "eos",
    rpcport: 8080,
    type: "eos",
    explorer: [
      "https://eosflare.io/tx/",
      "https://www.eosx.io/tx/",
      "https://eospark.com/tx/"
    ],
    logolink: "./img/assets/EOS.svg",
    node: ["https://www.eosx.io/", "https://eosflare.io/"],
    fee: 0,
    feepolicy: {
      economy: 1,
      normal: 2,
      fast: 3
    },
    color: "#443f54"
  },
  dogecoin: {
    coin: "dogecoin",
    name: "Dogecoin",
    uri: ["dogecoin", "doge"],
    pubKeyHash: "1e",
    scriptHash: "16",
    wif: "9e",
    electrum: "dogecoin",
    normalAddress: "D",
    normalAddressB: "D",
    scriptAddress: "9",
    scriptAddressB: "A",
    slip: 3,
    addresses: [],
    api: [
      "explorer.doge.zelcore.io",
      "electrum3.cipig.net",
      "electrum2.cipig.net",
      "electrum1.cipig.net"
    ],
    proxy: [
      "https://proxy.doge.zelcore.io/?server=127.0.0.1&port=55002&contype=tls&coin=dogecoin&call=",
      "https://proxy.zel.network/?server=127.0.0.1&port=55002&contype=tls&coin=dogecoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum3.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum3.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum3.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum2.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum2.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum2.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.bth.zelcore.io/?server=electrum1.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.genx.zelcore.io/?server=electrum1.cipig.net&port=10060&contype=tls&coin=dogecoin&call=",
      "https://proxy.sin.zelcore.io/?server=electrum1.cipig.net&port=10060&contype=tls&coin=dogecoin&call="
    ],
    pathunix: "dogecoin",
    path: "Dogecoin",
    unit: "DOGE",
    config: "dogecoin",
    rpcport: 22555,
    testnetrpcport: 44555,
    type: "electrum",
    explorer: [
      "https://explorer.doge.zelcore.io/tx/",
      "http://dogechain.info/tx/"
    ],
    logolink: "./img/assets/DOGE.svg",
    node: ["explorer.doge.zelcore.io", "dogechain.info"],
    fee: 0,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#ba9f33"
  },
  digibyte: {
    coin: "digibyte",
    name: "DigiByte",
    uri: ["digibyte", "dgb"],
    pubKeyHash: "1e",
    scriptHash: "3f",
    wif: "80",
    electrum: "digibyte",
    normalAddress: "D",
    normalAddressB: "D",
    scriptAddress: "S",
    scriptAddressB: "S",
    slip: 20,
    addresses: [],
    api: [
      "explorer.dgb.zelcore.io",
      "electrum3.cipig.net",
      "electrum2.cipig.net",
      "electrum1.cipig.net"
    ],
    proxy: [
      "https://proxy.dgb.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=digibyte&call=",
      "https://proxy.bth.zelcore.io/?server=electrum3.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.genx.zelcore.io/?server=electrum3.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.sin.zelcore.io/?server=electrum3.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.bth.zelcore.io/?server=electrum2.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.genx.zelcore.io/?server=electrum2.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.sin.zelcore.io/?server=electrum2.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.bth.zelcore.io/?server=electrum1.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.genx.zelcore.io/?server=electrum1.cipig.net&port=10059&contype=tls&coin=digibyte&call=",
      "https://proxy.sin.zelcore.io/?server=electrum1.cipig.net&port=10059&contype=tls&coin=digibyte&call="
    ],
    pathunix: "digibyte",
    path: "DigiByte",
    unit: "DGB",
    config: "digibyte",
    rpcport: 14022,
    testnetrpcport: 14023,
    type: "electrum",
    explorer: [
      "https://explorer.dgb.zelcore.io/tx/",
      "https://digiexplorer.info/tx/"
    ],
    logolink: "./img/assets/DGB.svg",
    node: ["explorer.dgb.zelcore.io", "digiexplorer.info"],
    fee: 0.00001,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#002352"
  },
  sinovate: {
    coin: "sinovate",
    name: "SINOVATE",
    uri: ["sinovate", "sin"],
    pubKeyHash: "3f",
    scriptHash: "05",
    wif: "bf",
    electrum: "sinovate",
    normalAddress: "S",
    normalAddressB: "S",
    scriptAddress: "3",
    scriptAddressB: "3",
    slip: 20,
    addresses: [],
    api: ["explorer.sin.zelcore.io"],
    proxy: [
      "https://proxy.sin.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=sinovate&call="
    ],
    pathunix: "sin",
    path: "SIN",
    unit: "SIN",
    config: "sin",
    rpcport: 20971,
    testnetrpcport: 20981,
    type: "electrum",
    explorer: ["https://explorer.sin.zelcore.io/tx/"],
    logolink: "./img/assets/SIN.svg",
    node: ["explorer.sin.zelcore.io"],
    fee: 0.00001,
    feepolicy: {
      economy: 2500,
      normal: 5000,
      fast: 10000
    },
    color: "#ffffff"
  },
  neo: {
    coin: "neo",
    name: "NEO",
    uri: ["neo"],
    addresses: [],
    api: ["https://api.neoscan.io"],
    unit: "NEO",
    type: "neo",
    contractScriptHash:
      "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b",
    explorer: ["https://neoscan.io/transaction/", "https://neotracker.io/tx/"],
    logolink: "./img/assets/NEO.svg",
    node: [
      "http://seed9.ngd.network:10332",
      "https://seed0.cityofzion.io:443",
      "http://rpc1.go.nspcc.ru:10332",
      "http://seed1.red4sec.com:10332",
      "http://seed1.aphelion-neo.com:10332",
      "http://seed5.neo.org:10332"
    ],
    fee: 0,
    feepolicy: {
      economy: 0,
      normal: 0,
      fast: 0
    },
    color: "#00E599",
    decimals: 18
  },
  gas: {
    coin: "gas",
    name: "GAS",
    uri: ["gas"],
    addresses: [],
    api: ["https://api.neoscan.io"],
    unit: "GAS",
    type: "neo",
    contractScriptHash:
      "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7",
    explorer: ["https://neoscan.io/transaction/", "https://neotracker.io/tx/"],
    logolink: "./img/assets/GAS.svg",
    node: [
      "http://seed9.ngd.network:10332",
      "https://seed0.cityofzion.io:443",
      "http://rpc1.go.nspcc.ru:10332",
      "http://seed1.red4sec.com:10332",
      "http://seed1.aphelion-neo.com:10332",
      "http://seed5.neo.org:10332"
    ],
    fee: 0,
    feepolicy: {
      economy: 0,
      normal: 0,
      fast: 0
    },
    color: "#00E599",
    decimals: 18
  },
  neofish: {
    coin: "neofish",
    name: "NEOFISH",
    uri: ["neoFish", "fish"],
    addresses: [],
    api: ["https://api.neoscan.io"],
    unit: "FISH",
    type: "neo",
    contractScriptHash: "833ff069a6f04488192bbfd9334699719c8c9c63",
    explorer: ["https://neoscan.io/transaction/", "https://neotracker.io/tx/"],
    logolink: "./img/assets/NEO.svg",
    node: [
      "http://seed9.ngd.network:10332",
      "https://seed0.cityofzion.io:443",
      "http://rpc1.go.nspcc.ru:10332",
      "http://seed1.red4sec.com:10332",
      "http://seed1.aphelion-neo.com:10332",
      "http://seed5.neo.org:10332"
    ],
    fee: 0,
    feepolicy: {
      economy: 0,
      normal: 0,
      fast: 0
    },
    color: "#58BF00",
    decimals: 4
  },
  stellar: {
    coin: "stellar",
    name: "Stellar Lumens",
    uri: ["stellar", "xlm"],
    slip: 148,
    wif: "80",
    addresses: [],
    api: ["https://horizon.stellar.org"],
    pathunix: "stellar",
    path: "Stellar",
    unit: "XLM",
    config: "stellar",
    type: "stellar",
    explorer: [
      "https://stellarscan.io/transaction/",
      "https://steexp.com/tx/",
      "https://stellarchain.io/tx/"
    ],
    logolink: "./img/assets/XLM.svg",
    node: [
      "https://stellarscan.io/",
      "https://steexp.com/",
      "https://stellarchain.io/"
    ],
    fee: 0.00001,
    feepolicy: {
      economy: 0.00001,
      normal: 0.00005,
      fast: 0.0001
    },
    color: "#08b5e5"
  },
  tron: {
    coin: "tron",
    name: "TRON",
    uri: ["tron"],
    pubKeyHash: "1e",
    scriptHash: "16",
    wif: "9e",
    normalAddress: "T",
    normalAddressB: "T",
    slip: 195,
    addresses: [],
    api: ["https://api.trongrid.io/"],
    pathunix: "tron",
    path: "Tron",
    unit: "TRX",
    config: "tron",
    rpcport: 50051,
    type: "tron",
    explorer: [
      "https://www.trxplorer.io/tx/",
      "https://tronscan.org/#/transaction/"
    ],
    logolink: "./img/assets/TRX.svg",
    node: ["https://api.trongrid.io/"],
    fee: 0,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#eb0029"
  },
  bittorrent: {
    coin: "bittorrent",
    name: "BitTorrent",
    uri: ["bittorrent"],
    pubKeyHash: "1e",
    scriptHash: "16",
    wif: "9e",
    normalAddress: "T",
    normalAddressB: "T",
    coinNumber: "1002000",
    addresses: [],
    api: ["https://api.trongrid.io/"],
    pathunix: "bittorrent",
    path: "BitTorrent",
    unit: "BTT",
    config: "tron",
    rpcport: 50051,
    type: "tron",
    explorer: [
      "https://www.trxplorer.io/tx/",
      "https://tronscan.org/#/transaction/"
    ],
    logolink: "./img/assets/BTT.svg",
    node: ["https://api.trongrid.io/"],
    fee: 0,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#e81a4c"
  },
  gcstar: {
    coin: "gcstar",
    name: "GCSTAR",
    uri: ["starbucks", "GCSTAR"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xb2d25d27f3f8f2265bedc400f00dac8b7521106a&address="
    ],
    unit: "GCSTAR",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GCSTAR.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xb2d25d27f3f8f2265bedc400f00dac8b7521106a",
    color: "#05714b",
    decimals: 18
  },
  gctgt: {
    coin: "gctgt",
    name: "GCTGT",
    uri: ["target", "GCTGT"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xed1a361830628c87ca3e283450101b833ae26114&address="
    ],
    unit: "GCTGT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GCTGT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xed1a361830628c87ca3e283450101b833ae26114",
    color: "#c00",
    decimals: 18
  },
  gcwal: {
    coin: "gcwal",
    name: "GCWAL",
    uri: ["walmart", "GCWAL"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x0bd0e8e9ce51945e3295f12a344ccaf6893f43f9&address="
    ],
    unit: "GCWAL",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GCWAL.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x0bd0e8e9ce51945e3295f12a344ccaf6893f43f9",
    color: "#007dc6",
    decimals: 18
  },
  gcbest: {
    coin: "gcbest",
    name: "GCBEST",
    uri: ["bestbuy", "GCBEST"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1388f1635aed7fc09526bd66f317e88aea888dd5&address="
    ],
    unit: "GCBEST",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GCBEST.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x1388f1635aed7fc09526bd66f317e88aea888dd5",
    color: "#0046be",
    decimals: 18
  },
  gchd: {
    coin: "gchd",
    name: "GCHD",
    uri: ["homedepot", "GCHD"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa33d3b1bc1bf9fd9987c9e3f5e81722e12767a72&address="
    ],
    unit: "GCHD",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GCHD.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xa33d3b1bc1bf9fd9987c9e3f5e81722e12767a72",
    color: "#f96302",
    decimals: 18
  },
  gclowe: {
    coin: "gclowe",
    name: "GCLOWE",
    uri: ["lowes", "GCLOWE"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x1675c092306d147d65ee81976d5d3bec99a3bb91&address="
    ],
    unit: "GCLOWE",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GCLOWE.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 150000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x1675c092306d147d65ee81976d5d3bec99a3bb91",
    color: "#004990",
    decimals: 18
  },
  ontology: {
    coin: "ontology",
    name: "Ontology",
    uri: ["ontology", "ONT"],
    wif: "80",
    slip: 1024,
    addresses: [],
    fiatRate: 0,
    api: ["https://explorer.ont.io"],
    pathunix: "ontology",
    path: "ontology",
    unit: "ONT",
    config: "ontology",
    type: "ontology",
    explorer: ["https://explorer.ont.io/transaction/"],
    logolink: "./img/assets/ONT.svg",
    node: ["http://dappnode1.ont.io:20334/"],
    fee: 0.01,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#489ED7"
  },
  ontologygas: {
    coin: "ontologygas",
    name: "Ontology Gas",
    uri: ["ontologygas", "ONG"],
    addresses: [],
    fiatRate: 0,
    api: ["https://explorer.ont.io"],
    pathunix: "ontologygas",
    path: "ontologygas",
    unit: "ONG",
    config: "ontology",
    type: "ontology",
    explorer: ["https://explorer.ont.io/transaction/"],
    logolink: "./img/assets/ONG.svg",
    node: ["http://dappnode1.ont.io:20334/"],
    fee: 0.01,
    feepolicy: {
      economy: 5,
      normal: 10,
      fast: 20
    },
    color: "#489ED7"
  },
  dmme: {
    coin: "dmme",
    name: "DMme",
    uri: ["dmme"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9556f8ee795d991ff371f547162d5efb2769425f&address="
    ],
    unit: "DMME",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/DMME.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x9556f8ee795d991ff371f547162d5efb2769425f",
    color: "#7BC619",
    decimals: 18
  },
  veriblock: {
    coin: "veriblock",
    name: "VeriBlock",
    uri: ["veriblock", "vbk"],
    addresses: [],
    api: [
      "https://explore.veriblock.org/api/address/",
      "https://explorer.vbk.zelcore.io/api/address/"
    ],
    unit: "VBK",
    type: "veriblock",
    explorer: ["https://explore.veriblock.org/tx/"],
    logolink: "./img/assets/VBK.svg",
    node: ["https://proxy.vbk.zelcore.io/"],
    fee: 0.00045,
    feepolicy: {
      economy: 1.5,
      normal: 2,
      fast: 5
    },
    color: "#12284B"
  },
  huobitoken: {
    coin: "huobitoken",
    name: "Huobi Token",
    uri: ["huobitoken", "ht"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6f259637dcd74c767781e37bc6133cd6a68aa161&address="
    ],
    unit: "HT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/HT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    color: "#357CE1",
    decimals: 18
  },
  busd: {
    coin: "busd",
    name: "Binance USD",
    uri: ["busd", "binanceusd"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x4Fabb145d64652a948d72533023f6E7A623C7C53&address="
    ],
    unit: "BUSD",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BUSD.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    color: "#F0B90B",
    decimals: 18
  },
  okb: {
    coin: "okb",
    name: "OKB",
    uri: ["okb"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9556f8ee790x75231f58b43240c9718dd58b4967c5114342a86c5d991ff371f547162d5efb2769425f&address="
    ],
    unit: "OKB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/OKB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x75231f58b43240c9718dd58b4967c5114342a86c",
    color: "#5795F1",
    decimals: 18
  },
  bitforextoken: {
    coin: "bitforextoken ",
    name: "BitForex Token",
    uri: ["bitforextoken", "bf"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5b71bee9d961b1b848f8485eec8d8787f80217f5&address="
    ],
    unit: "BF",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/BF.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x5b71bee9d961b1b848f8485eec8d8787f80217f5",
    color: "#14C393",
    decimals: 18
  },
  mxtoken: {
    coin: "mxtoken",
    name: "MX Token",
    uri: ["mxtoken", "mx"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x11eef04c884e24d9b7b4760e7476d06ddf797f36&address="
    ],
    unit: "MX",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/MX.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x11eef04c884e24d9b7b4760e7476d06ddf797f36",
    color: "#41B37D",
    decimals: 18
  },
  zbtoken: {
    coin: "zbtoken",
    name: "ZB Token",
    uri: ["zbtoken", "zb"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xbd0793332e9fb844a52a205a233ef27a5b34b927&address="
    ],
    unit: "ZB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/ZB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xbd0793332e9fb844a52a205a233ef27a5b34b927",
    color: "#E6201A",
    decimals: 18
  },
  hotbittoken: {
    coin: "hotbittoken",
    name: "Hotbit Token",
    uri: ["hotbittoken", "hotbit", "htb"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x6be61833fc4381990e82d7d4a9f4c9b3f67ea941&address="
    ],
    unit: "HTB",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/HTB.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x6be61833fc4381990e82d7d4a9f4c9b3f67ea941",
    color: "#1AB394",
    decimals: 18
  },
  huobipooltoken: {
    coin: "huobipooltoken",
    name: "Huobi Pool Token",
    uri: ["huobipooltoken", "hpt"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xa66daa57432024023db65477ba87d4e7f5f95213&address="
    ],
    unit: "HPT",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/HPT.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0xa66daa57432024023db65477ba87d4e7f5f95213",
    color: "#357CE1",
    decimals: 18
  },
  golfcoin: {
    coin: "golfcoin",
    name: "Golfcoin",
    uri: ["golfcoin", "golf"],
    addresses: [],
    api: [
      "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x020c710646e23ab868dbe5b88004892797fe4efb&address="
    ],
    unit: "GOLF",
    type: "eth",
    explorer: ["https://etherscan.io/tx/"],
    logolink: "./img/assets/GOLF.svg",
    node: ["https://mainnet.infura.io/v3/97c8bf358b9942a9853fab1ba93dc5b3"],
    fee: 63000,
    feepolicy: {
      economy: 10,
      normal: 15,
      fast: 20
    },
    contractAddress: "0x020c710646e23ab868dbe5b88004892797fe4efb",
    color: "#ffffff",
    decimals: 18
  }
};
