# SwapBoard — Design Document

## Project Description

SwapBoard is a full-stack web application built for college students to buy, sell, swap, and request everyday items such as textbooks, furniture, clothing, and electronics. General-purpose marketplaces like Facebook Marketplace are not designed for campus life — they lack student-focused organization, category filtering, and a way to post item requests. SwapBoard solves this by keeping everything on-campus, organized by category, and easy to use without requiring an account.

The goal of SwapBoard is to help students reuse and redistribute items at the end of each semester instead of throwing them away. Students can post listings to sell or swap items they no longer need, and post requests for items they are looking for. Other students can browse, filter, and contact sellers or requesters directly through the app.

Core features:
- Post, edit, and delete item listings (sell, swap, or free)
- Browse and filter listings by category and type
- Search listings by keyword
- Post requests for specific items with a budget
- Browse open requests from other students
- Mark requests as fulfilled when an item is found



## User Personas

### Persona 1 — Maya

**Age:** 22
**Year:** Senior (graduating in May)
**Location:** On-campus dorm, moving out in 3 weeks

**Background:**
Maya has lived in her dorm for four years and has accumulated furniture, textbooks, kitchen appliances, and clothes she no longer needs. She is moving into a small off-campus apartment and cannot take everything with her. She has tried posting on Facebook Marketplace but found it difficult to connect with other students specifically — most buyers were off-campus and unwilling to pick up from the dorm.

**Goals:**
- Quickly list multiple items (furniture, textbooks, appliances) before she moves out
- Find buyers or people willing to swap who are already on campus
- Clear out her room without having to throw things away

**How she uses SwapBoard:**
Maya uses the Listings page to post her IKEA shelf, mattress topper, and chemistry textbook. She sets her type to "sell" for most items and "free" for things she just wants gone. She checks back daily to see if anyone has contacted her.


### Persona 2 — Jordan

**Age:** 18
**Year:** Freshman (starting in September)
**Location:** Moving into campus housing for the first time

**Background:**
Jordan is moving across the country to attend university and cannot bring much from home. Jordan is on a tight budget and needs to furnish a dorm room, find textbooks, and pick up a few kitchen items before the semester starts. Jordan's parents have suggested buying new but Jordan wants to find affordable second-hand options from other students.

**Goals:**
- Find affordable textbooks for upcoming classes
- Furnish the dorm room with second-hand furniture
- Post requests for specific items and wait for someone to respond


**How Jordan uses SwapBoard:**
Jordan browses the Listings page filtered by "Academic" and "Furniture" to see what is available. Jordan also uses the Requests page to post a request for a psychology textbook and a desk, with a budget listed so sellers know what Jordan can afford.



### Partner A — Listings (Tony)

**User Story 1:**
As Maya, a graduating senior moving out of her dorm, I want to post a listing with a title, category, type (sell/swap/free), price, description, and contact email so that other students on campus can find and purchase my items before I leave.

**User Story 2:**
As Jordan, an incoming freshman on a budget, I want to browse all current listings and filter them by category (e.g. Academic, Furniture) and type (e.g. sell, free) so that I can quickly find items relevant to what I need.

**User Story 3:**
As Maya, I want to search listings by keyword so that I can check whether a specific item (like a "TI-84 calculator") is already being sold before I post my own listing.

**User Story 4:**
As Maya, I want to edit or delete my own listings so that I can update the price or remove an item once it has been sold.

---

### Partner B — Requests (Celine)

**User Story 5:**
As Jordan, an incoming freshman, I want to post a request for a specific item with a category, description, and budget so that students who have that item can see I am looking for it and reach out to me directly.

**User Story 6:**
As Jordan, I want to browse all open requests from other students so that I can see what items are in demand and decide whether I have something to offer.

**User Story 7:**
As Jordan, I want to edit my request if my budget changes or I find a better description so that my request stays accurate and relevant.

**User Story 8:**
As Jordan, I want to mark my request as fulfilled once I have found the item so that other students know it is no longer needed and the board stays clean and up to date.

**User Story 9:**
As Maya, I want to delete a request I posted if I no longer need the item so that I can keep my activity on the platform accurate.

---

## Design Mockups

Design mockups for the SwapBoard interface are located in the [`design-mockups`](./design-mockups) folder of this repository.

- [`swapboard_listings.pdf`](./design-mockups/swapboard_listings.pdf) — Mockup of the Listings page showing the card grid, filter toolbar, and Post a Listing form
- [`swapboard_requests.pdf`](./design-mockups/swapboard_requests.pdf) — Mockup of the Requests page showing open request cards, category filter, and Post a Request form

The mockups show the layout and structure of the two main pages of SwapBoard, including the navigation header, hero section, filter controls, card grid, and modal forms used for creating and editing listings and requests.
