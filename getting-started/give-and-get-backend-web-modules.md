# Give & Get Example - Backend Web Modules

Let's take a look at some examples of using a backend web module from our [Give & Get site](https://www.wix.com/velo-dev/giveandget) ([template](https://editor.wix.com/html/editor/web/renderer/new?siteId=bc57d791-a42d-4f8c-b74e-bd51b6dd0095&metaSiteId=398bcfa9-b93e-435a-95ea-9a0c15d56d36&autoDevMode=true)). 

We use backend web modules to:

-   Create a (fictitious) delivery by calling an external delivery API (**deliveries.jsw**). Writing this code on the backend lets us securely retrieve the API key from the **Secrets Manager** and avoids any possible [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues we might have encountered when using the Fetch API.
-   Perform data operations on our site's database collections (**giveawaysModule.jsw**). Writing this code on the backend allows us to centralize all our database interactions in one place, override collection permissions when necessary, and modify the data retrieved from the database before sending it to the frontend.

Let's examine one of the functions from our backend web modules. The `getMyGiveaways()` function is used to get the giveaways that the current logged-in member has added to the site. The retrieved giveaways are used on the **My Giveaways** page to show members a list of all the giveaways they added.

Since the **My Giveaways** page doesn't display all of the information that we store for each giveaway, we can boost performance by only sending it the information it needs. For example, the list of giveaways doesn't display the giveaway descriptions, which can be quite large. So we save some transmission time by not sending the descriptions to the page.

```javascript
// In backend/giveawayModule.jsw

import wixData from 'wix-data';
import wixUsersBackend from 'wix-users-backend';

// ...

export async function getMyGiveaways() {
    const { items: giveaways } = await wixData.query('Giveaways')
        .eq('giver', wixUsersBackend.currentUser.id)
        .include('category')
        .find();

    const myGiveaways = giveaways.map(giveaway => {
        const { _id, title, status, image, category, itemCondition } = giveaway

        return {
            _id,
            title,
            status,
            image,
            itemCondition,
            categoryTitle: category.title,
            link: giveaway['link-giveaways-title'],
            updateLink: giveaway['link-giveaways-1-title']
        }
    });

    return myGiveaways;
}
```

In the web module **giveawaysModule.jsw**, we start by importing the functionality we need to work with database collections and our site's users.

```javascript
import wixData from 'wix-data';
import wixUsersBackend from 'wix-users-backend';
```

Then, inside the `getMyGiveaways()` function we perform a query to find the current user's giveaways from the **Giveaways** collection. We [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) the query results so that we have the items returned by the query in a variable named `giveaways`.

```javascript
const { items: giveaways } = await wixData.query('Giveaways')
    .eq('giver', wixUsersBackend.currentUser.id)
    .include('category')
    .find();
```

Next we use the JavaScript `map()` function to create a pared-down version of the giveaway list that only contains the fields that are used on the **My Giveaways** page.

While we're at it, we also repackage some of the values with new keys to make the giveaway objects easy to use on the frontend.

```javascript
const myGiveaways = giveaways.map(giveaway => {
    const { _id, title, status, image, category, itemCondition } = giveaway

    return {
        _id,
        title,
        status,
        image,
        itemCondition,
        categoryTitle: category.title,
        link: giveaway['link-giveaways-title'],
        updateLink: giveaway['link-giveaways-1-title']
    }
});
```

All there's left to do now is return the new list of giveaways.

```javascript
return myGiveaways;
```

So that's the definition of the `getMyGiveaways()` function on the backend. Now, let's see how it's called on the **My Giveaways** page.

```javascript
import { getMyGiveaways, removeGiveaway } from 'backend/giveawaysModule';

// ...

$w.onReady(function () {
    bindGiveawaysRepeater();
    renderGiveawaysRepeater();
});

// ...

async function renderGiveawaysRepeater() {
    const giveaways = await getMyGiveaways();
    $w('#giveawaysRepeater').data = giveaways;
}
```

First, we import the `getMyGiveaways()` function from the backend web module.

```javascript
import { getMyGiveaways, removeGiveaway } from 'backend/giveawaysModule';
```

Then, in the `renderGiveawaysRepeater()` function, which is called from the `onReady` event handler, we call the function and wait for the returned Promise to resolve. When it resolves we set the page's repeater to the returned giveaways list.

```javascript
async function renderGiveawaysRepeater() {
    const giveaways = await getMyGiveaways();
    $w('#giveawaysRepeater').data = giveaways;
}
```