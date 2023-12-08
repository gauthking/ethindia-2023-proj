// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@semaphore-protocol/contracts/interfaces/ISemaphore.sol";

contract zXDAO {
  struct Member {
    uint256 member_id;
    address member_address;
  }

  struct Proposals {
    uint256 proposalId;
    string title;
    address initiator;
    uint256 forVotes;
    uint256 againstVotes;
    uint256 forPercentage;
    uint256 againstPercentage;
    bool status;
    uint256 timeInitiated;
    uint256 totalVotes;
    uint256 tillTime;
  }

  Member[] public members;
  Proposals[] public proposals;

  uint256 public _proposalId = 0;
  uint256 public _memberCount = 0;

  mapping(address => bool) public registered;
  mapping(uint256 => bool) public completed;

  ISemaphore public semaphore;

  address public semaphoreAddress;

  function checkRegistered() public view returns (bool) {
    return registered[msg.sender];
  }

  constructor(address _semaphoreAddress) {
    semaphoreAddress = _semaphoreAddress;
  }

  function proposalList() public view returns (Proposals[] memory) {
    return proposals;
  }

  function register() public {
    require(registered[msg.sender] == false, "Already Registered");
    _memberCount++;
    members.push(Member(_memberCount, msg.sender));
    registered[msg.sender] = true;
  }

  function addProposal(
    string memory title,
    uint256 timeEnd,
    uint256 depth
  ) public {
    require(registered[msg.sender] == true, "Not registered");
    proposals.push(
      Proposals(
        _proposalId,
        title,
        msg.sender,
        0,
        0,
        0,
        0,
        true,
        block.timestamp,
        0,
        timeEnd
      )
    );
    _proposalId++;
    semaphore.createGroup(_proposalId, depth, address(this));
  }

  function joinProposal(
    uint256 proposalId,
    uint256 identitityCommitment
  ) public {
    require(proposals[proposalId].status == true, "Not Active");
    require(registered[msg.sender] == true, "Not a member");
  }

  function voteOnproposal(uint256 proposalId, uint256 vote) public {
    require(proposals[proposalId].status == true, "Not Active");
    if (vote == 1) {
      proposals[proposalId].forVotes++;
      proposals[proposalId].totalVotes++;
    } else if (vote == 0) {
      proposals[proposalId].againstVotes++;
      proposals[proposalId].totalVotes++;
    }
  }

  function statusProposals() public payable {
    for (uint256 i = 0; i < _proposalId; i++) {
      if (
        (block.timestamp - proposals[i].timeInitiated) >=
        proposals[i].tillTime &&
        completed[i] == false
      ) {
        completed[i] = true;
        proposals[i].status = false;
      }
    }
  }
}
