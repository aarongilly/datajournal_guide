---
aliases:
  - Google Sheets
  - Data Store
tags:
  - ReferenceBuild
---
# Overview

> [!tldr] How to build the fundamental Data Journal structure
> - [[Reference Build - Guide|Reference Build Guide]]
> - How-tos:
> 	- [[Reference Build - The Data Store]] 👈 you are here
> 		- [[#Per-Period Only Option]]
> 		- [[#Per-Event Only Option]]
> 		- [[#Full Build Option]]
> 	- [[Reference Build - Automations]]
> 	- [[Reference Build - Integrations]]

The [[Reference Build - Full Example|Reference Build]] is based on Google Sheets.

Sheets are of 3 main types:

1) **Per-period** sheets  (e.g. `days`, `weeks`, `months`, `years`).
2) **Per-event** sheets (e.g. `workouts`, `outings`)
3) **Analysis** sheets (e.g. `charts`, `PivotTable`)

![[example_data_journal.png]]

This structure keeps the data **simple, consistent, and easy to analyze with formulas, charts, & PivotTables**.
# Details

> [!question] Why Google Sheets?
> You're not pushing a rock uphill — Google Sheets is designed for this kind of data. It is accessible from any device, anywhere you have internet. It's fast enough, gives you access to formulas and PivotTables, and works well with the scripting platform *Google Apps Script*. These features make Google Sheets a **hugely powerful** platform while remaining simple to use. 

> [!example] [The full workbook available here](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?gid=1604702476#gid=1604702476).
> 
> <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRagGFfPo9ucvLswgXd5e-SwSaNjFQBcIfIPUKny3Ac-ZfcxIHeC3NUdwI2jSn7jOSKvKPfAS3nUjUX/pubhtml?widget=true&amp;headers=false" width=100% height=300px></iframe>


The Reference Build uses a Google Sheets workbook with several individual sheets. 

| Sheet Type | Sheet Name                                                                   | Each row covers        | Description                                                                                            |
| ---------- | ---------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| Per-Period | [[meta/OLD-Reference Build/OLD-Example Data Journal#Days\|days]]             | One day                | The bread & butter of a Data Journal. One row per day.                                                 |
| Per-Period | [[meta/OLD-Reference Build/OLD-Example Data Journal#Weeks\|weeks]]           | One week               | Mostly formulas + one per-week data point.                                                             |
| Per-Period | [[meta/OLD-Reference Build/OLD-Example Data Journal#Months\|months]]         | One month              | Mostly formulas + some monthly data points.                                                            |
| Per-Period | [[meta/OLD-Reference Build/OLD-Example Data Journal#Years\|years]]           | One year               | Mostly formulas + a yearly data point.                                                                 |
| Per-Event  | [[meta/OLD-Reference Build/OLD-Example Data Journal#Workouts\|workouts]]     | One *workout*          | Example of a sheet whose rows are *per instance of a thing* rather than *per time period*.             |
| Per-Event  | [[meta/OLD-Reference Build/OLD-Example Data Journal#Events\|events]]         | One *event occurrence* | Another example showing how to handle data that doesn't neatly fit into a "per time period" structure. |
| Analysis   | [[meta/OLD-Reference Build/OLD-Example Data Journal#PivotTable\|PivotTable]] | -                      | A PivotTable for ad hoc data analysis.                                                                 |
| Analysis   | [[#Charts]]                                                                  | -                      | A place to house charts for data visualizaiton.                                                        |

Each sheet is shown and documented extensively in [[Reference Build - Full Example|The Example Data Journal Page]]. 

> [!question] What if Google goes away?
> The system uses Google Sheets, but **the structure is intentionally simple**.  
> If Google ever shuts down Sheets, the system can move to Excel, Airtable, or even plain CSV files without changing the fundamental design.
> 
> If you're worried about losing data:  
> Google Sheets exports work well in Excel - or you can export each sheet to CSVs.

## How To

First decide - do I want to track things that may happen more than once per day? 

Each of the following 3 options 
### Per-Period Only Option

> [!success] A great starting point!
> I ran [[My (Real) Data Journal]] like this for 7 years. It works well! You **can** start here and *per-event* sheets later, if you so choose.

1. Read [[Reference Build - Full Example#Foundation - The Data Store|about the example Google Sheets Data Store]]
2. Make a copy of [the actual example Google Sheet](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?usp=sharing)
3. Clear the example rows from each sheet (leave the header and formulas)
4. Update the starting date so the journal begins **today**.
	1. e.g. Change cell `Days!A2` to be today's date
5. **Delete** the example *per-event* sheets (`workouts` and `outings`) 
	1. **Delete** the columns in the *per-period* sheets that reference the now-deleted sheets
6. Start tracking things!
7. Highly recommend moving on to the next step: [[Reference Build - Automations|Automations]]
8. Eventually consider adding analysis sheets, including things like [[Reference Build - Full Example#Charts|Charts]] and [[Reference Build - Full Example#PivotTable|PivotTables]].

### Per-Event Only Option

> [!warning] Least preferred option
> There's no reason this wouldn't work, but I've never **not** done *per-period*. I'd recommend doing [[#Full Build (both) Option|Full Build]] rather than *just* this.  
> 
> Put another way: **per-period** is kind of what the Data Journal is all about.

1. Read [[Reference Build - Full Example#Foundation - The Data Store|about the example Google Sheets Data Store]]
2. Make a copy of [the actual example Google Sheet](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?usp=sharing)
3. Add sheets (or change `workouts` and/or `events`) for whatever kinds of things you want to track
4. Copy/paste the formulas from columns A (`Date`) through D (`Year`) to your new sheets
5. **Delete** all the *Per-Period* sheets
6. Start tracking things!
7. Highly recommend implementing [[Reference Build - Integrations|Integrations]]
8. Eventually consider adding analysis sheets, including things like [[Reference Build - Full Example#Charts|Charts]] and [[Reference Build - Full Example#PivotTable|PivotTables]].

### Full Build Option

> [!tip] Most awesome & effective
> This is how I've tracked things in [[My (Real) Data Journal]] for the past 6 years. It works quite well and opens up the *kinds* of data you can include in your Data Journal considerably.

1. Read [[Reference Build - Full Example#Foundation - The Data Store|about the example Google Sheets Data Store]]
2. Make a copy of [the actual example Google Sheet](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?usp=sharing)
3. Clear the example rows from each sheet (leave the header and formulas)
4. Update the starting date so the journal begins **today**.
	1. e.g. Change cell `Days!A2` to be today's date
5. Start tracking things!
6. Highly recommend moving to both next steps: [[Reference Build - Automations|Automations]] & [[Reference Build - Integrations|Integrations]]
7. Consider adding analysis sheets, including things like [[Reference Build - Full Example#Charts|Charts]] and [[Reference Build - Full Example#PivotTable|PivotTables]].

---
# What This Enables

With the Data Store in place:

- your journal has a **stable structure for storing data**
- formulas can summarize information across days, weeks, months, and years
- data can be inspected, edited, and analyzed directly

At this point you already have a working Data Journal. You can begin tracking things immediately.

However, maintaining the structure manually can become tedious over time. As the journal grows, you would need to add new rows and ensure formulas continue to propagate correctly.

## If You Stopped Here

If you stopped here, you would have a **fully functional manual Data Journal**.

You could log data directly in the spreadsheet, use formulas and PivotTables for analysis, and review patterns over time.

---
## Next Step

The next layer removes much of that manual maintenance.

Automations keep the Data Journal prepared for future entries by automatically creating new rows and maintaining the structure of the system. They can do other things too (if you want).

→ [[Reference Build - Automations|Next: Automations]]