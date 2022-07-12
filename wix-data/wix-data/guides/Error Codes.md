# Error Codes - Sample

## Option 1 Tables

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
    * NOT FUN to work with. Especially code blocks.

| Code    |Message                                                             | More Information |
|---------|--------------------------------------------------------------------|-------------|
| WDE0001 | Collection name must be a string.| The provided collection name isn't a valid string value.|
| WDE0002 | Item ID must be a string.|             |
| WDE0004 | Failed to save {your item name} into {your collection name}. Items must be JavaScript objects.| The item must be a valid JavaScript object. <br>For example: <br>`const item = {`<br>`  "title":"Mr.",`<br>`  "first_name":"John",`<br>`  "last_name":"Doe"`<br>`}`|
| WDE0006 | Failed to bulk save items into {your collection name}.Cannot insert more than 1000 items in one request.| Avoid this error by splitting up your request into batches of fewer than 1000 items.|
|WDE0011| Invalid .filter usage. .filter requires WixDataFilter.| The argument passed to the WixDataAggregate [`filter()`](https://www.wix.com/velo/reference/wix-data/wixdataaggregate/filter) function must be a valid [WixDataFilter](https://www.wix.com/velo/reference/wix-data/wixdatafilter) object.|

### HTML tables in MD

#### Pros/Cons
* Pros:
  * Allows you to use the flexibility of both HTML and MD
  * Even better presentation than basic MD tables.
* Cons:
  * Reading the raw text is not so easy and tedious to edit.

<table>
<thead>
<tr>
<th>Code</th>
<th>Message</th>
<th>More Information</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>WDE0001</td>
<td>Collection name must be a string.</td>
<td>The provided collection name isn't a valid string value.</td>
<td></td>
</tr>
<tr>
<td>WDE0002</td>
<td>Item ID must be a string.</td>
<td></td>
<td></td>
</tr>
<tr>
<td>WDE0004</td>
<td>Failed to save {your item name} into {your collection name}. Items must be JavaScript objects.</td>
<td>
The item must be a valid JavaScript object.
    
For example:
      
```JS
const item = {
  "title": "Mr.",
  "first_name": "John",
  "last_name": "Doe"
} 
```
  
</td>
<td></td>
</tr>
<tr>
<td>WDE0006</td>
<td>Failed to bulk save items into {your collection name}.Cannot insert more than 1000 items in one request.</td>
<td>Avoid this error by splitting up your request into batches of fewer than 1000 items.</td>
<td></td>
</tr>
<tr>
<td>WDE0011</td>
<td>Invalid .filter usage. .filter requires WixDataFilter.</td>
<td>

The argument passed to the WixDataAggregate [`filter()`](https://www.wix.com/velo/reference/wix-data/wixdataaggregate/filter) function must be a valid [WixDataFilter](https://www.wix.com/velo/reference/wix-data/wixdatafilter) object.
  
</td>
<td></td>
</tr>
</tbody>
</table>

## Option 2 - Bulleted list

#### Who uses it?
* [Stripe](https://stripe.com/docs/error-codes)

#### Pros/Cons
* Pros:
    * Easy to write/update
* Cons:
    * Not well presented.

Example:

* `WDE0001: Collection name must be a string.`  
   The provided collection name isn't a valid string value.
* `WDE0002: Item ID must be a string.` 
* `WDE0004: Failed to save {your item name} into {your collection name}. Items must be JavaScript objects.`
   
   The item must be a valid JavaScript object.

   For example:
   ```
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
