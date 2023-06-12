//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;


contract transactioncheck {
    
    mapping (uint256 => address )  UniqueId;
    mapping (uint256 => bool)  PresenceCheck;
    
    //function to set the uniqueid
    function SettingUniqueId(uint256 _UltimateDigitPhoneNumber) public {
       require(PresenceCheck[_UltimateDigitPhoneNumber] == false, "The phone number already exists");
        UniqueId[_UltimateDigitPhoneNumber] = msg.sender;
        PresenceCheck[_UltimateDigitPhoneNumber] = true;
    }

    //function to check the linked account
    function checkAccount(uint256 _UltimateDigitPhoneNumber) public view returns(address){
       require(PresenceCheck[_UltimateDigitPhoneNumber] == true, "Phone number not connected to any account");
        return UniqueId[_UltimateDigitPhoneNumber];
    }
}
