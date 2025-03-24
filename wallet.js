//https://frequent-solitary-butterfly.ethereum-sepolia.quiknode.pro/98e933a2f50b9b08f6eb1ee1acdee47bd1bfadb3

const {ethers, providers} = require('ethers')
const node = "https://frequent-solitary-butterfly.ethereum-sepolia.quiknode.pro/98e933a2f50b9b08f6eb1ee1acdee47bd1bfadb3"

const provider = new ethers.providers.JsonRpcProvider(node)


async function main(){
    
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet)
    console.log(wallet.mnemonic)
    console.log(wallet.privateKey)
    console.log('--------------')
    //console.log(wallet._signingKey())
    //console.log(wallet._mnemonic())

}
main()