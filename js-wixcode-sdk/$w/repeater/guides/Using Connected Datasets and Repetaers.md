# Velo Repeaters: Using Connected Datasets and Repeaters



Sometimes you will need to connect a repeater and its elements to two datasets, one of which is filtered by the other. If you then want to control the datasets with code, you need to understand how the datasets behave when selected from different [scopes](https://support.wix.com/en/article/understanding-the-scope-of-w-selectors).

For example, suppose you have some collections related to music. One collection stores information about bands and another collection stores information about songs. You can create a repeater which has an item for each band. The band items could also list all the songs related to each band.

<div style="text-align:center">

![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/dfff8cbb-ddcb-4376-8cae-3fedb2dd4458/2017/12/26/08be89bb-a23b-4666-a750-9d5343d85023.png)

</div>

To create the repeater shown above, you need two datasets, one for the **Bands** collection and another for the **Songs** collection. The **Bands dataset** is connected to the repeater itself. That causes the repeater to create an item for each band in your collection. You can also connect some of the elements contained in the repeater's items to the **Bands dataset**. For example, you can display the band's name and picture in each item. The **Songs dataset** is also connected to some of the elements contained in the repeater's items. For example, you can display a list of songs by the band in an item using a table.

The **Bands dataset** and **Songs dataset** need to be connected in some manner. The connection allows you to show the correct songs in each band's repeater item.

### Connecting Datasets

There are two ways you can connect the two datasets. The way you choose depends on how your collections are set up. 

If your Songs collection contains a reference field that refers to items in the Bands collection, you can set a filter on the Songs dataset as shown here:

<div style="text-align:center">

![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/dfff8cbb-ddcb-4376-8cae-3fedb2dd4458/2017/12/26/14670565-e34e-44ad-bd0c-b8bbc3450e97.png)

</div>

If your Songs collection contains a regular field that matches a field in the Bands collection, you can set a filter on the Songs dataset as shown here:

<div style="text-align:center">

![](https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/dfff8cbb-ddcb-4376-8cae-3fedb2dd4458/2017/12/26/dba369c9-59e8-4140-b410-df611ebfe630.png)

</div>

### Using the Connected Datasets with Code

Before discussing each individual case, it is important to understand what is happening behind the scenes when you connect the datasets mentioned above to the elements in a repeater's items. Even though there is only one **Bands dataset** and one **Songs dataset**, we want those datasets to contain different items, depending on the context in which they are being used. 

For example, above we connected a table which appears in each of the repeater's items to the **Songs dataset**. We don't want all of the songs in the **Songs** collection to appear in each repeater item. Instead, we only want to display the songs relevant to a particular item's band. 

In order to make that work, a virtual **Songs dataset** is created for each repeater item. When you select the Songs dataset using a [repeated item scope selector](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#repeated-item-scope), you are selecting one of these virtual datasets. However, if you select the Songs dataset using a [global scope selector](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#global-scope), you are selecting the regular dataset.  

We will now discuss each individual case of how to use the types of datasets mentioned above with repeaters:

*   Using the Filtered Dataset inside the Repeater
*   Using the Filtered Dataset outside the Repeater
*   Using the Unfiltered Dataset inside the Repeater
*   Using the Unfiltered Dataset outside the Repeater

#### Using the Filtered Dataset inside the Repeater

When you select a dataset that is filtered using one of the methods mentioned above from a [repeated item scope selector](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#repeated-item-scope), you are selecting a virtual dataset. That virtual dataset only contains the items that relate to the current item in the dataset it is connected to via a filter. It also only controls elements that are connected to it in the current repeater item.

For example, in each repeater item we only see the songs that are related to that item's band. If we want to let users sort that list of songs, we could use the dataset `setSort()` function. In the repeater shown above, what looks like the table header is actually a group of three buttons. Each of those buttons has an `onClick` event handler that sorts the songs table based on a field.

```javascript
import wixData from 'wix-data';

$w.onReady( () => {
  $w("titleSort").onClick( (event) => {
    let $item = $w.at(event.context);
    $item("#songsDataset").setSort(wixData.sort().ascending("title"));
  } );
    
  $w("lengthSort").onClick( (event) => {
    let $item = $w.at(event.context);
    $item("#songsDataset").setSort(wixData.sort().ascending("length"));
  } );
    
  $w("albumSort").onClick( (event) => {
    let $item = $w.at(event.context);
    $item("#songsDataset").setSort(wixData.sort().ascending("album"));
  } );
} );
```

Since the Songs dataset is selected using a repeated item scope selector, the sort is applied to a virtual dataset. So when a user clicks a button to sort the songs in one of the items the songs in all the other items are not affected. Note that we don't have to write the sorting code for each virtual dataset. We write the code only once and it is applied to the correct item automatically. 

#### Using the Filtered Dataset outside the Repeater

When you select a dataset that is filtered using one of the methods above from a [global scope selector](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#global-scope), you are selecting a regular dataset. That regular dataset only controls the elements connected to it that are not contained in repeater items. The elements inside repeater items are not affected even though they are connected to the same dataset.

For example, let's say we had a button outside the repeater shown above. If we called the dataset `setSort()` function in the button's `onClick` event handler nothing would happen to any of the songs tables in the repeater's items. If there was a table outside of the repeater connected to the dataset, its items would be sorted.

#### Using the Unfiltered Dataset inside the Repeater

When you select the dataset that the repeater itself is connected to using a [repeated item scope selector](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#repeated-item-scope), you are selecting a virtual dataset. That virtual dataset contains only one item, the one that the current repeater item is based on.

For example, each item in the repeater shown above has its own virtual **Bands dataset**. That dataset contains only one band, the band in the current repeater item.

#### Using the Unfiltered Dataset outside the Repeater

When you select the dataset which the repeater itself is connected to using a [global scope selector](../Wix%20Editor%20Elements%20with%20Velo/Understanding%20the%20Scope%20of%20Selector%20Functions.md#global-scope), you are selecting a regular dataset. That regular dataset controls the number and order of the repeater items and any elements connected to it that are not contained in repeater items. The elements inside repeater items are not affected even though they are connected to the same dataset.

For example, let's say we had a button outside the repeater shown above. We could use it to sort the items in the repeater by calling the dataset `setSort()` function in the button's `onClick` event handler. Nothing would happen to any of the elements inside the repeated items, but the items themselves would be sorted.

```javascript
import wixData from 'wix-data';

$w.onReady( () => {
  $w("repeaterSort").onClick( (event) => {
    if(event.target.label === "A-Z"){
      $w("#bandsDataset").setSort(wixData.sort().ascending("name"));
      event.target.label = "Z-A";
    }
    else {
      $w("#bandsDataset").setSort(wixData.sort().descending("name"));
      event.target.label = "A-Z";
    }
  } );
} );  
```