# Overview

Data about your life and behavior is already tracked by the tools and services you use. 

You can always batch export data from those sources for your own use.

You can often tap into these sources with simple automations to have them feed your main Data Journal *automatically*.

![[Automated Data Source Ideas 2026-04-01 22.09.22.excalidraw.svg]]
%%[[Automated Data Source Ideas 2026-04-01 22.09.22.excalidraw.md|🖋 Edit in Excalidraw]]%%

# Details

## Oura

I put Oura first on this list for a reason.

> [!tip] Oura is a goldmine of data.
> I wear an Oura ring. If you're reading this, there's essentially a 100% chance you'd like having one, too. If so, here's my referral link. 

Oura rings are *awesome*. [^1] They passively track a *ton* of useful data about:

1. Sleep
2. Activity
3. Readiness (i.e. biometrics)
4. Stress

You can also use the Oura app to track **meals** and **blood panels**, although I've not yet engaged with either feature. I don't believe they expose the meal data to you in any way you can export or hit with [their API](https://cloud.ouraring.com/docs/).

See the page documenting how to do your own [[Oura Data Puller Setup]].

## Apple Health

Next best thing to the Oura ring, if you use an Apple Watch, you similarly have a goldmine of data. Apple makes it slightly more frustrating to get, however. 

You can get:

1. Sleep
2. Activity
3. Biometrics (e.g. pulse)
4. Estimated VO2 max

You can **automate daily Apple Health metric pulls** using Shortcuts (which I'll likely create a guide for at a later date). 

Or, if you'd prefer a **bulk** approach, [there's a Python way to do it](https://github.com/markwk/qs_ledger/tree/master/apple_health), and a "[just give me an app](https://apps.apple.com/us/app/simple-health-export-csv/id1535380115)" way to do it. For bulk exports/imports, I've done the latter, not the former.

## Google Takeout

Google makes a gobsmacking amount of money with the data you give them. Thankfully, they are pretty good about letting you control that, and **making your own data available to you**. 

Google Takeout is a tool you can use to literally **take** your data **out** of Google (or, perhaps more accurately, COPY data out of Google) for your own purposes. There's an insanely deep well of things you could do here. I'm going to write about 3 high-value ones.

Each of these will have articles (I hope) eventually.

### Location History

In case you didn't already know, your phone tracks where you go all the time. If you've Google Maps on it and you haven't denied them permission, they've been using that data.

You can get:

1. Where you've been (GPS locations, at least) and when (down to the second)
2. Time spent per mode of transport

Somewhat uncharacteristically, Google has transitioned *away* from a web-based **personal location timeline** to one that's stored **on your device**. With a pretty simple script I was able to export my timeline and translate it from `json` to `csv`. 

There's some **NEAT** stuff in there!

![[timeline_chart.png]]

See [[Google Timeline Extraction]] for more.
### YouTube History

If you're signed into Google when you watch videos on YouTube, they've got a *full* record of everything you've watched, searched for, and more. 

You can get:

1. How many videos you've watched
2. When you've watched them
3. What the names are & which channels

The process for extracting this data is a little unintuitive, however it's not too bad. 

You can request a copy of this records and find out some neat (or horrifying) things about yourself. How many videos you've watched over time, by time of day, by channel, or all sorts of things!

![[youtube_views_by_year.png]]

See [[YouTube History Extraction]]

### Photos

I did this on photos taken from my iPhone, but it would *probably* work with photos from any phone?

You can get:

1. Photo time & date
2. Photo GPS coordinates

... and more, but I didn't do more.

This process involves getting the photos from your phone to your computer, then running a Python script in the folder that contains them. It outputs a `.csv` you can open to see where & when you take photos.
## Shortcuts-Native Things

I love Shortcuts. Use it all the time. So useful for this.

For more, see [[meta/OLD-Reference Build/OLD-Layer 3 – Fast Input#Shortcut Automations]].

### Location

You can get:

- Automated "where am I at" based on time-of-day
- Automated "when I arrived" and "when I left" based on any locations you set up

### Weather

You can get:

- A log of any weather predictions for wherever you are on a given day

For more, see [[Weather Tracking]]

### App Opens

You can get:

- A log of every time you open any particular app you care to track
# Obsidian (or any File-based Activity)

If you use Obsidian, you can use a **shell script** to...

Within a given (set of) directory(ies):

1. Find all files **created** since yesterday
2. Find all files **edited** since yesterday
3. Count the above or list their names
4. Send those data to your Data Journal

For more, see [[Obsidian and File Tracking]]
## Other Services

Things I'm not actively using, but have in the past (or, at the very least, am aware of).

- [Toggl](https://toggl.com/) - an active (i.e. you tell it what you're doing) time tracking app
- [ActivityWatch](https://activitywatch.net) - an open source passive (i.e. it watches what you do on your computer) Time Tracker
- [IFTTT](https://ifttt.com/) - a once amazing but still pretty alright automation service you can use to get access to a **huge number** of triggers you can create logs for


[^1]: As with everything else, I have no affiliation with Oura than really enjoying their product.
