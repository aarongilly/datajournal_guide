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

> [!tldr] How to connect other tools and services to your Data Journal
> 
> - [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|The Reference Build Guide Overview]]
>     
> - How-tos:
>     
>     - [[Reference Build - The Data Store]]
>         
>     - [[OLD-Layer 1 – Automations|Step 1]]
>         
>     - [[meta/OLD-Reference Build/OLD-Layer 2 – Integrations|Step 2]] 👈 you are here
>         
>     - [[meta/OLD-Reference Build/OLD-Layer 3 – Fast Input|Step 3]]
>         
>     - [[meta/OLD-Reference Build/OLD-Layer 4 – Widgets|Step 4]]
>         

Integrations allow **other tools and services** to read from and write to your Data Journal.

Without this layer, the journal mostly lives **inside the spreadsheet**. With integrations in place, the journal becomes a **central hub for personal data**, able to receive information from apps, devices, and automations.

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

## How To

1. Open the Apps Script project attached to your Data Journal
2. The [integration code is already part of the code from Layer 1](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs) - so you likely already have it
	1. Follow the instructions at the top of the code for "External Data Input" and "Data Retrieval"
3. Deploy the script as a **Web App**
4. Configure the deployment so it can receive requests from anyone with the URL
	1. Protect the web app URL - don't let others see it
	2. If you're not comfortable with this, you can limit it to "Only Me", but this increases the complexity of actually *using* the API exponentially.
5. Copy the resulting **web app URL** for use elsewhere

This URL becomes the endpoint that other tools can use to interact with your Data Journal.

Once deployed, the journal can receive and respond to requests from external systems.

---

# What This Layer Enables

With integrations in place:

- external tools can send data directly to the journal
- scripts and automations can retrieve journal data
- the Data Journal becomes a **central hub** for personal data

This layer allows the journal to interact with the broader ecosystem of apps and services you already use.

## If You Stopped Here

If you stopped here, you would have a **programmable Data Journal**.

Your journal could receive data from automations, scripts, and external services. It would function as a central repository for information generated throughout your day.

You would still interact with the system primarily through the spreadsheet, but other tools could now contribute data automatically.

---

## Next Step

Integrations make it possible to write data to the journal from other tools — but entering data should also be **fast and effortless**.

The next layer focuses on reducing the friction of manual data entry.

→ [[meta/OLD-Reference Build/OLD-Layer 3 – Fast Input]]