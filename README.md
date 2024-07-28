# Dotto - Lotto on Polkadot

Dotto - Lotto on Polkadot revolutionizes the lottery system by integrating blockchain technology to ensure secure and transparent ticket authentication. Traditional lotteries face challenges like fraud, tampering, and lack of transparency. Dotto addresses these issues by linking each lottery ticket to a unique wallet address on the Polkadot blockchain, ensuring only the ticket with the correct wallet address is authenticated as the winner.

## Overview

The project demonstrates this by placing lottery tickets under audience chairs, with only one ticket containing the winning wallet address. This setup showcases how merely having a ticket with winning numbers isn't enough; blockchain verification is crucial. By using Polkadot, we leverage its interoperability and security features, allowing seamless integration of our authentication process across different parachains.

Polkadot's decentralized nature ensures tamper-proof and immutable records of ticket issuance and verification, enhancing trust among participants. The use of wallet addresses for ticket authentication eliminates the need for a centralized authority, reducing the risk of fraud and ensuring instant, transparent verification. Dotto - Lotto exemplifies how blockchain can transform the lottery industry, making it more secure, trustworthy, and efficient, while highlighting the practical applications of Polkadot's blockchain and parachain capabilities.

## Architecture

![Dotto Architecture](./diagrams/dotto_architecture.png)

## Requirements

### Functional Requirements
1. **Ticket Issuance**: Each ticket must be linked to a unique wallet address on the Polkadot blockchain.
2. **Verification Process**: Only the ticket with the correct wallet address should be authenticated as the winner.
3. **Blockchain Integration**: Use Polkadot's blockchain for secure and transparent ticket authentication.

### Non-Functional Requirements
1. **Security**: Ensure tamper-proof and immutable records of ticket issuance and verification.
2. **Scalability**: The system should handle a large number of participants.
3. **Interoperability**: Seamless integration across different parachains.

## Components

1. **Ticket Generator**: Generates lottery tickets and links them to unique wallet addresses.
2. **Blockchain Interface**: Interacts with the Polkadot blockchain to store and verify ticket information.
3. **Verification System**: Authenticates the winning ticket based on the wallet address.

## Technologies Used

- **Polkadot**: For blockchain and parachain capabilities.
- **Smart Contracts**: For issuing and verifying tickets.
- **Frontend**: For user interface and interaction.

## Setup and Installation

### Prerequisites

- Node.js
- npm
- Polkadot.js
