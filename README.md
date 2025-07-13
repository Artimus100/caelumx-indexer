# 🌿 CaelumX Solana Indexer

A real-time, scalable Solana indexer customized for the **CaelumX carbon credit platform**.

This indexer tracks carbon credit-related on-chain instructions (e.g., `RetireCredit`, `MintCredit`, `ListCredit`) from the CaelumX Solana program, parses relevant data, and stores it in a PostgreSQL database using Prisma ORM.

---

## ✨ Features

- 🔁 Real-time indexing using Solana logs & transactions
- 🧠 Parses Anchor IDL-based instructions for CaelumX
- 🛢️ Uses **PostgreSQL + Prisma** (replaces MongoDB)
- 📦 Modular architecture: Indexer container + control server
- 📊 Easily extendable for dashboards, analytics, or APIs

---

## 📦 Folder Structure

```bash
caelumx-indexer/
├── indexer.yaml            # Config with CaelumX program ID and options
├── interfaces.ts           # Generated from IDL (Anchor)
├── mapping.ts              # Custom instruction handlers (RetireCredit, etc.)
├── DBFunctions.ts          # Prisma-based DB interaction
├── prisma/
│   ├── schema.prisma       # Prisma data model
│   └── migrations/         # Prisma migration history
├── index.ts                # Main indexer container entrypoint
├── main-server/            # Indexer management server (optional)
├── indexerClient/          # CLI to generate scaffold & configs
└── README.md