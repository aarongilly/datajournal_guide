---
aliases:
  - Google Apps Script
  - Automation
tags:
  - ReferenceBuild
---
# Overview

> [!tldr] How to build the fundamental Data Journal structure
> - [[Reference Build - Guide Overview|Reference Build Guide]]
> - How-tos:
> 	- [[Reference Build - The Data Store]] 
> 	- [[Reference Build - Automations]] 👈 you are here
> 		- [[#Row Generator - How To]]
> 		- [[#Backup Creator - How To]]
> 		- [[#Data Puller - How To]]
> 	- [[Reference Build - Integrations]]

Automations reduces the amount of **routine maintenance** required to keep a Data Journal working smoothly.

Without automations, you would periodically need to:

- create new rows for upcoming days, weeks, months, and years
- ensure formulas continue to propagate correctly
- do **lots** of copy/pasting

These tasks are simple but repetitive. Automations removes that burden.

The Reference Build uses **Google Apps Script** to run small maintenance scripts automatically. These scripts quietly maintain the journal in the background so you can focus on **using the system rather than maintaining it**.

# Details

The Reference Build uses a small **Google Apps Script project attached to the Google Sheet**.

The script performs routine maintenance tasks such as:

- **Recommended**: Row-Generator
	- creating new rows for upcoming time periods
	- ensuring formulas remain intact
	- preparing the journal for future entries
- Backup Creator
	- automatically save static copies of your data for safekeeping
- Data Puller
	- pull data from any available source into your *Per-Period* sheets

These tasks run automatically on a schedule.

> [!tip] Inspect the example script  
> The example Data Journal includes the automation code used in the Reference Build.
> 
> You can view it from the **Extensions → Apps Script** menu in the sheet.
> 
> Alternatively, it is [available here on my GitHub](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs)

The automations layer is intentionally simple. It does not attempt to control the entire system — it simply keeps the **Data Store healthy and ready for new data**.

> [!question] Why automate this at all?
> 
> A Data Journal is designed to last **years**.
> 
> Small bits of friction — like manually adding rows or fixing formulas — add up over time.  
> Automations remove these small interruptions so the journal stays reliable with almost no effort.

## Row Generator - How To

The job of the Row Generator script is to insert new rows at the beginning of each period (day, week, etc) for the data to land and to copy/paste formulas into appropriate spots. 

1. Open your Data Journal Google Sheet
2. Open **Extensions → Apps Script**
3. Create a script file for journal automations
4. Add [the Reference Build automations code](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs)
	1. Follow the instructions at the top of the code for "Nightly Maintenance"
5. Save the project
6. Configure a **time-based trigger** to run the maintenance script (`oneAM()`) daily
7. Confirm the script runs successfully
	1. Every time the script runs it creates _another_ row

Once configured, the automations layer runs quietly in the background and keeps the journal prepared for future entries.

## Backup Creator - How To

The job of the Backup Creator is to create static, durable snapshots of your data and save them off to Google Drive so they sync to your local machine. This way if Google Sheets ever simply [*went away*](https://killedbygoogle.com), you'd still have your data.

This assumes you've already done the [[#Row Generator - How To]] & copy/pasted [the Reference Build automations code](https://github.com/aarongilly/example-data-journal/blob/main/Google%20Apps%20Script/data-journal-scripts.gs).

1. **Uncomment** the `exportDataJournal()` function at the bottom of the script
2. **Uncomment** the call to `exportDataJournal()` in `oneAM()`
	1. Configure as desired.
		1. Move the line of code around to get backups daily, monthly, etc.
		2. Change the input parameters of `exportDataJournal()` to achieve desired output
3. Confirm the script run successfully
	1. A new copy of your data should be placed into your drive in a `data_journal_exports` folder (by default)

## Data Puller - How To

This section is here mostly to point out this option exists. You're already running some code automatically each night; if you can find data sources you're interested in (and technically capable of) pulling data from - do that!

These are **much more technical, involved, and user-specific**. So the actual "how-to"s exist on their own page under [[Tools & Techniques/Data Pullers/index|this page]].

---

# What This Layer Enables

With automations in place:

- new days appear automatically
- weekly, monthly, and yearly rows stay aligned
- formulas continue to propagate correctly
- the journal remains stable over long periods of time

The system now **maintains itself**.

## If You Stopped Here

If you stopped here, you would have a **low-maintenance Data Journal** exactly how mine worked for [[My (Real) Data Journal#Structural History|its first 7 years]]. This is a **great** stopping point.

The journal would automatically prepare new rows for upcoming days, weeks, months, and years. The structure would stay intact over time without requiring you to periodically fix formulas or extend the sheet manually.

You would still enter data directly into the spreadsheet, but the system would quietly maintain itself in the background.

---

## Next Step

Automations keeps the journal healthy, but the system still lives mostly **inside the spreadsheet**.

IF you use [[Reference Build - Full Example#Per-Event Sheets|Per-Event Sheets]], you should definitely check out the page on building [[Reference Build - Integrations|Integrations]].