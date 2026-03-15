---
aliases:
  - Google Apps Script
  - Layer 1
  - Automation
tags:
  - ReferenceBuild
---
# Overview

> [!tldr] How to automate basic Data Journal maintenance
> 
> - [[The Reference Build - a Complete Data Journal Architecture|The Reference Build Guide Overview]]
>     
> - How-tos:
>     
>     - [[Layer 0 – Data Store|Step 0]]
>         
>     - [[Layer 1 – Automation|Step 1]] 👈 you are here
>         
>     - [[Layer 2 – Integrations|Step 2]]
>         
>     - [[Layer 3 – Fast Input|Step 3]]
>         
>     - [[Layer 4 – Widgets|Step 4]]
>         

Automation reduces the amount of **routine maintenance** required to keep a Data Journal working smoothly.

Without automation, you would periodically need to:

- create new rows for upcoming days, weeks, months, and years
- ensure formulas continue to propagate correctly
- do **lots** of copy/pasting

These tasks are simple but repetitive. Automation removes that burden.

The Reference Build uses **Google Apps Script** to run small maintenance scripts automatically. These scripts quietly maintain the journal in the background so you can focus on **using the system rather than maintaining it**.

# Details

The Reference Build uses a small **Google Apps Script project attached to the Google Sheet**.

The script performs routine maintenance tasks such as:

- creating new rows for upcoming time periods
- ensuring formulas remain intact
- preparing the journal for future entries

These tasks run automatically on a schedule.

- [ ] ==!!!YOU NEED TO TEST THIS!!!==

> [!tip] Inspect the example script  
> The example Data Journal includes the automation code used in the Reference Build.
> 
> You can view it from the **Extensions → Apps Script** menu in the sheet.
> 
> Alternatively, it is [available here on my GitHub](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs)

The automation layer is intentionally simple. It does not attempt to control the entire system — it simply keeps the **Data Store healthy and ready for new data**.

> [!question] Why automate this at all?
> 
> A Data Journal is designed to last **years**.
> 
> Small bits of friction — like manually adding rows or fixing formulas — add up over time.  
> Automation removes these small interruptions so the journal stays reliable with almost no effort.

## How To

1. Open your Data Journal Google Sheet
2. Open **Extensions → Apps Script**
3. Create a script file for journal automation
4. Add [the Reference Build automation code](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs)
	1. Follow the instructions at the top of the code for "Nightly Maintenance"
5. Save the project
6. Configure a **time-based trigger** to run the maintenance script (`oneAM()`) daily
7. Confirm the script runs successfully
    
Once configured, the automation layer runs quietly in the background and keeps the journal prepared for future entries.

---
# What This Layer Enables

With automation in place:

- new days appear automatically
- weekly, monthly, and yearly rows stay aligned
- formulas continue to propagate correctly
- the journal remains stable over long periods of time

The system now **maintains itself**.

## If You Stopped Here

If you stopped here, you would have a **low-maintenance Data Journal** exactly how mine worked for [[My (Real) Data Journal#Structural History|its first 7 years]].

The journal would automatically prepare new rows for upcoming days, weeks, months, and years. The structure would stay intact over time without requiring you to periodically fix formulas or extend the sheet manually.

You would still enter data directly into the spreadsheet, but the system would quietly maintain itself in the background.

---
## Next Step

Automation keeps the journal healthy, but the system still lives mostly **inside the spreadsheet**.

The next layer allows **external tools and services** to interact with your Data Journal.

→ [[Layer 2 – Integrations]]