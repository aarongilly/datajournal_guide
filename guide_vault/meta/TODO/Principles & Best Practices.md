> [!warning] UNDER CONSTRUCTION 🚧
> 
> This page is still being written.
# Principles

- Keep it simple
- Make it easy
- Think on very long time scales
- Design for change
- ...Separation of concerns

## Best Practices

> [!tip]
> [[The Reference Build - a Complete Data Journal Architecture|The Reference Build]] implements these best practices - in alignment with the above principles.
### Use one row per day

The simplest, most scalable approach for collecting data over time is to build a table where **every row is a day and every day has a row**. 

### Every row is the same

Other than the header of your sheets, every row should be the same format and the same type of content as every other row. You should've able to export any sheet to CSV.

> [!warning] Bad Practice
> Formatting your data like a report is a bad practice:
> ![[bad_data_formatting.png]]

> [!success] Best Practice
> Every row except the header should be the same *type* of row.  
> Format your data as close to a CSV as possible - then use PivotTables for reporting.
> ![[good_data_formatting.png]]

### Automatically tracked, manually confirmed

The gold standard of building data over time that you can actually *trust* is to use automated tracking, but then manually confirm what was tracked. 

If you only use automated tracking (a la the Apple Watch) → data anomalies will enter your data and confound patterns and trends.

If you only do things manually → you'll forget to track stuff.
### Choose carefully how to handle things that happen multiple times per day

If you want to track things that may happen more frequently than once/day, you have two choices:

1. Create a dedicated table for that kind of thing (**preferred**)
2. Come up with a convention for having more than one value in a table cell

Both approaches have worked for me, but one works better. The Reference Build shows how to accomplish the preferred approach.

### Blank rows are better than skipping rows

Skipping rows because you missed a day makes things harder. You're better off leaving blank (or mostly blank) rows where the data *would* be if it existed.