---
aliases:
tags:
---
# Overview

> [!tldr] How to build the fundamental Data Journal structure
> - [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|The Reference Build Guide Overview]]
> - How-tos:
> 	- [[meta/OLD-Reference Build/OLD-Layer 0 – Data Store|Step 0]] 👈 you are here
> 	- [[OLD-Layer 1 – Automations|Step 1]]
> 	- [[meta/OLD-Reference Build/OLD-Layer 2 – Integrations|Step 2]]
> 	- [[meta/OLD-Reference Build/OLD-Layer 3 – Fast Input|Step 3]]  
> 	- [[meta/OLD-Reference Build/OLD-Layer 4 – Widgets|Step 4]]

The [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|Reference Build]] is based on Google Sheets.

Each sheet represents a **different grain of data**.  
Some sheets track _time periods_ (days, weeks, months, years). Others track _individual occurrences_ (like workouts or events).

![[example_data_journal.png]]

This structure keeps the data **simple, consistent, and easy to analyze with formulas or PivotTables**.

> [!question] Why Google Sheets?
> You're not pushing a rock uphill — Google Sheets is designed for this kind of data. It is accessible from any device, anywhere you have internet. It's fast enough, gives you access to formulas and PivotTables, and works well with the scripting platform *Google Apps Script*. These features make Google Sheets a **hugely powerful** platform while remaining simple to use. 

# Details

> [!tip] [Inspect the actual Google Sheet](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?usp=sharing).

The Reference Build uses a Google Sheets workbook with several individual sheets. 

| Sheet Name                                      | Each row covers        | Description                                                                                            |
| ----------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#Days\|days]]             | One day                | The bread & butter of a Data Journal. One row per day.                                                 |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#Weeks\|weeks]]           | One week               | Mostly formulas + one per-week data point.                                                             |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#Months\|months]]         | One month              | Mostly formulas + some monthly data points.                                                            |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#Years\|years]]           | One year               | Mostly formulas + a yearly data point.                                                                 |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#Workouts\|workouts]]     | One *workout*          | Example of a sheet whose rows are *per instance of a thing* rather than *per time period*.             |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#Events\|events]]         | One *event occurrence* | Another example showing how to handle data that doesn't neatly fit into a "per time period" structure. |
| [[meta/OLD-Reference Build/OLD-Example Data Journal#PivotTable\|PivotTable]] | -                      | A PivotTable for ad hoc data analysis.                                                                 |

Each sheet is shown and documented extensively in [[meta/OLD-Reference Build/OLD-Example Data Journal|The Example Data Journal Page]]. 

> [!question] What if Google goes away?
> The system uses Google Sheets, but **the structure is intentionally simple**.  
> If Google ever shuts down Sheets, the system can move to Excel, Airtable, or even plain CSV files without changing the fundamental design.
> 
> If you're worried about losing data:  
> Google Sheets exports work well in Excel - or you can export each sheet to CSVs.

## How To

1. Read [[meta/OLD-Reference Build/OLD-Example Data Journal#Layer 0 - Data Store|about the example Google Sheets Data Store]]
2. Make a copy of [the actual example Google Sheet](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?usp=sharing)
3. Clear the example rows from each sheet (leave the header and formulas)
4. Update the starting date so the journal begins **today**.
	1. e.g. Change cell `Days!A2` to be today's date
5. Are you tracking things that may occur more than once per day?
	1. If YES
		1. Add sheets (or change `workouts` and/or `events`) for whatever kinds of things you want to track
		2. Copy/paste the formulas from columns A (`Date`) through D (`Year`) to your new sheets
	2. If NO
		1. Delete the example *per-occurrence* sheets (`workouts` and `events`) 
		2. Delete the columns that reference them
6. Start tracking things!
7. Consider adding analysis sheets, including things like charts and [[meta/OLD-Reference Build/OLD-Example Data Journal#PivotTable\|PivotTables]]
8. Highly recommend moving on to the next step: [[OLD-Layer 1 – Automations|automating daily maintenance]]

---
# What This Layer Enables

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

Automation keeps the Data Journal prepared for future entries by automatically creating new rows and maintaining the structure of the system.

→ [[OLD-Layer 1 – Automations]]