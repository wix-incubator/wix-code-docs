# Give & Get Example - Scheduling Jobs

Let's take a look at an example of a scheduled job from our [Give & Get site](https://www.wix.com/velo-dev/giveandget) ([template](https://editor.wix.com/html/editor/web/renderer/new?siteId=bc57d791-a42d-4f8c-b74e-bd51b6dd0095&metaSiteId=398bcfa9-b93e-435a-95ea-9a0c15d56d36&autoDevMode=true)). 

On our site, we use a scheduled job to remove giveaways that were either added or last updated over two months ago. 

The job configuration looks like this:

```javascript
{
    "jobs": [
        {
            "functionLocation": "/giveawaysModule.jsw",
            "functionName": "removeOldGiveaways",
            "description": "A daily checkup that removes old giveaways",
            "executionConfig": {
                "time": "08:00"
            }
        }
    ]
}
```

As you can see the job is configured to call the `removeOldGiveaways()` function from **giveawaysModule.jsw** once a day at 8:00 in the morning UTC time.

The `removeOldGiveaways()` function looks like this:

```javascript
export async function removeOldGiveaways() {
    const now = new Date();
    const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, now.getDate());

    const { items: oldGiveaways } = await wixData.query('Giveaways')
        .lt('_updatedDate', twoMonthsAgo)
        .find();

    const oldGiveawaysIDs = oldGiveaways.map(giveaway => giveaway._id);

    wixData.bulkRemove('Giveaways', oldGiveawaysIDs);
}
```

We begin by calculating the date of the day that occurred two months ago. 

```javascript
const now = new Date();
const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, now.getDate());
```

Then, we find the giveaways that are older than two months old.

```javascript
const { items: oldGiveaways } = await wixData.query('Giveaways')
    .lt('_updatedDate', twoMonthsAgo)
    .find();
```

Next, we extract the IDs from the old giveaways. We need these to delete them.

```javascript
const oldGiveawaysIDs = oldGiveaways.map(giveaway => giveaway._id);
```

Finally, we remove all the old giveaways using the bulk removal operation.

```javascript
wixData.bulkRemove('Giveaways', oldGiveawaysIDs);
```