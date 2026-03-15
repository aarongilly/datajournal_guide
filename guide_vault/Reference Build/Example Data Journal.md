# Overview 

This example Data Journal shows what [[The Reference Build - a Complete Data Journal Architecture]] looks like when it's operating. Use [[The Reference Build - a Complete Data Journal Architecture|the Reference Build Guide]] to create your own.
## Layers

- [[#Layer 0 - Data Store]]
- [[#Layer 1 - Automation]]
- [[#Layer 2 - Integrations]]
- [[#Layer 3 - Fast Input]]
- [[#Layer 4 - Widgets]]

![[example_data_journal.png]]

# Details

This example is the [[The Reference Build - a Complete Data Journal Architecture|Reference Build]] filled with fictitious data. 

> [!question] Column colors
> The [[The Reference Build - a Complete Data Journal Architecture|Reference Build]] uses colors to show how the data originate.
> - <span style="color:green">Green = data you'd write by hand on the spreadsheet</span>
> - <span style="color:grey">Grey = in-cell formulas</span>
> - <span style="color:blue">Blue = data placed by automations</span>
> - <span style="color:orange">Orange = data entered through integrations</span>

## Layer 0 - Data Store

> [!success]  How to...
> [[Layer 0 – Data Store]] shows how to build this *(including the actual Google Sheet)*

The data store is a Google Sheets workbook, with these sheets:

| Sheet Name              | Each row covers        | Description                                                                                            |
| ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| [[#Days\|days]]         | One day                | The bread & butter of a Data Journal. One row per day.                                                 |
| [[#Weeks\|weeks]]       | One week               | Mostly formulas + one per-week data point.                                                             |
| [[#Months\|months]]     | One month              | Mostly formulas + some monthly data points.                                                            |
| [[#Years\|years]]       | One year               | Mostly formulas + a yearly data point.                                                                 |
| [[#Workouts\|workouts]] | One *workout*          | Example of a sheet whose rows are *per instance of a thing* rather than *per time period*.             |
| [[#Events\|events]]     | One *event occurrence* | Another example showing how to handle data that doesn't neatly fit into a "per time period" structure. |
| [[#PivotTable]]         | -                      | A PivotTable for ad hoc data analysis.                                                                 |

> [!info] Sheet type names
> - **Per-Period**
> 	- one row = one period of time
> 	- i.e. `days`, `weeks`, `months`, & `years` sheets
> - **Per-Occurrence**
> 	- one row = one occurrence of the thing
> 	- i.e. `workouts`, `events`, & any other sheets for things you add
> - **Helper sheets**
> 	- not the source of truth for any data & can be anything
> 	- e.g. the `PivotTable` sheet

### Days

![[Example Data Journal 2026-03-07 15.45.53.excalidraw.svg]]
%%[[Example Data Journal 2026-03-07 15.45.53.excalidraw.md|🖋 Edit in Excalidraw]]%%

The `days` sheet is **the main sheet** in the Data Journal. It's the bulk of your direct interaction with the spreadsheet. Opening it nightly to enter data by hand is an example of ***desired difficulty*** - it keeps you engaged in the project and gives you a chance to observe recent trends.

> [!notice]
> You only fill **3 data points** by hand each night.

 > [!info]- Column-level details
> 
> | Data Source | Column |  Header  | Description                                                                                     |
> | :---------: | :----: | :------: | ----------------------------------------------------------------------------------------------- |
> | Automation  |   A    |   Date   | Date that defines the row - automatically entered each night by [[#Layer 1 - Automation]]       |
> |   Formula   |   B    |   Day    | Day of week                                                                                     |
> |   Formula   |   C    |   Week   | Helps `weeks` sheet pull data                                                                   |
> |   Formula   |   D    |  Month   | Helps `months` sheet pull data                                                                  |
> |   Formula   |   E    |   Year   | Helps `years` sheet pull data                                                                   |
> |   Formula   |   F    |  Count   | Running count of tracked days - for celebrating milestones                                      |
> |   Formula   |   G    | Calendar | Working link to Google Calendar for that day                                                    |
> |   Manual    |   H    | Journal  | Nightly reflection on the days events                                                           |
> |   Manual    |   I    |  Rating  | How "good" of a day today was, 0 to 10                                                          |
> |   Manual    |   J    |  Health  | How healthy you feel, 0 to 10                                                                   |
> | Integration |   K    | Location | City & state - automatically entered by [[#Layer 2 - Integrations]] & [[#Layer 3 - Fast Input]] |
> | Integration |   L    |  Sleep   | Hours slept - automatically entered by [[#Layer 2 - Integrations]]                              |
> |   Formula   |   M    | Workouts | Number of workouts done today - from `workouts` sheet                                           |
> |   Formula   |   N    |  Event   | Name of the latest event today - from the `events` sheet                                        |
> |   Formula   |   O    |  Events  | Number of events tracked today - from `events` sheet                                            |
> 
### Weeks

![[Example Data Journal 2026-03-07 16.03.27.excalidraw.svg]]
%%[[Example Data Journal 2026-03-07 16.03.27.excalidraw.md|🖋 Edit in Excalidraw]]%%

The `weeks` sheet allows you to see trends and set goals on a week-by-week basis. Nearly all data are pulled from other sheets.[^1]

 > [!info]- Column-level details
> 
> 
> | Data Source | Column |     Header      | Description                                                                 |
> | :---------: | :----: | :-------------: | --------------------------------------------------------------------------- |
> | Automation  |   A    |      Week       | Week that defines the row - automatically each week by Layer 1 - Automation |
> |   Formula   |   B    |    First Day    | Date of the Monday (or Sunday, if you prefer) associated with that week.    |
> |   Manual    |   C    |    Highlight    | Weekly reflection on a memorable highlight of the week                      |
> |   Formula   |   D    | Journal Entries | Count of Journal entries made this week- from the `days` sheet              |
> |   Formula   |   E    |   Ave Rating    | Average rating of days this week - from the `days` sheet                    |
> |   Formula   |   F    |   Ave Health    | Average rating of health this week - from the `days` sheet                  |
> |   Formula   |   G    |    Ave Sleep    | Average hours slept this week - from the `days` sheet                       |
> |   Formula   |   H    |    Workouts     | Number of workouts done this week - from `workouts` sheet                   |
> |   Formula   |   I    |     Events      | Number of events done this week - from `events` sheet                       |
### Months

![[Example Data Journal 2026-03-07 23.10.25.excalidraw.svg]]
%%[[Example Data Journal 2026-03-07 23.10.25.excalidraw.md|🖋 Edit in Excalidraw]]%%

After your first year, the `months` sheet starts to become one of the most interesting ones.


 > [!info]- Column-level details
> 
> 
> | Data Source | Column |      Header      | Description                                                                 |
> | :---------: | :----: | :--------------: | --------------------------------------------------------------------------- |
> | Automation  |   A    |      Month       | Week that defines the row - automatically each week by Layer 1 - Automation |
> |   Formula   |   B    |       Year       | Year in which the month took place                                          |
> |   Manual    |   C    |     Vacation     | If you went on any vacations this month, remember them!                     |
> |   Manual    |   D    | Restaurant Spend | Engage with a particular budget you're watching by entering data each month |
> |   Manual    |   E    |   Total Spend    | Engage in overall spending (or earning, or whatever!)                       |
> |   Formula   |   F    | Journal Entries  | Count of Journal entries made this month - from the `days` sheet            |
> |   Formula   |   G    |    Ave Rating    | Average rating of days this month - from the `days` sheet                   |
> |   Formula   |   H    |    Ave Health    | Average rating of health this month - from the `days` sheet                 |
> |   Formula   |   I    |    Ave Sleep     | Average hours slept this month - from the `days` sheet                      |
> |   Formula   |   J    |     Workouts     | Number of workouts done this month - from `workouts` sheet                  |
> |   Formula   |   K    |      Events      | Number of events done this month - from `events` sheet                      |
> 
### Years

![[Example Data Journal 2026-03-07 23.15.52.excalidraw.svg]]
%%[[Example Data Journal 2026-03-07 23.15.52.excalidraw.md|🖋 Edit in Excalidraw]]%%

After half a decade, the `years` sheet will become your favorite. After a full decade, you'll marvel at it.


 > [!info]- Column-level details
> 
> 
> | Data Source | Column |      Header      | Description                                                                           |
> | :---------: | :----: | :--------------: | ------------------------------------------------------------------------------------- |
> | Automation  |   A    |       Year       | Week that defines the row - automatically each week by [[#Layer 1 - Automation]]      |
> |   Manual    |   B    |    Big event     | The biggest life-changing thing that happened this year - provides context for memory |
> |   Formula   |   C    |    Vacations     | Count of vacations this year - from the `months` sheet                                |
> |   Formula   |   D    | Restaurant Spend | Sum (or average, if preferred) of a budget you're watching - from the `months` sheet  |
> |   Formula   |   E    |   Total Spend    | Sum (or average, if preferred) of a budget you're watching - from the `months` sheet  |
> |   Formula   |   F    |    Ave Rating    | Average rating of days this month - from the `days` sheet                             |
> |   Formula   |   G    |    Ave Health    | Average rating of health this month - from the `days` sheet                           |
> |   Formula   |   H    |    Ave Sleep     | Average hours slept this month - from the `days` sheet                                |
> |   Formula   |   I    |     Workouts     | Number of workouts done this month - from `workouts` sheet                            |
> |   Formula   |   J    |      Events      | Number of events done this month - from `events` sheet                                |
> 
### Workouts

![[Example Data Journal 2026-03-07 23.21.05.excalidraw.svg]]
%%[[Example Data Journal 2026-03-07 23.21.05.excalidraw.md|🖋 Edit in Excalidraw]]%%

The `workouts` sheet is one of two example ***per-occurrence* sheets** whose type of data may happen *more than once per day*. Rather than each row being defined by a time period, **each row is defined by an occurrence of the thing you're tracking** & the exact timestamp it was tracked.


 > [!info]- Column-level details
> 
> 
> | Data Source | Column |  Header   | Description                                             |
> | :---------: | :----: | :-------: | ------------------------------------------------------- |
> |   Formula   |   A    |   Date    | Helps `days` sheet pull data                            |
> |   Formula   |   B    |   Week    | Helps `weeks` sheet pull data                           |
> |   Formula   |   C    |   Month   | Helps `months` sheet pull data                          |
> |   Formula   |   D    |   Year    | Helps `years` sheet pull data                           |
> | Integration |   E    | Timestamp | The specific time and date when the workout was tracked |
> | Integration |   F    |   Type    | The general type of workout                             |
> | Integration |   G    |   Name    | The name of the workout                                 |
> | Integration |   H    |   Note    | Notes about how the workout went (or whatever)          |
> 
> > [!tip] Columns **A** through **E** are the same on **all *per-occurrence* sheets**
### Events

![[Example Data Journal 2026-03-07 23.32.39.excalidraw.svg]]
%%[[Example Data Journal 2026-03-07 23.32.39.excalidraw.md|🖋 Edit in Excalidraw]]%%


 > [!info]- Column-level details
> 
> 
> | Data Source | Column |  Header   | Description                                                                              |
> | :---------: | :----: | :-------: | ---------------------------------------------------------------------------------------- |
> |   Formula   |   A    |   Date    | Helps `days` sheet pull data                                                             |
> |   Formula   |   B    |   Week    | Helps `weeks` sheet pull data                                                            |
> |   Formula   |   C    |   Month   | Helps `months` sheet pull data                                                           |
> |   Formula   |   D    |   Year    | Helps `years` sheet pull data                                                            |
> | Integration |   E    | Timestamp | The specific time and date when the event was tracked                                    |
> | Integration |   F    |   Type    | The type of event you're tracking (e.g. eating out, date night, whatever you care about) |
> | Integration |   G    |   Where   | Where the event took place                                                               |
> | Integration |   H    |    Who    | Who you were with (if anyone)                                                            |
> | Integration |   I    |   Note    | Any notes about the event                                                                |
### PivotTable

![[PIVOT.png]]

Because you write to them all the time, **don't do analysis in the same sheets you record the data**. You can add as many helper sheets you want for charts, data manipulations, or PivotTables.
## Layer 1 - Automation

> [!success]  How to...
> [[Layer 1 – Automation]] shows how to build this *(including the actual Google Apps Script Code)*

Making new rows every night is tedious and prone to failure. Luckily you don't have to!

![[Example Data Journal 2026-03-08 09.55.27.excalidraw.svg]]
%%[[Example Data Journal 2026-03-08 09.55.27.excalidraw.md|🖋 Edit in Excalidraw]]%%

This ensures **there's always a spot made for the data you wanted to track**. Seeing a blank row gives you the opportunity to backfill yesterday if you missed a nightly review.
### Checkpoint

[[My (Real) Data Journal]] used **only Layer 0 and 1 very successfully for 7 years**.

If you have no desire to track things that happen multiple times per day, implementing Layers 0 and 1 gets you everything you need. It's a great way to start.

## Layer 2 - Integrations

> [!success]  How to...
> [[Layer 2 – Integrations]] shows how to build this *(including the actual Google Apps Script Code)*

To bump up your capability and enable **lots of awesome things**, you need a new piece of tech:

![[Example Data Journal 2026-03-08 10.51.53.excalidraw.svg]]
%%[[Example Data Journal 2026-03-08 10.51.53.excalidraw.md|🖋 Edit in Excalidraw]]%%

The battery to build is a **custom web app**[^2] - using the same code from [[#Layer 1 - Automation|Layer 1]].

> [!tip] Super Power
> With a web app **anything connected to internet can become part of your system**.

- Services like [IFTTT](https://ifttt.com/) and [Zapier](https://zapier.com) can send you data
- You can make "easy buttons" *(including Siri[^3])* for tracking stuff (see [[#Layer 3 - Fast Input|Layer 3]])
- You can use other tools to build your own dashboards (see [[#Layer 4 - Widgets|Layer 4]])

You can literally open up any web browser, type in your web app URL and get back your data:

```json
{
  "date": "Sun Mar 08 2026",
  "Journal": "End of the quarter. Reflecting on the \"get it done\" mode. It worked. ",
  "Rating": 8,
  "Health": 9,
  "Location": "Wichita, KS",
  "Sleep": 7.5,
  "Workouts": 0,
  "Workout": "",
  "Events": 0,
  "workouts": [],
  "events": [
    {
      "Type": "Saw Family",
      "Where": "Sedgwick County Zoo",
      "Who": "The Boys, Aunt Beth",
      "Note": ""
    }
  ]
}
```

## Layer 3 - Fast Input

> [!success]  How to...
> [[Layer 3 – Fast Input]] shows how to build this

Without fast input, you mostly interact with your Data Journal during the nightly review — pulling up your phone and filling in the day's row. That works great for reflections, but it's not ideal for tracking events that happen throughout the day.

Layer 3 solves this by creating **one-tap or voice shortcuts** that send data directly to your system.

![[Fast_Input_Example.png]]

Instead of waiting until night, you can log something **in the moment**.

Examples:

| Situation                   | What you do                | What happens                                    |
| --------------------------- | -------------------------- | ----------------------------------------------- |
| You finish a workout        | Tap a phone shortcut       | A row is added to the `workouts` sheet          |
| You go out to eat           | Tap a shortcut or use Siri | An entry appears in the `events` sheet          |
| Something memorable happens | Tap a button               | An event is recorded with the current timestamp |

Each of these shortcuts simply sends a **small web request** to the web app you built in [[#Layer 2 - Integrations]].

The web app receives the request and **adds a row to the appropriate sheet**.

The result is a system where:

- **reflections happen at night**
- **events get logged during the day**

Both end up in the same structured data store.
### Why this layer matters

> [!important] Fast input unlocks **per-occurrence tracking**.

Instead of only tracking one value per day, you can now track things that may happen **multiple times in a day**, such as:

- workouts
- meals out
- social events
- coffee purchases
- ideas or quotes
- anything else you care about

Your nightly review stays simple, while the rest of your life can still feed data into the system.

### Checkpoint

If you stopped here, you would have a Data Journal that:

- prepares its own rows
- accepts data from other tools
- lets you log events instantly from your phone

At this point, the journal has become something more than a spreadsheet — it's a **personal data system**.

The final layer simply makes that system **visible throughout your day**.

## Layer 4 - Widgets

> [!success]  How to...
> [[Layer 4 – Widgets]] shows how to build this *(including the actual Scriptable code)*

After building a widget - you can see your data right on your Home Screen.

![[Example_Widget.jpeg|450]]


[^1]: In [[My (Real) Data Journal]] I don't have **any** columns in the `weeks` sheet I enter by hand.

[^2]: or [[Layer 3 – Fast Input|REST API, Webhook, etc]] - pick your favorite name.

[^3]: or Alexa or the Google Assistant
