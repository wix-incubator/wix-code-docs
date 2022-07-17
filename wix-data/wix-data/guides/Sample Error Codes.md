# Error Codes Presentation - Examples 

## Option 1: Tables

#### Who uses it?
* [Twitter](https://developer.twitter.com/ja/docs/basics/response-codes) - Best example
* [Google](https://developers.google.com/maps/documentation/javascript/error-messages)
* [Meta (formerly Sefer Hapanim)](https://developers.facebook.com/docs/marketing-api/error-reference/)

There are two ways we can mark up the tables:

### MD

#### Pros/Cons
* Pros:
    * Nicely organized and presented
* Cons:
    * NOT FUN to work with.
    * No multi-line code blocks.

Example:

| <div style="width:100px">Code</div>    |Message | More Information |
|---------|--------------------------------------------------------------------|-------------|
| WDE0001 | Collection name must be a string.| The provided collection name isn't a valid string value.|
| WDE0002 | Item ID must be a string.|             |
| WDE0004 | Failed to save {your item name} into {your collection name}. Items must be JavaScript objects.| The item must be a valid JavaScript object. <br>For example: <br>`const item = {`<br>`  "title":"Mr.",`<br>`  "first_name":"John",`<br>`  "last_name":"Doe"`<br>`}`|
| WDE0006 | Failed to bulk save items into {your collection name}.Cannot insert more than 1000 items in one request.| Avoid this error by splitting up your request into batches of fewer than 1000 items.|
|WDE0011| Invalid .filter usage. .filter requires WixDataFilter.| The argument passed to the WixDataAggregate [`filter()`](https://www.wix.com/velo/reference/wix-data/wixdataaggregate/filter) function must be a valid [WixDataFilter](https://www.wix.com/velo/reference/wix-data/wixdatafilter) object.|


## Option 2: Bulleted list

#### Who uses it?
* [Stripe](https://stripe.com/docs/error-codes)

#### Pros/Cons
* Pros:
    * Easy to write/update
* Cons:
    * The presentation is not great

Example:

* `WDE0001: Collection name must be a string.`  
   The provided collection name isn't a valid string value.
* `WDE0002: Item ID must be a string.` 
* `WDE0004: Failed to save {your item name} into {your collection name}. Items must be JavaScript objects.`
   
   The item must be a valid JavaScript object.

   For example:
   
   ```JS
   const item = {
    "title": "Mr.",
    "first_name": "John",
    "last_name": "Doe"
   }
   ```
* `WDE0006: Failed to bulk save items into {your collection name}.Cannot insert more than 1000 items in one request.`

   Avoid this error by splitting up your request into batches of fewer than 1000 items.
* `WDE0011: Invalid .filter usage. .filter requires WixDataFilter.`
   
   The argument passed to the WixDataAggregate [`filter()`](https://www.wix.com/velo/reference/wix-data/wixdataaggregate/filter) function must be a valid [WixDataFilter](https://www.wix.com/velo/reference/wix-data/wixdatafilter) object.
