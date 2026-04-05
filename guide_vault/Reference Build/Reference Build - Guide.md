---
aliases:
  - Reference Build Guide
  - Build Guide
tags:
  - ReferenceBuild
---
# Overview

This **Reference Build Guide** documents how to recreate my [[Reference Build - Full Example|Reference Build]]. You can build a Data Journal however you want; but this is a complete, working system — stable, cohesive, and battle-tested. 

The Reference Build is comprised of 3 main components: **Data Store, Automations, & Integrations**.  

Every aspect of the reference build is optional - only build what seems useful to you.

![[Reference Build - Guide 2026-04-04 17.40.57.excalidraw.svg|375]]
%%[[Reference Build - Guide 2026-04-04 17.40.57.excalidraw.md|🖋 Edit in Excalidraw]]%%

# Details

There are many ways to build a Data Journal.  
The Reference Build is one approach I recommend, but it is far from the only one that works.

> The Reference Build is designed so that **each component improves the system without making other components obsolete**.

The Reference Build is based on Google Sheets. It organizes data across multiple time scales and uses Google Apps Script to automatically create space for new entries. A custom API and small web app make it easy to read and write data programmatically. Siri Shortcuts make logging fast and frictionless, and a custom iPhone home-screen widget (via Scriptable) keeps the system visible throughout the day. 

![[META 2026-04-03 12.17.24.excalidraw.svg]]
%%[[META 2026-04-03 12.17.24.excalidraw.md|🖋 Edit in Excalidraw]]%%

The Reference Build includes the **code and step-by-step instructions** to build it.
## The Data Store

> [!tip] How to build → [[Reference Build - The Data Store]]

The Data Store is the bedrock, providing storage, a simple structure, and a basic interface for interacting with your data. It is the only "required" part of a Data Journal.

The Reference Build uses **Google Sheets** as the Data Store.

Other ways to build this layer:
- Excel workbook
- Obsidian daily notes
- Notion database
- SQL database
- CSV files
## Automations

> [!tip] How to build → [[Reference Build - Automations]]

Automation handles much of the system's maintenance automatically. It can also be extended to perform other tasks (e.g. pull data from 3rd party services and create automated backups).

The Reference Build uses **Google Apps Script** for automation.

Other ways to build this layer:
- Manually creating rows & pulling data 
- Services like IFTTT
- Cron jobs on your computer
- Siri Shortcuts

## Integrations

> [!tip] How to build → [[Reference Build - Integrations]]

Integrations make it easy to get data into and out of the the Data Journal from other sources.

The Reference Build uses a **Google Apps Script Web App** for integrations.

Other ways to build this layer:
- Custom API via other means
- Self host with a Raspberry Pi and Cloudflare Tunnels
- Localize everything to a single machine or device
