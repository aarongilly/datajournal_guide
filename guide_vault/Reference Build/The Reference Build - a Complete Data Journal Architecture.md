---
aliases:
  - Reference Build
tags:
  - ReferenceBuild
---
# Overview

This **Reference Build Guide** documents how to recreate my [[Example Data Journal]]. You can build a Data Journal however you want; but this is a complete, working system — stable, cohesive, and battle-tested. 

The Reference Build is structured as a series of layers.  
Each layer adds new capabilities to the system.  

You can stop at any layer and still have a useful Data Journal — but each additional layer improves automation, speed, or usability.

![[The Reference Build - a Complete Data Journal Architecture 2026-03-07 09.09.53.excalidraw.svg]]
%%[[The Reference Build - a Complete Data Journal Architecture 2026-03-07 09.09.53.excalidraw.md|🖋 Edit in Excalidraw]]%%

# Details

There are many ways to build a Data Journal.  
The Reference Build is one approach I recommend, but it is far from the only one that works.

> The Reference Build is designed so that **each layer improves the system without making earlier layers obsolete**.

The Reference Build is based on Google Sheets. It organizes data across multiple time scales and uses Google Apps Script to automatically create space for new entries. A custom API and small web app make it easy to read and write data programmatically. Siri Shortcuts make logging fast and frictionless, and a custom iPhone home-screen widget (via Scriptable) keeps the system visible throughout the day. 

The Reference Build includes the **code and step-by-step instructions** to build it. 

## Layer 0 – Data Store

> [!tip] How to build → [[Layer 0 – Data Store]]

The Data Store is the bedrock, providing storage, a simple structure, and a basic interface for interacting with your data.

The Reference Build uses **Google Sheets** as the Data Store.

Other ways to build this layer:
- Excel workbook
- Obsidian daily notes
- Notion database
- SQL database
- CSV files
## Layer 1 – Automation

> [!tip] How to build → [[Layer 1 – Automation]]

Automation handles much of the system's maintenance automatically.

The Reference Build uses **Google Apps Script** for automation.

Other ways to build this layer:
- Manually creating rows & pulling data 
- Services like IFTTT
- Cron jobs on your computer
- Siri Shortcuts

## Layer 2 – Integrations

> [!tip] How to build → [[Layer 2 – Integrations]]

Integrations make it easy to get data into and out of the journal from other sources.

The Reference Build uses a **Google Apps Script Web App** for integrations.

Other ways to build this layer:
- Custom API via other means
- Self host with a Raspberry Pi and Cloudflare Tunnels
- Localize everything to a single machine or device

## Layer 3 – Fast Input

> [!tip] How to build → [[Layer 3 – Fast Input]]

Fast input leverages [[#Layer 2 – Integrations|integrations]] to make manual and automated tracking quick and easy.

The Reference Build uses **Siri Shortcuts** for fast input.

Other ways to build this layer:
- Android's Tasker App
- Web forms
- Custom website

## Layer 4 – Widgets

> [!tip] How to build → [[Layer 4 – Widgets]]

Widgets keep your data top-of-mind and provide maximal visibility.

The Reference Build uses **Scriptable** to make Home Screen widgets.

Other ways to build this layer:
- 3rd party Android widget builders
- place a Google Sheet link on your home screen

