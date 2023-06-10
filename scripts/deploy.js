const { ethers } = require('hardhat');

async function main() {
    const Transaction = await ethers.getContractFactory("transactioncheck");
    const  contract = await Transaction.deploy();
    console.log(contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})