//https://tiniest-polished-meadow.quiknode.pro/fd51dafb1847111ab30343b4594d284f5a8d0b27

const {ethers, providers} = require('ethers')
const node = "https://smart-aged-silence.quiknode.pro/dee4d683d6f8b0c369e6772536f50b34aa150415"

const provider = new ethers.providers.JsonRpcProvider(node)

async function main(){
    const balanceamt = await provider.getBalance('adamback.eth')
    console.log(ethers.utils.formatEther(balanceamt))
    


}
main()