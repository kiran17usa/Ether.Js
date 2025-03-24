//https://frequent-solitary-butterfly.ethereum-sepolia.quiknode.pro/98e933a2f50b9b08f6eb1ee1acdee47bd1bfadb3

//0x88d86cAa39D7E4dD21c085283531B9EC018472dD
//joke february scorpion phrase desert icon siege equal habit upgrade help crime
//0x1aa939024c99c89e461be9f8981196391ceb27bf5832bfde65476d8a7ba82389


//0x5226e8D58aD09927395C56B268682a25EDA7c554
//effort prevent oak bicycle deposit crew canal tunnel liberty worry object then
//0xa9a29d057026293e9c6aa09b293d957f97700a8b05c60320ecf56bcf7e9b6c15

const {ethers, providers} = require('ethers')
const node = "https://frequent-solitary-butterfly.ethereum-sepolia.quiknode.pro/98e933a2f50b9b08f6eb1ee1acdee47bd1bfadb3"

const provider = new ethers.providers.JsonRpcProvider(node)
const private = '0x1aa939024c99c89e461be9f8981196391ceb27bf5832bfde65476d8a7ba82389'
const receiver = '0x5226e8D58aD09927395C56B268682a25EDA7c554'

const wallet = new ethers.Wallet(private, provider)
const amttosend = '0.0002'

const tx ={
    to: '0x88d86cAa39D7E4dD21c085283531B9EC018472dD',
    value: ethers.utils.parseEther(amttosend)
}

async function main(){
    
    const balanceamt = await provider.getBalance('0x88d86cAa39D7E4dD21c085283531B9EC018472dD')
    console.log(ethers.utils.formatEther(balanceamt))
    
    //wallet.sendTransaction(tx)
    //.then((txobj)=>{
    //    console.log('txHash', txobj.hash)
    //})

    //const wallet = ethers.Wallet.createRandom()
    //console.log(wallet)
   // console.log(wallet.mnemonic)
    //console.log(wallet.privateKey)
    //console.log('--------------')
    //console.log(wallet._signingKey())
    //console.log(wallet._mnemonic())

}
main()

/*
fungible token
ethreum request for comment 20

erc20 token - any coin can be interchangeble to another erc20

1. interoperability
2. divisibility
3. standardization
4. transparancy


*/