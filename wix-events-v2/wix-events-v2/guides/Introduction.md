---
title: Introduction
---
# Introduction

&nbsp;
<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div> . 

&nbsp;

>**Note**: These modules are [universal](https://support.wix.com/https://www.wix.com/velo/reference/api-overview/api-versions#universal-modules). Functions in these modules can run on both the backend and frontend, unless specified otherwise.

[Wix Events](https://support.wix.com/en/article/about-wix-events) allows site owners to create and manage events, including selling tickets, tracking orders and managing event policies.

## Terminology
- **Event** - a type of gathering an individual or a business holds for a group of people. Our APIs support 3 different types of events:
  - RSVP events: Free events that collect RSVPs - yes/no attendance tracking (e.g., a wedding).
  - Ticketed events: Events which have tickets for sale (e.g., a conference).
  - External registration events: Events where the registration occurs on a different website and the events within the Wix platform are display-only.  
- **Ticket definition** - the settings that define the ticket options available for purchase for ticketed events. Name, price and currency are required for each ticket definition.
- **Policy** - free-text that defines terms & conditions and other policies, as relevant.

> **NOTE**:  
A Wix service fee of 2.5% is charged for each ticket sold. This fee can either be passed on to the buyer or absorbed by the event owner.

The Wix Events APIs include:  
- **Event**: Create and manage the events the business offers.  
- **RSVP**: Manage guest RSVP statuses (for RSVP events).   
- **Tickets**: Manage purchased tickets (for ticketed events).   
- **Ticket Definitions**: Create and manage the types of tickets available for purchase (for ticketed events).  
- **Registration Form**: Manage the data collected from customers during registration (for both RSVP and ticketed events).  
- **Policy**: Create and manage event policies - when applied, these policies must be accepted during Checkout or RSVP creation.  
- **Checkout**: Create and manage reservations. 
- **Order**: Manage and track ticket orders.  
- **Category**: Create and manage event categories.  

