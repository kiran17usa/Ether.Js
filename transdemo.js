//https://tiniest-polished-meadow.quiknode.pro/fd51dafb1847111ab30343b4594d284f5a8d0b27

const {ethers, providers} = require('ethers')
const node = "https://tiniest-polished-meadow.quiknode.pro/fd51dafb1847111ab30343b4594d284f5a8d0b27"

const provider = new ethers.providers.JsonRpcProvider(node)

async function main(){
    const blockNumberDemo = await provider.getBlockNumber()
    console.log(blockNumberDemo)
    const blockdemo = await provider.getBlock(blockNumberDemo)
    const transinfo = await provider.getTransaction('0xbc3fde8189ba6b61e242e20562ada31646b6836c352a83cc4b15033da5628072')
    console.log(transinfo.from)
    console.log(transinfo.to)
    console.log(ethers.utils.formatEther(transinfo.value))

    


}
main()