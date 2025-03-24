//https://tiniest-polished-meadow.quiknode.pro/fd51dafb1847111ab30343b4594d284f5a8d0b27

const {ethers, providers} = require('ethers')
const node = "https://tiniest-polished-meadow.quiknode.pro/fd51dafb1847111ab30343b4594d284f5a8d0b27"

const provider = new ethers.providers.JsonRpcProvider(node)

async function main(){
    const blockNumberDemo = await provider.getBlockNumber()
    console.log(blockNumberDemo)
    const blockdemo = await provider.getBlock(blockNumberDemo)
    console.log(blockdemo['hash'])
    console.log(blockdemo['number'])
    console.log(blockdemo['timestamp'])
    console.log(blockdemo['miner'])
    


}
main()