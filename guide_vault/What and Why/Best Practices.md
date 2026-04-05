> [!warning] Under construction 🚧
> This page is not yet "finished".

#todo

# Overview

Image

# Details

Stuff 

These are the best practices I've arrived at after empirical observation of what worked. They align with (and helped define) the Data Journal [[Principles]].

Many Data Journal best practices are generalizable to all data analysis

> [!tip]
> [[Reference Build - Full Example|The Reference Build]] implements these best practices.

## Every row is the same

Other than the header, every row should be the same format and have the same content as every other row. **You should able to export any sheet to CSV**. 

Said another way: don't do analysis in the same sheet you store your data.

> [!warning] Bad Practice
> Formatting your data like a report is a bad practice:
> ![[bad_data_formatting.png]]

> [!success] Best Practice
> Every row except the header should be the same *type* of row.  
> Format your data as close to a CSV as possible - then use PivotTables for reporting.
> ![[good_data_formatting.png]]

## Use one row per period

The simplest, most scalable approach for collecting data over time is to build a table where **every row is a day and every day has a row**. 

This is actually true more generally, one row per *period* (where "period" is day, week, month, quarter, or year), but one row per **day** is the easiest and likely best way to start.

## Choose carefully how to handle things that happen multiple times per day

If you want to track things that may happen more frequently than once/day, you have two choices:

1. Create a dedicated table for that kind of thing (**preferred**)
2. Come up with a convention for having more than one value in a table cell

Both approaches have worked for me, but one works better. The Reference Build shows how to accomplish the preferred approach.

## Blank rows are better than skipping rows

Skipping rows because you missed a day makes things harder. You're better off leaving blank (or mostly blank) rows where the data *would* be if it existed.

## Automatically tracked, manually confirmed

The gold standard of building data over time that you can actually *trust* is to use automated tracking, but then manually confirm what was tracked is accurate. 

If you only use automated tracking (a la the Apple Watch) → data anomalies will enter your data and confound patterns and trends.

If you only do things manually → you'll forget to track stuff.

## Shortcut Chains

Rather than building one _huge_ shortcut, it’s better to chain together multiple **small, single-purpose shortcuts**.

![[Layer 3 – Fast Input 2026-03-14 10.55.09.excalidraw.svg]]
