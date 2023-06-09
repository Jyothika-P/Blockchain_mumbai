//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;


contract transactioncheck {
    
    mapping (uint16 => address )  UniqueId;
    mapping (uint16 => bool)  PresenceCheck;
    
    function SettingUniqueId(uint16 _UltimateDigitPhoneNumber) public {
        require(PresenceCheck[_UltimateDigitPhoneNumber] == false);
        UniqueId[_UltimateDigitPhoneNumber] = msg.sender;
        PresenceCheck[_UltimateDigitPhoneNumber] = true;
    }
    function checkAccount(uint16 _UltimateDigitPhoneNumber) public view returns(address){
        require(PresenceCheck[_UltimateDigitPhoneNumber] == true);
        return UniqueId[_UltimateDigitPhoneNumber];
    }
}
