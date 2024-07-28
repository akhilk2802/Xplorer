# Space Explorer Game with Three.js and Polkadot

## Overview

Welcome to the Space Explorer Game, a thrilling adventure where players explore space, encounter monsters, and earn NFTs upon defeating them. This game leverages Three.js for the 3D graphics and Polkadot for blockchain integration to ensure secure and transparent NFT management.

## Features

- **3D Space Exploration**: Navigate through a visually stunning space environment built with Three.js.
- **Monster Encounters**: Face various monsters as you explore space.
- **NFT Rewards**: Defeat monsters to earn them as unique NFTs on the Polkadot blockchain.
- **Blockchain Integration**: Utilize Polkadot's blockchain for secure, decentralized, and transparent NFT ownership.

## Architecture

### Components

1. **Game Engine**: Three.js
2. **Blockchain Interface**: Polkadot.js and @thirdweb-dev/sdk
3. **NFT Management**: Smart contracts on the Polkadot blockchain

### Diagram

![Space Explorer Architecture](./diagrams/space_explorer_architecture.png)

## Requirements

### Functional Requirements

1. **Player Movement**: Allow the player to navigate through space.
2. **Monster Interaction**: Detect collisions and interactions between the player and monsters.
3. **NFT Minting**: Mint a unique NFT upon defeating a monster and assign it to the player's wallet.

### Non-Functional Requirements

1. **Performance**: Ensure smooth rendering of 3D graphics.
2. **Security**: Securely manage NFTs on the blockchain.
3. **Scalability**: Handle multiple players and interactions simultaneously.

## Setup and Installation

### Prerequisites

- Node.js
- npm
- Polkadot.js
