This is a [C4 Model](https://c4model.com/diagrams) of my particular implementation of a Data Journal.
# System Context

Shows Data Journal as a black (blue, technically) box in its context. 

![[C4 Model 2026-03-03 21.17.59.excalidraw.svg|534]]
%%[[C4 Model 2026-03-03 21.17.59.excalidraw.md|🖋 Edit in Excalidraw]]%%

---
# Container

This in-zooms on the Data Journal to depict the [[The Reference Build - a Complete Data Journal Architecture#Overview|five layers]] and how they interact.

![[C4 Model 2026-03-16 16.09.45.excalidraw.svg]]
%%[[C4 Model 2026-03-16 16.09.45.excalidraw.md|🖋 Edit in Excalidraw]]%%

> [!tip]
> Like most C4 Diagrams, you've already reached the 80/20 value peak after one drill-in.  
> Reading on provides much more detail, but 80% of the necessary understanding is above.

---
# Components

These views in-zoom on each functional container to show the major components within. 

## Google Sheet (aka [[Layer 0 – Data Store|Layer 0]])

This view in-zooms on the Google Sheet, showing its main types of sheets and how they interact with the rest of the system.

![[C4 Model 2026-03-16 17.22.43.excalidraw.svg]]
%%[[C4 Model 2026-03-16 17.22.43.excalidraw.md|🖋 Edit in Excalidraw]]%%

---
## Apps Script (aka [[Layer 1 – Automation|Layer 1]])

![[C4 Model 2026-03-16 17.58.26.excalidraw.svg]]
%%[[C4 Model 2026-03-16 17.58.26.excalidraw.md|🖋 Edit in Excalidraw]]%%

---
## Custom Web App (aka [[Layer 2 – Integrations|Layer 2]])

![[C4 Model 2026-03-16 18.09.19.excalidraw.svg]]
%%[[C4 Model 2026-03-16 18.09.19.excalidraw.md|🖋 Edit in Excalidraw]]%%

---
## Siri Shortcuts (aka [[Layer 3 – Fast Input|Layer 3]])

![[C4 Model 2026-03-16 22.35.50.excalidraw.svg]]
%%[[C4 Model 2026-03-16 22.35.50.excalidraw.md|🖋 Edit in Excalidraw]]%%

---
## Device Widgets (aka [[Layer 4 – Widgets|Layer 4]])

![[C4 Model 2026-03-16 22.43.00.excalidraw.svg]]
%%[[C4 Model 2026-03-16 22.43.00.excalidraw.md|🖋 Edit in Excalidraw]]%%