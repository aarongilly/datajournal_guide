---
aliases:
tags:
---
# Overview

> [!tldr] How to build a live view of your data on your home screen
> - [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|The Reference Build Guide Overview]]
> - How-tos:
> 	- [[meta/OLD-Reference Build/OLD-Layer 0 – Data Store|Step 0]] 
> 	- [[OLD-Layer 1 – Automations|Step 1]]
> 	- [[meta/OLD-Reference Build/OLD-Layer 2 – Integrations|Step 2]]
> 	- [[meta/OLD-Reference Build/OLD-Layer 3 – Fast Input|Step 3]]  
> 	- [[meta/OLD-Reference Build/OLD-Layer 4 – Widgets|Step 4]] 👈 you are here

This page shows how to add a Data Journal widget right on your iPhone, iPad, or Mac's Home Screen with the [Scriptable](https://apps.apple.com/app/id1405459188) app. Increase goal presence in your life. Keep your goals and daily data visible throughout the day — or simply maintain a live log of what you've done

![[Example_Widget.jpeg|450]]

# Details

> [!note]
> I am not affiliated in any way with Scriptable. It is **paid**, but **subscription-free** app that lets you do things on your phone with JavaScript. If Pythonista allowed you to build custom Home Screen widgets I would recommend that one. 

With [[meta/OLD-Reference Build/OLD-Layer 2 – Integrations]] you created a URL that allows other tools to retrieve your Data Journal data in JSON format. That means you can get to that data via anything that can make a web request.

The Scriptable app on iOS and iPad OS gives you a JavaScript environment you can use to build your own Home Screen widget. The widget can look like whatever you want. Your only limitation is your ability to create good-looking interfaces using JavaScript and the Scriptable Widgets API.
## How To

1. Install Scriptable on your iPhone or iPad
2. Open Scriptable and create a new script.
3. Copy/paste the [[#Example Code]] below
4. Modify the `##CHANGE##` parts of the example code to:
	1. Identify *your* web app URL
	2. Show whatever data *you* want to show
5. Run the script to preview your widget
6. Once it looks like what you want:
	1. Add a "Scriptable" widget to your home screen
	2. Configure the widget & select the script you made
7. Done.

## Example Code

This code uses my Google Sheet names to produce a widget showing today's data. 

> [!warning]
> This code includes some examples from *my* Data Journal and will likely not work for yours with modification. See the `##CHANGE##` notes.

```JavaScript
// ##CHANGE## YOUR WEBAPP URL HERE 
const WEBAPP_URL = "https://script.google.com/macros/s/MYURLREDACTED/exec";

//Load the data from your Custom API
let journalData = await loadJournalData();

//For development purposes, sanity check the data loaded
console.log(journalData);

//Build the widget
let widget = await createWidget(journalData);

//During development, this previews the widget
if (!config.runsInWidget) {
  await widget.presentLarge()
}

// Tell the system to show the widget.
Script.setWidget(widget)
Script.complete()

async function createWidget(todayData){

  // Build a blank widget
  let w = new ListWidget();
  
  // Add a background
  w.backgroundGradient = makeGradient();
  
  // Add a header to the widget
  let dateText = w.addText("- DATA JOURNAL -");
  dateText.centerAlignText();
  if(Device.isUsingDarkAppearance()){
    dateText.textColor = Color.white();
    }
  dateText.font = Font.boldSystemFont(24);

  // Add spacers between content or it looks bad
  w.addSpacer(2);
  
  // Start filling in the widget with content
  // (uses the same method as the header)
  
  // ##CHANGE## YOUR CODE WOULD BE DIFFERENT STARTING HERE
  let loc = "📍 " + todayData.Location;
  w.addText(loc).centerAlignText();
  
  w.addSpacer(4);
  
  // Example code showing how I pull data from per-occurence sheets
  if(todayData.workouts.length === 0){
  		w.addText('No workout. Go do it.')
  }else{
    w.addText("Workout:")
    todayData.workouts.forEach(workout => {
      w.addText("  - " + workout['Name'] + " | " + workout['Type'])
    })
  }
  
  // Second example
  if(todayData.events.length > 0){
    w.addText("Events:")
    todayData.events.forEach(entry => {
      w.addText("  - " + entry['Type'] + " - " + entry['Where']);
    })
  }
  // ##CHANGE## YOUR CODE WOULD BE DIFFERENT ENDING HERE
    
  // This spacer pushes the text content to the top  
  w.addSpacer();
  // Return the widget
  return w
}

//Makes a background color that's decent,
//abiding by dark mode.
function 	makeGradient(){
  let gradient = new LinearGradient();
  	gradient.locations = [0, 1]
  	gradient.colors = [
    	new Color("#00D0A0"),
    	new Color("#80E0B0")
  	]
    if(Device.isUsingDarkAppearance()){
      gradient.colors = [
        new Color("#003020"),
        new Color("#103020")
      ]
    }
  return gradient;
}
  
//Get data from your Custom API
async function loadJournalData() {
  let req = new Request(WEBAPP_URL)
  req.headers =
  	{
  		"Content-Type": "application/json"
	}
  let json = await req.loadJSON()
  return json
}

```

# What This Layer Enables

With widgets in place:

- your Data Journal becomes **visible throughout the day**
- important metrics and goals stay **top-of-mind**
- the system becomes something you **see regularly** without the need to open a spreadsheet

This layer turns the Data Journal into a **live dashboard** for your daily life.

---
# Next Step

There isn’t really a "next layer".

The next step is simply to **live with the system** and evolve it over time.

Add new things to track, build new shortcuts, and experiment with different ways to visualize your data.

Over time, your Data Journal will become a **personal dataset about your life**.