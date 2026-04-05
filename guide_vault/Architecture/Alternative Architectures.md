# Overview

There's many ways you could architect a Data Journal

1. **File-oriented Google Build**  (aka the [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|Reference Build]])
   One big Google Sheets workbook
2. **Folder-oriented Google Build**
   Many Google Sheets workbooks in a folder
3. **File-oriented self-hosted**
   A proper Database
4. **Folder-oriented self-hosted**
   Many CSV files in a folder

I've done all of these to some extent. I recommend the [[meta/OLD-Reference Build/OLD-The Reference Build - a Complete Data Journal Architecture|Reference Build]] as the high point of regular-life workability. 

![[Alternative Architectures 2026-03-29 13.38.56.excalidraw.svg]]
%%[[Alternative Architectures 2026-03-29 13.38.56.excalidraw.md|🖋 Edit in Excalidraw]]%%
# Details

This is essentially just a table split on where the Data Journal lives and whether or not it's a *file* or a *folder*. 

|                  | **File-oriented** | **Folder-oriented** |
| ---------------- | ----------------- | ------------------- |
| **Cloud-Hosted** |                   |                     |
| **Self-Hosted**  |                   |                     |

## File-oriented Google Build

This is how I do things. In my estimate, has the greatest strengths and fewest weaknesses.

Strengths:
- Simple mental model
- Easy to back up
- Cross-sheet formulas
- Simple to maintain
- Easiest to browse

Weaknesses:
- File could become large & slow
- No *ownership* over the file

Note: The large & slow problem hasn't really happened yet, and I've been going for 13+ years.

## Folder-oriented Google Build

I worked this way for ~2 years. It was fine, but you wound up never looking at most things.

Strengths:
- Simple mental model
- Easy to set up services like IFTTT
- No large files

Weaknesses:
- Cross-sheet formulas are harder
- Less simple to maintain
- Less easy to browse

## File-oriented self-hosted

This is akin to just building an app. 

Strengths:
- Most scalable option
- Cross table queries are fast
- Full control over everything

Weaknesses:
- Very complicated, comparatively
- Simply "browsing" is hard → you won't do it
- Hosting a web app for remote data writes is also hard
- Likely no mobile phone support, unless you're *very good*

## Folder-oriented self-hosted

What I'm most interested in building.

Strengths:
- Perhaps maximally durable approach?
- Full control over everything
- Should scale decently?

Weaknesses:
- Querying across datasets is hard
- Hosting a web app for remote data writes is also hard
- Mobile phone support still likely hard