---
aliases:
  - Reference Build
  - The Reference Build
tags:
  - ReferenceBuild
---
# Overview 

This page explains how **the Reference Build** Data Journal architecture works.

The reference build is a highly-cohesive and loosely-coupled, modular architecture – use what you want, and don't use what you don't!

Use [[Reference Build - Guide Overview|Reference Build Guide]] to create your own!

![[META 2026-04-03 12.17.24.excalidraw.svg]]

%%[[META 2026-04-03 12.17.24.excalidraw.md|🖋 Edit in Excalidraw]]%%

**Jump to a section**

- [[#Foundation - The Data Store]]
	- [[#Per-Period Sheets]]
		- [[#Days]]
		- [[#Weeks]]
		- [[#Months]]
		- [[#Years]]
	- [[#Per-Event Sheets]]
		- [[#Workouts]]
		- [[#Outings]]
	- [[#Analysis Sheets]]
		- [[#PivotTable]]
		- [[#Charts]]
- [[#Automations]]
	- [[#Row Generator]]
	- [[#Backup Creator]]
	- [[#Data Puller]]
- [[#Integrations]]
	- [[#POST Route]]
		- [[#Input Shortcuts]]
	- [[#GET Route]]
		- [[#Widgets]]

# Details

This example is the [[Reference Build - Full Example|Reference Build]] filled with fictitious data. 

> [!question] Column colors
> The [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|Reference Build]] uses colors to show how the data originate.
> - <span style="color:green">Green = data you'd write by hand on the spreadsheet</span>
> - <span style="color:grey">Grey = in-cell formulas</span>
> - <span style="color:blue">Blue = data placed by automations</span>
> - <span style="color:orange">Orange = data entered through integrations</span>

![[example_data_journal.png]]

> [!info]- Interactive Example
> Click through the tabs on the bottom to view different tables. [Full workbook here](https://docs.google.com/spreadsheets/d/18zoE1iJnyUge3CJdH0obU69Ts-jdFrNCmIQyzKPlE7I/edit?usp=sharing).
> <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRagGFfPo9ucvLswgXd5e-SwSaNjFQBcIfIPUKny3Ac-ZfcxIHeC3NUdwI2jSn7jOSKvKPfAS3nUjUX/pubhtml?widget=true&amp;headers=false" width="100%"  height="400" frameborder="0"></iframe>

## Foundation - The Data Store

> [!success]  How to...
> [[Reference Build - The Data Store]] shows how to build this *(including the actual Google Sheet)*

The data store is a Google Sheets workbook, with these sheets:

| Type       | Sheet Name              | Each row covers        | Description                                                                                            |
| ---------- | ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| per-period | [[#Days\|days]]         | One day                | The bread & butter of a Data Journal. One row per day.                                                 |
| per-period | [[#Weeks\|weeks]]       | One week               | Mostly formulas + one per-week data point.                                                             |
| per-period | [[#Months\|months]]     | One month              | Mostly formulas + some monthly data points.                                                            |
| per-period | [[#Years\|years]]       | One year               | Mostly formulas + a yearly data point.                                                                 |
| per-event  | [[#Workouts\|workouts]] | One *workout*          | Example of a sheet whose rows are *per instance of a thing* rather than *per time period*.             |
| per-event  | [[#Outings\|outings]]   | One *event occurrence* | Another example showing how to handle data that doesn't neatly fit into a "per time period" structure. |
| analysis   | [[#PivotTable]]         | -                      | A PivotTable for ad hoc data analysis.                                                                 |

> [!question]- What do you mean "Per-Period, Per-Event, & Analysis"?
> - **Per-Period** type sheets
> 	- one row = one period of time
> 	- i.e. `days`, `weeks`, `months`, & `years` sheets
> - **Per-Event** type sheets
> 	- one row = one occurrence of the thing
> 	- i.e. `workouts`, `outings`, & any other sheets for things you add
> - **Analysis** type sheets
> 	- not the **source of truth** for any data, can be anything you want
> 	- e.g. the `PivotTable` sheet

### Per-Period Sheets

The **Per-Period** sheets contain one row for each *period of time* that passes. The sheets form a hierarchy – `days` is the most granular and has data pulled from it into `week`, `months`, and `years`. 

- You do not necessarily **need** all of the sheets. Just `days` is a good place to start.
- [[#Automations]] are more related to **Per-Period** sheets

#### Days

![[Example Data Journal 2026-03-07 15.45.53.excalidraw.svg]]

%%[[Example Data Journal 2026-03-07 15.45.53.excalidraw.md|🖋 Edit in Excalidraw]]%%

The `days` sheet is **the main sheet** in the Data Journal. It's the bulk of your direct interaction with the spreadsheet. Opening it nightly to enter data by hand is an example of ***desired difficulty*** - it keeps you engaged in the project and gives you a chance to observe recent trends.

> [!notice]
> You only fill **3 data points** by hand each night.

 > [!info]- Column-level details
>
> | Data Source | Column |  Header  | Description                                                                                     |
> | :---------: | :----: | :------: | ----------------------------------------------------------------------------------------------- |
> | Automation  |   A    |   Date   | Date that defines the row - automatically entered each night by [[#Automations]]      |
> |   Formula   |   B    |   Day    | Day of week                                                                                     |
> |   Formula   |   C    |   Week   | Helps `weeks` sheet pull data                                                                   |
> |   Formula   |   D    |  Month   | Helps `months` sheet pull data                                                                  |
> |   Formula   |   E    |   Year   | Helps `years` sheet pull data                                                                   |
> |   Formula   |   F    |  Count   | Running count of tracked days - for celebrating milestones                                      |
> |   Formula   |   G    | Calendar | Working link to Google Calendar for that day                                                    |
> |   Manual    |   H    | Journal  | Nightly reflection on the days events                                                           |
> |   Manual    |   I    |  Rating  | How "good" of a day today was, 0 to 10                                                          |
> |   Manual    |   J    |  Health  | How healthy you feel, 0 to 10                                                                   |
> | Integration |   K    | Location | City & state - automatically entered by [[#Integrations]] |
> | Integration |   L    |  Sleep   | Hours slept - automatically entered by [[#Integrations]]                              |
> |   Formula   |   M    | Workouts | Number of workouts done today - from `workouts` sheet                                           |
> |   Formula   |   N    |  Event   | Name of the latest event today - from the `events` sheet                                        |
> |   Formula   |   O    |  Events  | Number of events tracked today - from `events` sheet                                            |

#### Weeks

![[Example Data Journal 2026-03-07 16.03.27.excalidraw.svg]]

%%[[Example Data Journal 2026-03-07 16.03.27.excalidraw.md|🖋 Edit in Excalidraw]]%%

The `weeks` sheet allows you to see trends and set goals on a week-by-week basis. Nearly all data are pulled from other sheets.[^1]

 > [!info]- Column-level details
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

#### Months

![[Example Data Journal 2026-03-07 23.10.25.excalidraw.svg]]

%%[[Example Data Journal 2026-03-07 23.10.25.excalidraw.md|🖋 Edit in Excalidraw]]%%

After your first year, the `months` sheet starts to become one of the most interesting ones.

 > [!info]- Column-level details
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

#### Years

![[Example Data Journal 2026-03-07 23.15.52.excalidraw.svg]]

%%[[Example Data Journal 2026-03-07 23.15.52.excalidraw.md|🖋 Edit in Excalidraw]]%%

After half-decade, the `years` sheet will become your favorite.  
After a full decade, you'll marvel at it.

 > [!info]- Column-level details
>
> | Data Source | Column |      Header      | Description                                                                           |
> | :---------: | :----: | :--------------: | ------------------------------------------------------------------------------------- |
> | Automation  |   A    |       Year       | Week that defines the row - automatically each week by [[#Automations]]      |
> |   Manual    |   B    |    Big event     | The biggest life-changing thing that happened this year - provides context for memory |
> |   Formula   |   C    |    Vacations     | Count of vacations this year - from the `months` sheet                                |
> |   Formula   |   D    | Restaurant Spend | Sum (or average, if preferred) of a budget you're watching - from the `months` sheet  |
> |   Formula   |   E    |   Total Spend    | Sum (or average, if preferred) of a budget you're watching - from the `months` sheet  |
> |   Formula   |   F    |    Ave Rating    | Average rating of days this month - from the `days` sheet                             |
> |   Formula   |   G    |    Ave Health    | Average rating of health this month - from the `days` sheet                           |
> |   Formula   |   H    |    Ave Sleep     | Average hours slept this month - from the `days` sheet                                |
> |   Formula   |   I    |     Workouts     | Number of workouts done this month - from `workouts` sheet                            |
> |   Formula   |   J    |      Events      | Number of events done this month - from `events` sheet                                |

### Per-Event Sheets

The **Per-Event** sheets contain one row for each *instance of an event* that occurs. The data in these sheets are trivially easy to aggregate in the Per-Period-type sheets *(e.g. count of `workouts` per row in the `weeks` sheet)*. 

- Per-Event sheets are for things that happen either:
	- very frequently *(i.e. more than once/day)*  
	  -or-
	- very infrequently *(i.e. a few times a year)*
- You do not necessarily **need** event sheets.
- You can have as **many** event sheets as you want.
- Each **type** of event **has its own sheet** *(i.e. don't mix `workouts` and `outings` on one sheet)*.
- [[#Integrations]] are more related to **Per-Event** sheets.

#### Workouts

An example of something that you'd definitely like to get credit for if you do more than one in a given day.

![[Example Data Journal 2026-03-07 23.21.05.excalidraw.svg]]

%%[[Example Data Journal 2026-03-07 23.21.05.excalidraw.md|🖋 Edit in Excalidraw]]%%

 > [!info]- Column-level details
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
> >
> > [!tip] Columns **A** through **E** are the same on **all *per-event* sheets**

#### Outings

An example of a looser, almost "catch-all" style of event.

![[Example Data Journal 2026-03-07 23.32.39.excalidraw.svg]]

%%[[Example Data Journal 2026-03-07 23.32.39.excalidraw.md|🖋 Edit in Excalidraw]]%%

 > [!info]- Column-level details
>
> | Data Source | Column |  Header   | Description                                                                              |
> | :---------: | :----: | :-------: | ---------------------------------------------------------------------------------------- |
> |   Formula   |   A    |   Date    | Helps `days` sheet pull data                                                             |
> |   Formula   |   B    |   Week    | Helps `weeks` sheet pull data                                                            |
> |   Formula   |   C    |   Month   | Helps `months` sheet pull data                                                           |
> |   Formula   |   D    |   Year    | Helps `years` sheet pull data                                                            |
> | Integration |   E    | Timestamp | The specific time and date when the outing was tracked                                    |
> | Integration |   F    |   Type    | The type of outing you're tracking (e.g. eating out, date night, whatever you care about) |
> | Integration |   G    |   Where   | Where the outing took place                                                               |
> | Integration |   H    |    Who    | Who you were with (if anyone)                                                            |
> | Integration |   I    |   Note    | Any notes about the outing                                                                |
> >
> > [!tip] Columns **A** through **E** are the same on **all *per-event* sheets**

> [!tip] Format's the same!

> You could have dedicated sheets for `date nights` or `dining out` or `saw friends` or anything else you want. They'd all follow this same format.

### Analysis Sheets

Because you write to them all the time, **don't do analysis in the same sheets you record the data**. You can add as many helper sheets you want for charts, data manipulations, or PivotTables.

#### PivotTable

![[PIVOT.png]]

If you don't know what PivotTables are, a Data Journal is an ***excellent*** place to learn what they are, how to use them, and when/why you'd want to.

#### Charts

![[example_chart.png]]

Build charts and make your own personal insights dashboard that fills itself out over time.

## Automations

> [!success]  How to...
> [[Reference Build - Automations]] shows how to build these *(including the actual Google Apps Script Code)*

The **automations** are invoked on a nightly basis by a **nightly trigger**. This means you don't have to do *anything* and your Data Journal will maintain itself.

### Row Generator

Making new rows every night is tedious and prone to failure. Luckily you don't have to!

![[Example Data Journal 2026-03-08 09.55.27.excalidraw.svg]]

%%[[Example Data Journal 2026-03-08 09.55.27.excalidraw.md|🖋 Edit in Excalidraw]]%%

This ensures **there's always a spot made for the data you wanted to track**. Seeing a blank row gives you the opportunity to backfill yesterday if you missed a nightly review. This also **pre-fills formulas** so you're not copy/pasting every day.

> [!info] 👉 Checkpoint
> [[My (Real) Data Journal]] used **only [[#Per-Period Sheets]] and a [[#Row Generator]] very successfully for 7 years**.

### Backup Creator

Right now all your data live *only* in the cloud. If you're like me, you'd like the insurance of having a **local, durable copy** of your data. You can always create your own downloads by hand, but why do that when you can automate it?

![[Reference Build - Full Example 2026-04-04 21.24.42.excalidraw.svg]]

%%[[Reference Build - Full Example 2026-04-04 21.24.42.excalidraw.md|🖋 Edit in Excalidraw]]%%

Having a simple CSV with your data on means, even if Google Sheets were to suddenly implode, you'd never lose your Data Journal.

### Data Puller

Another realm of automation is the automated **fetching of available data**.

![[Reference Build - Full Example 2026-04-04 22.08.48.excalidraw.svg]]

%%[[Reference Build - Full Example 2026-04-04 22.08.48.excalidraw.md|🖋 Edit in Excalidraw]]%%

If you've got the skill and a data source you can think to use, trigger recurrent data fetching jobs. Have Google Apps Script automation get & place the data *for* you.

In [[My (Real) Data Journal]] I use an automation with a custom Oura plugin I developed to pull my **sleep, stress, and activity** data into my `days` sheet every night.

## Integrations

> [!success]  How to...
> [[Reference Build - Integrations]] shows how to build these *(including the actual Google Apps Script Code)*

To bump up your capability and enable **lots of awesome things**, you need a new piece of tech:

![[Example Data Journal 2026-03-08 10.51.53.excalidraw.svg]]

%%[[Example Data Journal 2026-03-08 10.51.53.excalidraw.md|🖋 Edit in Excalidraw]]%%

The battery to build is a **custom web app**[^2] - using the same code base as [[#Automations]].

> [!tip] Super Power
> With a web app **anything connected to internet can become part of your system**.

- Services like [IFTTT](https://ifttt.com/) and [Zapier](https://zapier.com) can send you data
- You can make "easy buttons" *(including Siri[^3])* for tracking stuff
- You can use other tools to build your own dashboards

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

### POST Route

The first superpower.

![[Reference Build - Full Example 2026-04-04 22.24.43.excalidraw.svg|225]]

%%[[Reference Build - Full Example 2026-04-04 22.24.43.excalidraw.md|🖋 Edit in Excalidraw]]%%

With an HTTP POST route (i.e. a `doPost()` function in your Google Apps Script, deployed as a Web App) then *anything that can send an HTTP Post request (e.g. your phone and services like IFTTT)* can write data **directly to your Data Journal** on an as-needed basis. 

#### Input Shortcuts

Without fast input, you mostly interact with your Data Journal during the nightly review — pulling up your phone and filling in the day's row. That works great for reflections, but it's not ideal for tracking events that happen throughout the day.

Using Apple's ("Siri") Shortcuts, **one-tap, voice command, or context-triggered automations** can send data directly to your system.

![[Reference Build - Full Example 2026-04-04 22.41.28.excalidraw.svg]]

%%[[Reference Build - Full Example 2026-04-04 22.41.28.excalidraw.md|🖋 Edit in Excalidraw]]%%

Instead of waiting until night, you can log something **in the moment**.

**Examples:**

| Situation                             | What you do                | What happens                                             |
| ------------------------------------- | -------------------------- | -------------------------------------------------------- |
| You finish a workout                  | Tap a phone shortcut       | A row is added to the `workouts` sheet                   |
| You go out to eat                     | Tap a shortcut or use Siri | An entry appears in the `events` sheet                   |
| Your phone connects to your home wifi | *nothing*                  | An "arrived home" is recorded with the current timestamp |

Each of these shortcuts sends a **small web request** to your web app. 

The web app receives the request and **adds a row to the appropriate sheet**.

The result is a system where:

- **reflections happen at night**
- **events get logged during the day**

Both end up in the same structured data store.

> [!important] Fast input unlocks **per-occurrence tracking**.

Instead of only tracking one value per day, you can now track things that may happen **multiple times in a day**, such as:

- workouts
- meals out
- social events
- coffee purchases
- ideas or quotes
- anything else you care about

Your nightly review stays simple, while the rest of your life can still feed data into the system.

> [!info] 👉 Checkpoint
> If you stopped here, you would have a Data Journal that:
>
> - prepares its own rows
> - accepts data from other tools
> - lets you log events instantly from your phone

### GET Route

The second superpower.

![[Reference Build - Full Example 2026-04-04 23.11.36.excalidraw.svg]]

%%[[Reference Build - Full Example 2026-04-04 23.11.36.excalidraw.md|🖋 Edit in Excalidraw]]%%

With an HTTP GET route (i.e. a `doGet()` function in your Google Apps Script, deployed as a Web App) then *anything connected to the internet* get read **from your Data Journal** on an as-needed basis. 

#### Widgets

After building a widget - you can see your data right on your Home Screen.

![[Example_Widget.jpeg|450]]

[^1]: In [[My (Real) Data Journal]] I don't have **any** columns in the `weeks` sheet I enter by hand.
[^2]: or [[Input Shortcuts|REST API, Webhook, etc]] - pick your favorite name.
[^3]: or Alexa or the Google Assistant