This is a [C4 Model](https://c4model.com/diagrams) of my particular implementation of a Data Journal.

# System Context

Shows Data Journal as a black (blue, technically) box in its context. 

![[C4 Model 2026-03-03 21.17.59.excalidraw.svg|534]]

%%[[C4 Model 2026-03-03 21.17.59.excalidraw.md|🖋 Edit in Excalidraw]]%%

---

# Container

This in-zooms on the Data Journal to depict the main containers of functionality and how they interact. This depicts [[Reference Build - Full Example|The Reference Build]], whereas the system context view is pretty much implementation-agnostic.

![[C4 Model 2026-03-16 16.09.45.excalidraw.svg]]

%%[[C4 Model 2026-03-16 16.09.45.excalidraw.md|🖋 Edit in Excalidraw]]%%

> [!tip]
> Like most C4 Diagrams, you've already reached the 80/20 value peak after one drill-in.  
> Reading on provides much more detail, but 80% of the necessary understanding is above.

---

# Components

These views in-zoom on each functional container to show the major components within. 

## Google Sheet

This view in-zooms on the Google Sheet, showing its main types of sheets and how they interact with the rest of the system.

![[C4 Model 2026-03-16 17.22.43.excalidraw.svg]]

%%[[C4 Model 2026-03-16 17.22.43.excalidraw.md|🖋 Edit in Excalidraw]]%%

---

## Apps Script (aka [[Reference Build - Automations|Automation]])

![[C4 Model 2026-03-16 17.58.26.excalidraw.svg]]

%%[[C4 Model 2026-03-16 17.58.26.excalidraw.md|🖋 Edit in Excalidraw]]%%

---

## Custom Web App 

Part of [[Reference Build - Integrations|Integrations]].

![[C4 Model 2026-03-16 18.09.19.excalidraw.svg]]

%%[[C4 Model 2026-03-16 18.09.19.excalidraw.md|🖋 Edit in Excalidraw]]%%

---

## Siri Shortcuts

Part of [[Reference Build - Integrations|Integrations]].

![[C4 Model 2026-03-16 22.35.50.excalidraw.svg]]

%%[[C4 Model 2026-03-16 22.35.50.excalidraw.md|🖋 Edit in Excalidraw]]%%

---

## Device Widgets 

Part of [[Reference Build - Integrations|Integrations]].

![[C4 Model 2026-03-16 22.43.00.excalidraw.svg]]

%%[[C4 Model 2026-03-16 22.43.00.excalidraw.md|🖋 Edit in Excalidraw]]%%

# Exploded View

This is not part of the C4 Spec, but I wanted to see it so here you go.

![[C4 Model 2026-03-17 17.19.02.excalidraw.svg]]

%%[[C4 Model 2026-03-17 17.19.02.excalidraw.md|🖋 Edit in Excalidraw]]%%