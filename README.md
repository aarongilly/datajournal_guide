# Data Journal Guide

This repo is the code that generates https://datajournal.guide

The "real" README is the contents of that site. This is just the Git repo README.

I am using [Quartz Publishing](https://quartz.jzhao.xyz) with [Obsidian](https://obsidian.md). I changed the configuration for Quartz to look for the content in the `guide_vault` folder, rather than the default `content` folder. My Obsidian Vault is fully contained there. 

Publish process:
1. Edit in Obsidian.
2. Open VS Code, Commit & Push

Pretty straightfoward stuff. If I weren't so lazy I'd write a 2 line shell script and then figure out how to trigger it from within Obsidian.

**Build command:**

```shell
npx quartz build --directory=./guide_vault
```