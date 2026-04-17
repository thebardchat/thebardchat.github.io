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
  book/                    # Book landing page
```

---
## Active Projects Tracked on This Site

| Project | Repo / URL | Status |
|---------|-----------|--------|
| you-probably-think-this-book-is-about-you | [/book](https://thebardchat.github.io/book) | Published |
| shanebrain-core | [github.com/thebardchat](https://github.com/thebardchat) | Active |
| angel-cloud | [thebardchat/angel-cloud](https://github.com/thebardchat/angel-cloud) | Active |
| shanebrain-mcp | [thebardchat/shanebrain_mcp](https://github.com/thebardchat/shanebrain_mcp) | Active |
| pulsar-sentinel | [thebardchat/pulsar_sentinel](https://github.com/thebardchat/pulsar_sentinel) | Active |
| mega-crew-stories | [thebardchat.github.io/mega-crew-stories](https://thebardchat.github.io/mega-crew-stories/) | Live |
| thebardchat Twitch | [twitch.tv/thebardchat](https://twitch.tv/thebardchat) | Live |
| BGKPJR-Core-Simulations | [thebardchat/BGKPJR-Core-Simulations](https://github.com/thebardchat/BGKPJR-Core-Simulations) | Active |
| N8N Automation | [thebardchat/N8N](https://github.com/thebardchat/N8N) | Active |
| loudon-desarro | [thebardchat/loudon-desarro](https://github.com/thebardchat/loudon-desarro) | Building |

---
## Community & Streaming

| Platform | Link | Purpose |
|----------|------|---------|
| **Twitch** | [twitch.tv/thebardchat](https://twitch.tv/thebardchat) | Live AI demos, building in public |
| **Discord** | [discord.gg/qST3UfFAr9](https://discord.gg/qST3UfFAr9) | Community hub, MEGA Crew, AI bots |
| **GitHub** | [github.com/thebardchat](https://github.com/thebardchat) | All repos, open builds |

---
## Working With This Repo
- This is a **static HTML site** served by GitHub Pages — no build step, no dependencies.
- Edits to `index.html` go live on push to `main`.
- Do NOT add ``` code fences inside HTML files — they will break the page.
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
| **GitHub** · [github.com](https://github.com) | Version control, Pages hosting, open builds |
| **Twitch** · [twitch.tv/thebardchat](https://twitch.tv/thebardchat) | Building in public, live AI demos |
| **Discord** · [discord.gg/qST3UfFAr9](https://discord.gg/qST3UfFAr9) | Community hub, MEGA Crew, AI bots |

---
*[@thebardchat](https://github.com/thebardchat) · Hazel Green, Alabama*

---
## Claude Code Rules
- Commit and push directly to `main`. Do NOT create branches.
- Run build/test commands before committing.
- Update CLAUDE.md session log before final commit.
- Do NOT insert ``` code fences inside `.html` files — they break GitHub Pages rendering.

## Networking / Deployment
- When working with Tailscale Funnel, remember it strips URL path prefixes. Always use hardcoded base paths rather than server-side form action prefixing for routing.

## Creative Writing
- Never overwrite or rewrite the user's creative voice, prose style, or intentional structural choices (e.g., missing notes, dialogue rhythm). Ask before making stylistic changes to creative writing files.

## General Workflow Rules
- Before setting up repos, SSH keys, or services, check what's already configured on the current machine. Run `ls ~/.ssh/`, `git remote -v`, `tailscale status`, etc. before assuming fresh setup is needed.
- Let's focus on one thing at a time. Don't suggest other improvements until the current goal is fully verified working.
- Before applying changes to all files, show the result on one file first so Shane can verify the approach.
- SRM Concrete North Alabama is Shane's employer — not the mission. The ecosystem exists to help Shane do work and life better, pursue passions, and eventually serve others at scale. Do not frame SRM as the core purpose.

## Git
- For git conflicts, always verify --theirs vs --ours semantics before applying. State which version you're keeping and why before running the command.

## Raspberry Pi Environment
- This user runs services on Raspberry Pi. Be aware: Python 3.13 removed the `cgi` module, Piper TTS needs careful noise_scale tuning to avoid clipping, and aplay conflicts with PipeWire. Prefer `pw-play` or `paplay` for audio playback.
