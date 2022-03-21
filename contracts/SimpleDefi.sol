pragma solidity 0.8.0;
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract SimpleDefi {
IERC20 dai;
constructor(address daiAddress) {
    dai = IERC20(daiAddress);
} 
function createTransfer(address recipient, uint amount) external {
    dai.transfer(recipient, amount);
}
}