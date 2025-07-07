# Chameleon GPT

This repository contains a monorepo with a minimal setup for the **Chameleon GPT** project. The goal is to provide a starting point for a ChatGPT/DeepSeek-like business assistant.

## Packages

- **frontend** – React 18 + Vite + Tailwind CSS UI
- **backend** – Express API with optional OpenAI proxy
- **python-analyzer** – Microservice for file analysis
- **shared** – Shared utilities and types

Demo data lives in the `data/` directory.

## Development

Each package contains its own `README.md` with instructions. Workspaces are managed via Yarn.