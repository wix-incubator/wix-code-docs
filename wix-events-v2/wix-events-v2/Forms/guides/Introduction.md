---
title: Introduction
---
# Introduction

With the Forms API, you can customize a registration form for site visitors to fill out with their contact details and other relevant information. The form defines which elements are rendered on the site page during the registration process (RSVP or checkout).    

To build a registration form you need to use `controls` (blocks), each of which may contain multiple field inputs. For example, the `address` control may include inputs for street address, city, state, country, and zip code. By default, `name` and `email` controls are already included in the form and they can't be removed.    

You can also include the following additional controls:

- `phone`
- `address`
- `date`
- `additionalGuests`
- `dropdown`
- `checkBox`
- `text`
- `radioButton`

Each event has a published registration form by default which automatically updates when calling one of the API functions. The form becomes a draft and you can publish it by calling the `publishDraft` function.

The Forms API allows you to:  

- Add, delete, update controls with relevant fields on the form.
- Publish changes or discard them in a draft form.
- Update messages displayed on the form.
- Get information about the form.

## Before you begin

It’s important to note the following points before starting to code:  

- Install the **Wix Events & Tickets** app from [Wix App Market](https://www.wix.com/app-market/wix-events?referral=category&appIndex=5&referralTag=booking--events).
- To use the Forms API, import `{ forms }` from the `wix-events.v2` module:

```javascript
import { forms } from 'wix-events.v2';
```

## Terminology

- **Registration form**: An interface provided by an organization, website, or service to collect essential information from individuals who wish to sign up, enroll, or participate in an event, program, service, or membership.
- **Event**: A gathering organized by an individual or business for a group of people.