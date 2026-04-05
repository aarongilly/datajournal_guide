---
aliases:
tags:
---
# Overview 

If you have an Apple product, you have access to Shortcuts. Shortcuts can be used to make it **fast and easy to track data** via a variety of means.

Types of Data Journal shortcuts:

1. [[#Write to Spreadsheet]]
2. [[#Track Something]]
3. [[#Present a Menu]]

Shortcut **automations** can run based on a huge number of [[#Available Automation Triggers]].

This assumes you've built & deployed the [[Reference Build - Integrations#POST Route Integrations|POST Route]] Web App.

![[Input Shortcuts 2026-04-05 13.35.36.excalidraw.svg]]
%%[[Input Shortcuts 2026-04-05 13.35.36.excalidraw.md|🖋 Edit in Excalidraw]]%%


# Details

The Shortcuts App is baked into every Apple product you can buy. If you have an iPhone, Apple Watch, iPad, or Mac, then you already have it.

> [!hint] How Aaron does it
> In [[My (Real) Data Journal]] **most** of the tracked data come via Shortcuts scripts.
> 
> I have over a dozen shortcuts to track things like:
> 
> - Media
> - Exercise
> - Outings
> - Pains
> - Location
>
> ![[Shortcuts_Grid.jpeg|450]]

## Shortcut Chains

Rather than building one _huge_ shortcut, it’s better to chain together multiple **small, single-purpose shortcuts**.

![[Layer 3 – Fast Input 2026-03-14 10.55.09.excalidraw.svg]]

%%[[Layer 3 – Fast Input 2026-03-14 10.55.09.excalidraw.md|🖋 Edit in Excalidraw]]%%

There are 3 main types:

- [[#Present a Menu]] - grouping related shortcuts to provide a common entry point
- [[#Track Something]] - getting the data to send
- [[#Write to Spreadsheet]] - send data to your web hook

### How To

This assumes you've built & deployed the [[Reference Build - Integrations#POST Route Integrations|POST Route]] Web App.

1. Open the Shortcuts app on any Apple device 
	🔥 **TIP:** building Shortcuts on the Mac is easier than doing it on the phone
2. Build your [[#Write to Spreadsheet]] shortcut and a simple [[#Track Something]] shortcut to test it
3. Build more [[#Track Something]] shortcuts, as desired
4. Try out a [[#Present a Menu]] shortcut 
	1. Add it to your Home Screen for quick entry into tracking
5. Play with [[#Shortcut Automations]] to track things automatically

## Present a Menu

A shortcut that presents a menu of choices, each choice is one of the *Track Something* shortcuts. 

This allows you to make **one button** on your Home Screen that you can use to quickly track anything:

![[Homescreen_Shortcuts_Example.jpeg|450]]

Each of those is an entry point to a collection of related shortcuts. The blue "Track" shortcut always lives on my real Home Screen.

### Choose from Menu

Insert titles you want to choose from. Then below that insert a **Run Shortcut** action for the *Track Something* shortcut you want.

![[Menu_Example.jpeg|450]]

## Track Something

You will want multiple "*Track Something*" shortcuts. I'm calling them "*Track Something*" shortcuts, but they are just regular shortcuts that follow the form:

1. [[#Examples of Data-Getting Shortcut Actions|Get data to send ]]*(whatever you want!)*
2. [[#Dictionary|Put data in a Dictionary]] 
3. [[#Write to Spreadsheet|Call Write to Spreadsheet]]

![[Track_Something_Example.png]]

You can use whatever actions you want to get the data you're sending to the Data Journal. 

### Examples of Data-Getting Shortcut Actions

![[Data_Getting_Actions.png]]

There's a ton of shortcut actions you can use to get data - these are a few.

| Action                       | Purpose                                                                                |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| Ask for Input                | Allows you to enter text, numbers, etc                                                 |
| Choose from List             | Allows you to pick from a series of pre-defined inputs                                 |
| Location                     | Gets your current location, can be represented in a number of forms (e.g. City, State) |
| Get Details of Health Sample | Obtain data stored in Apple Health                                                     |

### Common Ending Actions

The last two actions ([[#Dictionary]] & [[#Run Shortcut]]) are the same for all *Track Something*-type Shortcuts.

#### Dictionary

![[Dictionary.png]]

You are creating a *dictionary* that will be sent to the [[#Write to Spreadsheet]] shortcut.

The dictionary does two things:

1. Specify the `sheet` name - where the data will go
2. List the data to be contained starting with **Column F** (the first column after `Timestamp`)

| Key       | Value                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `columns` | An **Array** of data values the same order as the columns in the target Sheet (Column F = array item 1, Column G = array item 2, etc) |
| `sheet`   | Name of the Target sheet                                                                                                              |

![[Layer 3 Reference Build Guide – Fast Input 2026-03-14 21.27.11.excalidraw.svg]]

%%[[Layer 3 Reference Build Guide – Fast Input 2026-03-14 21.27.11.excalidraw.md|🖋 Edit in Excalidraw]]%%

#### Run Shortcut

![[Run_Shortcut.png]]

This sends the Dictionary you just created to the [[#Write to Spreadsheet]] Shortcut.

| Parameter Name | Value                  |
| -------------- | ---------------------- |
| Input          | The Dictionary from ☝️ |

## Write to Spreadsheet

The most important Shortcut has the job to send data to the Data Journal via the Web Hook /custom api.

This shortcut is one action: `Get contents of URL`.

![[Write_to_Spreadsheet_Example.jpeg|450]]

It takes inputs given to it by other shortcuts, then sends them to your webhook via an HTTP POST request. 

### Get contents of URL

| Parameter Name | Value                   |
| -------------- | ----------------------- |
| URL            | The URL of your web app |
| Method         | `POST`                  |
| Header Key     | `Content-Type`          |
| Header Value   | `application/json`      |
| Request body   | File                    |
| File           | Shortcut Input          |

This shortcut is called by every [[#Track Something]]-type shortcut.

## Shortcut Automations

> [!tip] 
> Set-it-and-forget-it data tracking!

Your phone and computer can **run any shortcut automatically** based on various types of triggers.

![[Example_Automation.jpeg|450]]

### Available Automation Triggers

|       Trigger       | Example you could use it for                                                                      |
| :-----------------: | ------------------------------------------------------------------------------------------------- |
|     Time of Day     | Track location in the middle of the night                                                         |
| Geolocation Arrive  | Track when you arrive at work                                                                     |
|  Geolocation Exit   | Track when you leave work                                                                         |
|        Email        | Scrape contents from emails you get from your energy company                                      |
|        Wifi         | Create a log of when your Wi-Fi goes or use it as an alternative to the geolocation arrive method |
|         App         | Track how often and when you open a certain app                                                   |
|    Battery Level    | Track how what time of day you hit low battery as a proxy for phone use                           |
|       Wallet        | Track purchases                                                                                   |
| Apple Watch Workout | Track Apple Workouts to your Data Journal                                                         |

> [!hint] How Aaron does it
> At 3:30 AM my phone automatically runs my "Track Location" shortcut. I have an automated record of the city & state where I slept each night.

# What This Enables

With input shortcuts in place:

- tracking data becomes **quick and frictionless**
- you can log information directly from any Apple device using you voice or a keyboard
- multiple shortcuts can send data into the journal in a consistent format
- automations can record events **without manual input**

The Data Journal is no longer just something you update manually — it can now **collect data continuously throughout the day**.