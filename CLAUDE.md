# CLAUDE.md — thebardchat.github.io

> Claude Code configuration for the `thebardchat/thebardchat.github.io` repository.

---

## Project Overview

This repository is the **public-facing GitHub Pages site** for the ShaneBrain ecosystem — the landing page and project hub at [thebardchat.github.io](https://thebardchat.github.io).

This project operates under the [ShaneTheBrain Constitution](https://github.com/thebardchat/constitution/blob/main/CONSTITUTION.md).

---

## Infrastructure

All `thebardchat` repositories run on the following local-first infrastructure:

| Component | Detail |
|-----------|--------|
| **Compute** | Raspberry Pi 5 (16 GB RAM) |
| **Chassis** | Pironman 5-MAX by Sunfounder (NVMe RAID) |
| **Storage** | 2x WD Blue SN5000 2 TB NVMe — RAID 1 via mdadm |
| **Core path** | `/mnt/shanebrain-raid/shanebrain-core/` |
| **Local AI** | Ollama (llama3.2:1b default) |
| **Vector memory** | Weaviate (Docker, 8080/50051) |
| **MCP server** | FastMCP (port 8008, Streamable HTTP) |
| **Networking** | Tailscale VPN across all nodes |
| **Dev environment** | Claude Code on Pi 5 |

> Pi before cloud. Privacy before convenience. — Pillar 4

---

## Repository Structure

```
thebardchat.github.io/
  index.html               # ShaneBrain ecosystem hub page
  frontend_dashboard.html  # ULTRA dashboard interface
  README.md                # Public-facing repo summary
  CLAUDE.md                # This file — Claude Code project context
```

---

## Working With This Repo

- This is a **static HTML site** served by GitHub Pages — no build step, no dependencies.
- Edits to `index.html` go live on push to `main`.
- **Do not copy** the Constitution into this repo. Link to it instead:
  ```md
  This project operates under the [ShaneTheBrain Constitution](https://github.com/thebardchat/constitution/blob/main/CONSTITUTION.md).
  ```

---

## Credits

Built with Claude (Anthropic) · Runs on Raspberry Pi 5 + Pironman 5-MAX

| Partner | Role |
|---------|------|
| **Claude by Anthropic** · [claude.ai](https://claude.ai) | Co-built this entire ecosystem |
| **Raspberry Pi 5** · [raspberrypi.com](https://www.raspberrypi.com) | Local compute backbone |
| **Pironman 5-MAX** · [pironman.com](https://www.pironman.com) | NVMe RAID 1 chassis that made it real |

---

*[@thebardchat](https://github.com/thebardchat) · Hazel Green, Alabama*

## Claude Code Rules
- Commit and push directly to `main`. Do NOT create branches.
- Run build/test commands before committing.
- Update CLAUDE.md session log before final commit.
