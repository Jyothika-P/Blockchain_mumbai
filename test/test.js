const {expect}  =require('chai');
const {ethers}  = require('hardhat');

describe('Contract' , () => {
    let sender , reciever, contract,result;
    beforeEach(async() => {
        [sender,reciever] = await ethers.getSigners();
        console.log(sender+" : "+reciever);

        const Transaction = await ethers.getContractFactory("transactioncheck");
        contract = await Transaction.deploy();

    });

    it("function one check", async()=>{
        result = await contract.SettingUniqueId(300);
        await result.wait();
        result = await contract.checkAccount(300);
        expect(result).to.be.equal(sender.address);
    })
})