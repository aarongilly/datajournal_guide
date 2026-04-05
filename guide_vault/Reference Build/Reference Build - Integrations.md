---
aliases:
  - Web Hook
  - Web App
  - Custom API
  - Integrations
tags:
  - ReferenceBuild
---
# Overview

> [!tldr] How to build the fundamental Data Journal structure
> - [[Reference Build - Guide Overview|Reference Build Guide]]
> - How-tos:
> 	- [[Reference Build - The Data Store]] 
> 	- [[Reference Build - Automations]] 
> 	- [[Reference Build - Integrations]] 👈 you are here
> 		- [[#POST Route Integrations]]
> 			- [[#Apple's ("Siri") Shortcuts]]
> 		- [[#GET Route Integrations]]
> 			- [[#Widgets]]

Integrations allow **other tools and services** to read from and write to your Data Journal.

Without this layer, the journal mostly lives **inside the spreadsheet**. With integrations in place, the journal becomes a **central hub for personal data**, able to receive information from apps, devices, and automations and send information to widgets and anything else you want.

The Reference Build exposes a small **web API** using Google Apps Script. This allows external tools to send data directly into the journal or retrieve information from it.

# Details

The Reference Build uses a **Google Apps Script Web App** to expose simple endpoints for other things you build to interact with the Data Journal.

This web app acts as a lightweight API. It allows external tools to:

- write data to the journal
- read data from the journal

Because it is built on Google Apps Script, the API runs directly alongside the spreadsheet that stores the data.

> [!tip] Inspect the example script  
> The example Data Journal includes the integration code used in the Reference Build.
> 
> You can view it from the **Extensions → Apps Script** menu in the sheet.
> 
> Alternatively, it is [available here on my GitHub](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs)

The API is intentionally simple. It is designed to make the journal **easy to connect to**, not to become a complex service. Keeping it simple also minimizes risk. The **only** thing the API allows you to do is:

1. Get **today's** data - not historical data
2. Add *new* data - not change or delete existing data

> [!question] Why expose an API?
> 
> Many useful data sources live outside the spreadsheet:
> 
> - phone automations
>     
> - health apps
>     
> - weather services
>     
> - smart home systems
>     
> - scripts or personal projects
>     
> 
> An API allows those tools to send information directly into the Data Journal.

## How To Deploy the Web App & Enable POST and GET Routes

We are deploying our very own **web app** (or **custom API** if you prefer to call it that).

1. Open the Apps Script project attached to your Data Journal
2. The [integration code is already part of the code from the automations guide](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs) - so you *likely* already have it
	1. Follow the instructions at the top of the code for "External Data Input" and "Data Retrieval"
3. Deploy the script as a **Web App**
4. Configure the deployment so it can receive requests from anyone with the URL
	1. ⚠️ Protect the web app URL - don't let others see it ⚠️
	2. If you're not comfortable with this, you can limit it to "Only Me", but this increases the complexity of actually *using* the API exponentially.
5. Copy the resulting **web app URL** for use elsewhere

This URL becomes the endpoint that other tools can use to interact with your Data Journal.

Once deployed, the journal can receive and respond to requests from external systems.

## POST Route Integrations

With your own POST Route open, you anything that can generate HTTP POST Requests can write data to your Data Journal. This unlocks huge potential in easy & automated data tracking.

![[Reference Build - Full Example 2026-04-04 22.24.43.excalidraw.svg|293]]

### Apple's ("Siri") Shortcuts

> [!tip] HUGELY POWERFUL
> While [[Reference Build - Full Example#Per-Period Sheets|Per-Period tracking]] is the bread & butter of Data Journaling, the [[Reference Build - Full Example#Per-Event Sheets|Per-Event tracking]] + Shortcuts is **the most powerful tool in your aresnal**.

![[Input Shortcuts 2026-04-05 13.35.36.excalidraw.svg]]

For full how-to details, see → [[Input Shortcuts]]. 

There are additional specific examples of shortcuts in [[Tools & Techniques/Integrations/index|the Integrations folder page]].

### Obsidian and File Tracking

You can use shell scripts on your computer to gather from your computer and send it to your Data Journal.

![[Obsidian and File Tracking 2026-04-04 14.23.46.excalidraw.svg]]

For full how-to details, see → [[Obsidian and File Tracking]] (aka [[Obsidian and File Tracking|Shell Scripts]]) 

## GET Route Integrations

The GET Route opens up the possibility for external devices and services to read data from your Data Journal (only the data you choose). This gives you easy access to your data from places *other* than your spreadsheet.

### Widgets

![[Example_Widget.jpeg|450]]

For full how-to details, see → [[Widgets]]. 

---

# What This Enables

With integrations in place:

- external tools can send data directly to the journal
- scripts and automations can retrieve journal data
- the Data Journal becomes a **central hub** for personal data

This layer allows the journal to interact with the broader ecosystem of apps and services you already use.