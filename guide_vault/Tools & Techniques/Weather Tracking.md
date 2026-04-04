# Overview

Having a forecast of the day's weather can give you insights on how the weather effects your life.

After a one-time setup, you can enable **automatic tracking of the daily forecast at your current location**.

> [!note]
> This assumes you're using an iPhone, iPad, or Mac and that you've implemented [[Layer 3 – Fast Input|Layer 3]]

![[weather_shortcut_dictionary.png]]

# Details

## Why Track the Weather?

Because it's free *(as in no money, time, or energy)* and could potentially be useful down the line. 

Tracking weather can reveal:

- How much rainy days affect your mood
- Associations between barometric pressure and headaches
- Which allergens are the most bothersome[^1]
- Another search field when trying to remember when a thing happened (e.g. "It was the day that it snowed")

## How to Setup the Automation

Step 0 → build [[The Reference Build - a Complete Data Journal Architecture|the reference build]] up to [[Layer 2 – Integrations|Layer 2]]. This technique is just a specific implementation of [[Layer 3 – Fast Input|Layer 3]].

1. Create a "Weather" sheet in your Data Journal
2. Create a Siri Shortcut. 
3. Create a nightly automation that runs the shortcut.
### Weather Siri Shortcut - "Track Forecast"

Shortcuts offers a `Get Weather Forecast` action. This shortcut simply runs that, grabs select details, loads them to a dictionary and hands off to [[Layer 3 – Fast Input#Write to Spreadsheet|the write to spreadsheet shortcut]].

![[weather_shortcut_start.png]]

1. Start by getting the `Daily` forecast - this gets a week's worth of **Weather Forecast Objects** you can pull particular fields out of.
2. Use the `Get Item From List` to get the `First Item` from the Weather Forecast
3. Tap on the item and select the *type* of field you want - and its format:

| Param            | Example                         |
| ---------------- | ------------------------------- |
| Location         | 123 Fake Street, Springfield IL |
| Weather Forecast | 75°F and Partly Cloudy          |
| High Temperature | 85                              |
| Low Temperature  | 56                              |
| Humidity         | 0.45                            |
| Wind Speed       | 8.52                            |

1. Repeat as desired
2. Build the [[Layer 3 – Fast Input#Common Ending Actions|Dictionary]] and send it to the write to spreadsheet shortcut

Run it nightly

1. Create an automation
2. Have it run the "Track Forecast" shortcut nightly (or as desired)


[^1]: although the method outlined below does not grant you access to allergen forecasts
