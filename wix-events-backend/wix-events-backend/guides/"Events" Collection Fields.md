

# "Events" Collection Fields







To use the Events collection in code, refer to it as `"Events/Events"`.

```javascript
wixData.query("Events/Events")
  .find()
  .then( (results) => {
    // handle the results
  } );
```

This document describes the permissions and fields in your Events collection.

### Permissions 

The Events collection has the following [permissions](https://support.wix.com/en/article/about-collection-permissions):

-   **Read:** Anyone 
-   **Create:** None
-   **Update:** None
-   **Delete:** None

You cannot change the Events collection's permissions. 

### Fields 

The field name is listed as the heading of each section, with the field key listed in parentheses, like this: Name (name). The fields appear in this document in the order in which they appear in your collection by default.

#### ID (\_id) 

**Description**: The event ID that was created by the server. This is a system field and is hidden by default.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Title (title) 

**Description**: The event's name.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: lt, lte, gt, gte, hasSome, urlized  
**Read-only**: Yes

#### Slug (slug) 

**Description**: The event's slug, which is its URL-friendly name that is unique across your site.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: Yes  
**Can be sorted**: Yes  
**Can be filtered**: eq, ne, lt, lte, gt, gte, hasSome, urlized  
**Read-only**: Yes

#### Description (description) 

**Description**: The short teaser specified in the Events Dashboard.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### About (about) 

**Description**: The information you entered in the "About Your Event" section of the Events Dashboard.  
**Type**: Rich Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Main Image (mainImage) 

**Description**: Displays the image for this event.  
**Type**: Image  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Start (start) 

**Description**: The start date and time of the event, if any. If the event schedule is TBD, this field is blank.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### End (end) 

**Description**: The end date and time of the event, if any. If the event schedule is TBD, this field is blank.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: Yes  
**Read-only**: Yes

#### Time Zone (timeZoneId) 

**Description**: The time zone for your event. If the event schedule is TBD, this field is blank.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Schedule TBD (scheduleTbd) 

**Description**: Indicates whether the time of this event is marked as TBD.  
**Type**: Boolean  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Schedule Formatted (scheduleFormatted) 

**Description**: If the event has a date and time, the the event's date and time, formatted according to your local settings, are displayed. Otherwise, the TBD message from the Events Dashboard is displayed.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Start date formatted (scheduleStartDateFormatted) 

**Description**:   
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Start time formatted (scheduleStartTimeFormatted) 

**Description**:  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Location Name (locationName) 

**Description**: If the event has a location, that location is displayed. Otherwise, the TBD message from the Events Dashboard is displayed.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Location latitude (latitude) 

**Description**: Event location address's latitude.  
**Type**:Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Location longitude (longitude) 

**Description**: Event location address's longitude.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Location Address (locationAddress) 

**Description**: The full address of the location. If the location is TBD, this field is blank.  
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Created (created) 

**Description**: Displays the date and time the event was created.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Modified (modified) 

**Description**: Displays the date and time the event was last modified.  
**Type**: Date and Time  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: Yes  
**Can be filtered**: No  
**Read-only**: Yes

#### Status (status) 

**Description**: The current status of the event, as follows:

-   SCHEDULED: The event date is in the future.
-   STARTED: The event start time has arrived.
-   ENDED: The event end time has passed.
-   CANCELED: The event was canceled.

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: eq, ne, hasSome  
**Read-only**: Yes

#### Type (type) 

**Description**: The type of event, as follows:

-   RSVP: The event is set up to accept RSVP registration via your Wix page.
-   TICKETS: The event is set up to sell tickets.
-   EXTERNAL: The event is set up to accept registration via an external page 

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Registration Status (registrationStatus) 

**Description**: The registration status, as follows:

-   OPEN\_RSVP: RSVP registration is open.
-   OPEN\_TICKETS: Ticket sales for this event are open.
-   OPEN\_EXTERNAL: RSVP registration or ticket sales are closed but registration via an external site is open.
-   OPEN-RSVP\_WAITLIST: The RSVP list is full but requests can be added to a waitlist.
-   CLOSED: RSVP registration or ticket sales are closed.
-   CLOSED\_MANUALLY: RSVP registration or ticket sales have been closed manually in the Events Dashboard.

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Lowest Price Formatted (lowestPriceFormatted) 

**Description**: The lowest price available, formatted with your currency.

-   If this event has RSVP registration or is external, this field is blank. 
-   If tickets are sold for this event, the lowest price available is displayed. 
-   If free tickets are offered, "Free" is displayed.

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Highest Price Formatted (highestPriceFormatted) 

**Description**: The highest price available, formatted with your currency.

-   If this event has RSVP registration, this field is blank. 
-   If tickets are sold for this event, the highest price available is displayed. 
-   If only free tickets are offered, "Free" is displayed.

**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Google Calendar URL (googleCalendarUrl) 

**Description**: Displays an "Add to Google calendar" link to the event.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### iCalendar URL (iCalendarUrl) 

**Description**: Displays an iCalendar download link to the event.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Site Event Page URL (siteEventPageUrl) 

**Description**: The event's URL-friendly name that is unique across your site.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Registration URL (registrationURL) 

**Description**: Registration URL if registration for the Wix event managed externally. Guests go to this URL to register.  
**Type**: URL  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: No  
**Read-only**: Yes

#### Creator ID (UserID) 

**Description**: ID of the creator of the event.   
**Type**: Text  
**Can connect to data**: Yes  
**Can use in dynamic page URL**: No  
**Can be sorted**: No  
**Can be filtered**: Yes  
**Read-only**: Yes
