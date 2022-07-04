## SQL Package

> **Example Site**  
> To see a live example, click [here](https://www.wix.com/velo/example/to-do-list-with-sql).

This package provides you with the ability to use a subset of the SQL programming language to interact with database collections on your site. The package converts SQL statements to the Wix Data API syntax. 

There are 4 main operators supported in this package: SELECT, INSERT INTO, UPDATE, DELETE.

There are 4 additional operators supported in this package: WHERE, LIMIT, ORDER BY, JOIN.

To see an example site that demonstrates how to use this package, click [here](https://www.wix.com/velo/example/to-do-list-with-sql).

### Setup 

This package does not require any initial setup.


### Package Content 

The following backend files are included in the package. Note that only exported functions that you can use in your site are listed here.


#### exposer.js

The code in this file contains a function for converting SQL statements to the Wix-Data API syntax.

To use the function below in your backend code, import it with the following syntax: 

```js
import { sql } from '@velo/wix-data-sql-backend';
```


*   **sql()**

    Receives an SQL statement string and converts it to Wix Data API syntax. Returns a JSON containing a payload that is specific to the type of operation performed.

    ```js
    export function sql(sqlStr: String);
    ```


### How to Use the Package 

This section demonstrates how you can work with the package, and the different operators for using the package function. You can also see a working example of this package [here](https://www.wix.com/velo/example/to-do-list-with-sql).

The first part of this section lists and explains how to use the operators supported in the package. The second part of this section gives an example of how you can implement some of these operations to create a To-Do-List. 


#### Operators 

There are 4 main operators supported in this package: SELECT, INSERT INTO, UPDATE, DELETE. There are 4 additional operators supported in this package: WHERE, LIMIT, ORDER BY, JOIN.

To demonstrate how to use the operators, we’ll refer to the following 2 database collections. Note that the first row bolded in each database collection are the fields in the collection. 

**Players**


| number | name | team |
| ------ | ---- | ---- |
|1 | Michael | Bulls |
|2 | Kobe | Lakers |


**Teams**


| name | city | championships |
| ------ | ---- | ---- |
| Bulls | Chicago | 6 |
| Lakers | Los Angeles | 17 |
| Clippers | Los Angeles | 0 |



##### Main Operators 

**SELECT**

Selects data from a specified database collection. Returned [payload type](#payload-types) is `data`.

Options: 



*   **All Columns** 

    Selects all the columns from the specified database collection.
    
    
    **Syntax:** `SELECT * FROM <collection>`
    
    **Example:** `sql('SELECT * FROM Players');`
    
    **Example Output:**
    
    ```js 
    columns: ['number', 'name', 'team']

    rows: [{number: 1, name: 'Michael', team: 'Bulls'}, {number: 2, name: 'Kobe', team: 'Lakers'}]
    ```

*   **Specific Columns**

    Selects the specified columns from the specified database collection.


    **Syntax:** `SELECT [<column>] FROM <collection>`
    
    **Example:** `sql('SELECT number, name FROM Players')`
    
    **Example Output:**
    
    ```js
    columns: ['number', 'name']

    rows: [{number: 1, name: 'Michael'}, {number: 2, name: 'Kobe'}]
    ```

*   **Distinct** 

    Selects the distinct values in the specified column from the specified database collection.

    **Syntax:** `SELECT <column> FROM <collection>`
    
    **Example:** `sql('SELECT DISTINCT city FROM Teams')`
    
    **Example Output:**

    ```js
    columns: ['city']

    rows: [{city: 'Chicago'}, {city: 'Los Angeles'}]
    ```

*   **Functions** 

    Selects the specified column from the specified database collection and executes a specified function on the selection.

    Supported Functions: 
	*   MIN: Minimum value
	*   MAX: Maximum value
	*   SUM: Sum of all values. For numeric fields only. 
	*   AVG: Average of all values. For numeric fields only.
	*   COUNT: Number of records.


    **Syntax:** 
    
    ```js
    SELECT [<function>(<column>)] 
    FROM <collection>
    ```
    
    **Example:** `sql('SELECT MIN(championships), MAX(championships) FROM Teams')`
    
    **Example Output:** 

    ```js
    columns: ['championshipsMin', 'championshipsMax']

    rows: [{championshipsMin: 0}, {championshipsMax: 17}]
    ```

**INSERT INTO**

Inserts a new record (row) into a specified database collection. Returned [payload type](#payload-types) is `inserted`.

**Syntax:** 

```js
INSERT INTO <collection> ([<column>])
VALUES ([<value>])
```

**Example:** `sql('INSERT INTO Players (number, name, team) VALUES (3, 'Bird', 'Celtics')')`

**Example Output:** `true`

Players collection after insertion: 


| number | name | team |
| ------ | ---- | ---- |
|1 | Michael | Bulls |
|2 | Kobe | Lakers |
|3 | Bird | Celtics |

**UPDATE**

Updates existing records in a specified database collection. Returned [payload type](#payload-types) is `updated`.

Use SET to set the updated value of the record. Use WHERE to specify which record to update. Note that if you omit the WHERE clause, all records in the collection will be updated.

**Syntax:** 

```js
UPDATE <collection> 
SET [<column> = <value>] 
WHERE <condition>
```

**Example:** `sql('UPDATE Players SET name = 'Jordan' WHERE number = 1')`

**Example Output:**

Players collection after update: 


| number | name | team |
| -----  | ---- | ---- |
| 1 | Jordan | Bulls |
| 2 | Kobe | Lakers |
| 3 | Bird | Celtics |

**DELETE**

Deletes existing records from a specified database collection. Returned [payload type](#payload-types) is `deleted`.

Use WHERE to specify which record to delete. Note that if you omit the WHERE clause, all records in the collection will be deleted.

**Syntax:** `DELETE FROM <collection> WHERE [<condition>]`

**Example:** `sql('DELETE FROM Players WHERE number = 3')`

**Example Output:** `1 (Number of rows deleted)`


##### Additional Operators 

**JOIN**

Joins two specified collections based on common values. Returned [payload type](#payload-types) is `data`.


Types:  


*   **Inner Join**

    Returns records that have matching values in both database collections.


    **Syntax:** 
    
    ```js
    SELECT [<collection1>.<column>], [<collection2>.<column>] 
    FROM <collection1>
    INNER JOIN <collection2>
    ON <collection1_column> = <collection2_column>
    ```
    **Example:** `sql('SELECT Teams.city, Players.team, Players.name FROM Teams INNER JOIN Players ON Teams.name = Players.team')`

    **Example Output:**

    ```js
    columns: [‘Teams.city’, ‘Players.team’, ‘Players.name’]
    
    rows: 
    [{Teams_city: ‘Chicago’, Players_team: ‘Bulls’, Players_name: ‘Michael’},{Teams_city: ‘Los Angeles’, Players_team: ‘Lakers’, Players_name: ‘Kobe’}]
    ```

*   **Left Join**	

    Returns all records from the left column of a specified database collection, and the matched records from the right column of another database collection.


    **Syntax:** 
    
    ```js
    SELECT [<collection1>.<column>], [<collection2>.<column>] 
    FROM <collection1>
    LEFT JOIN <collection2>
    ON <collection1_column> = <collection2_column>
    ```

    **Example:** `sql('SELECT Teams.city, Teams.name, Players.team, Players.name FROM Teams LEFT JOIN Players ON Teams.name = Players.team')`

    **Example Output:**

    ```js
    columns: [‘Teams.city’, ‘Teams.name’, ‘Players.team’, ‘Players.name’]

    rows: 
    [{Teams_city: ‘Chicago’, Teams_name: ‘Bulls’, Players_team: ‘Bulls’, Players_name: ‘Michael’}, {Teams_city: ‘Los Angeles’, Teams_name: ‘Lakers’, Players_team: ‘Lakers’, Players_name: ‘Kobe’}, {Teams_city: ‘Los Angeles’, Teams_name: ‘Clippers’, Players_team: ‘’, Players_name: ‘’}]
    ```

**LIMIT**

Limits the amount of records returned from an operation. Used in conjunction with the SELECT operator. Default is 50. Returned [payload type](#payload-types) is `data`.

**Syntax:** `SELECT * FROM <collection> LIMIT <number>`

**Example:** `sql('SELECT number, name FROM Players LIMIT 1')`

**Example Output:** 

```js
columns: ['number', 'name']

rows: [{number: 1, name: 'Michael'}]
```

**ORDER BY**

Sorts records of specified database collection in ascending or descending order. Used in conjunction with the SELECT operator. Default is ascending order (ASC). Returned [payload type](#payload-types) is data.

**Syntax:** 

```sql
SELECT * FROM <collection> 
ORDER BY [<column> <sort_type>]
```

**Example:** `sql('SELECT name, championships FROM Teams ORDER BY championships ASC')`

**Example Output:**

```js
columns: ['name', 'championships']

rows: [{name: 'Clippers', championships: 0}, {name: 'Bulls', championships: 6}, {name: 'Lakers', championships: 17}]
```

**WHERE**

Filters records using specific conditions. Returned [payload type](#payload-types) is `data`.

*   **Single Condition**

    **Syntax:**  `… WHERE <condition>`

    **Example:** `sql('SELECT * FROM Players WHERE name = 'Kobe'')`

    **Example Output:**

    ```js
    columns: ['number', 'name', 'team']  

    rows: [{number: 2, name: 'Kobe', team: 'Lakers'}]
    ```

    Supported operators: 

	*   = equal
	*   != not equal
	*   <> not equal
	*   < less than
	*   <= less than or equal 
	*   \> larger than
	*   \>= larger than or equal  
	*   LIKE search for a pattern using wildcards. For example:
	    *   Begins with: WHERE value LIKE ‘prefix%’
	    *   Contains: WHERE value LIKE ‘%infix%’
	    *   Ends with: WHERE value LIKE ‘%postfix’
    
*   **Chained Conditions**

    You can chain 2 or more clauses. You can either chain ‘AND’ clauses or ‘OR’ clauses, but not both.

    **Syntax:** `… WHERE <condition> AND|OR <condition>`
    
    **Example:** `sql('SELECT * FROM Teams WHERE city = 'Los Angeles' AND championships > 1')`
    
    **Example Output:**
    
    ```js
    columns: ['name', 'city', 'championships']

    rows: [{name: 'Lakers', city: 'Los Angeles', championships: 17}]`
    ```

##### Payload Types

Each operation returns a specific payload type:

**data**

*   **path:** result.payload.data
*   **type:** Object with 2 keys: 
    *   columns: Array of Strings representing the collection’s fields (column names) 
    *   rows: Array of Objects representing the collection’s items (entries). Contains a key-value mapping representing the relationship between a collection’s column (field) and the specific entry’s (item’s) value for that column.
*   **returned by:** SELECT, JOIN 


**inserted**

*   **path:** result.payload.inserted
*   **type:** Boolean (`true` if the item successfully inserted or `false` if the item failed to insert). 
*   **returned by:** INSERT INTO


**updated**

*   **path:** result.payload.updated
*   **type:** Number (number of entries updated).
*   **returned by:** UPDATED


**deleted**

*   **path:** result.payload.deleted
*   **type:** Number (number of entries deleted).
*   **returned by:** DELETE


#### Example: Create a To-Do List  

The following describes how you can use this package to create a to-do list. We use the package functions to insert, update, get, and delete tasks from a database collection that we call `MyTasks`.



1. Import the `sql()` function from the backend package file to a web module. We’ll call our web module **data.jsw.**

    ```js
    import { sql } from '@velo/wix-data-sql-backend';
    ```


2. To get, insert, update, and remove tasks from the to-do list, include the following code in the file:

    ```js
    export async function getAllTasks(visitorId) {
       try {
           const results = await sql('SELECT _id, title, isComplete FROM MyTasks WHERE visitorId = "' + visitorId + '"');
           return results.payload.data.rows;
       } catch (error) {
           console.error(error);
       }
    }

    export async function insertTask(taskObj) {
       try {
           await sql('INSERT INTO MyTasks (title, isComplete, visitorId) values ("' + taskObj.title + '", false , "' + taskObj.visitorId + '")');
       } catch (error) {
           console.error(error);
       }
    }

    export async function updateTask(taskID, newStatus) {
       try {
           await sql('UPDATE MyTasks SET isComplete = ' + newStatus + ' Where _id = "' + taskID + '"');
       } catch (error) {
           console.error(error);
       }
    }

    // This function returns a promise to allow calling it several times without waiting for each call to complete.
    export function removeTask(taskID) {
       try {
           const removePromise = sql('DELETE FROM MyTasks WHERE _id = "' + taskID + '"');
           return removePromise;
       } catch (error) {
           console.error(error);
       }
    }
    ```


3. Add the following page elements to your site:
    *   Text input for adding a task.
    *   Button to trigger the addition.
    *   Button to  clear marked tasks. 
    *   Repeater with a task complete button and text for displaying the task. 

4. Import the `getAllTasks(), insertTask(), updateTask(),`and` removeTask()`functions from the web module to your page code.

    ```js
    import { getAllTasks, insertTask, updateTask, removeTask } from 'backend/data';
    ```

5. Import the `local()` module from `wix-storage`. 

    ```js
    import { local } from 'wix-storage';
    ```

6. Declare variables for a font style and size and the visitor ID. 

    ```js
    const htmlFontFamily = `madefor-display`;
    const htmlFontSize = `14px`;
    let visitorId;
    ```


7. Initialize the repeater data and call the registerHandlers() and setVisitor() functions. 

    ```js
    $w.onReady(function () {
       $w('#repeater').data = [];
       registerHandlers();
       setVisitor();
    });
    ```

8. When the repeater’s data is assigned and ready, display the task text retrieved from the database collection in each of the repeater’s items. If the task is complete, label the button in the repeater with an ‘X’ and call the changeCompleteStatus() function with the item and itemData. 

    ```js
    function registerHandlers() {
       $w('#repeater').onItemReady(($item, itemData) => {
           $item('#taskTitle').text = itemData.title;
           if (itemData.isComplete === true) {
               $item('#taskCompleteButton').label = 'X';
           }
           getHTMLtag($item('#taskTitle'), itemData.isComplete);
           $item('#taskCompleteButton').onClick(() => changeCompleteStatus($item, itemData));
       });
   }
   ```


9. Call the createNewTask() function when the **Add Task** button is clicked or when a site visitor presses the **Enter** key in the task input. 

    ```js
       $w('#addButton').onClick(() => createNewTask());
       $w('#taskInput').onKeyPress((event) => {
           if (event.key === 'Enter') {
               createNewTask();
           }
       });
    ```


10. Call the clearCompletedTasks() function when the Clear Marked Tasks button is clicked. 

    ```js
       $w('#clearButton').onClick(() => clearCompletedTasks());
    ```


11. Include the following code to create a new task, change the complete button status, and clear the completed tasks. 

    ```js
    async function createNewTask() {
       const toInsert = {
           title: $w('#taskInput').value,
           isComplete: false,
           visitorId
       };
       $w('#taskInput').value = null;
       try {
           await insertTask(toInsert);
           await fetchData();
       } catch (error) {
           console.error(error);
       }
    }

    async function changeCompleteStatus($item, itemData) {
       try {
           if ($item('#taskCompleteButton').label === 'X') {
               $item('#taskCompleteButton').label = '';
               getHTMLtag($item('#taskTitle'), false);
               await updateTask(itemData._id, false);
           } else {
               $item('#taskCompleteButton').label = 'X';
               getHTMLtag($item('#taskTitle'), true);
               await updateTask(itemData._id, true);
           }
       } catch (error) {
           console.error(error);
       }
    }

    // Call the remove function asynchronously and store the promise returned by each call in the removePromises array. We use Promise.all in order to wait for all calls to complete before returning from the function.
    async function clearCompletedTasks() {
       let removePromises = [];
       let remainedTasks = [];
       $w('#repeater').forEachItem(async ($item, itemData) => {
           if ($item('#taskCompleteButton').label === 'V') {
               const removePromise = removeTask(itemData._id);
               removePromises.push(removePromise);
           } else {
               remainedTasks.push(itemData);
           }
       });
       try {
           await Promise.all(removePromises);
       } catch (error) {
           console.error(error);
       }
       $w('#repeater').data = remainedTasks;
    }
    ```


12. Check whether the task was completed and format the task text accordingly (strike through the task text):

    ```js
    function getHTMLtag(taskTitle, del) {
       if (del) {
           taskTitle.html = `<p style="font-family:${htmlFontFamily}; font-size:${htmlFontSize}"><del>${taskTitle.text}</del></p>`;
       } else {
           taskTitle.html = `<p style="font-family:${htmlFontFamily}; font-size:${htmlFontSize}">${taskTitle.text}</p>`;
       }
    }
    ```


13. Get the visitor ID from Wix local storage. Call the fetchData() function to get all the tasks associated with the specified visitor ID and set the repeater’s data with the tasks. 

    ```js
    function setVisitor() {
       visitorId = local.getItem('visitor-id');
       if (!visitorId) {
           visitorId = Math.random().toString(36);
           local.setItem('visitor-id', visitorId);
       }
       fetchData();
    }

    async function fetchData() {
       $w('#loaderImage').expand();
       try {
           $w('#repeater').data = await getAllTasks(visitorId);
           $w('#loaderImage').collapse();
       } catch (error) {
           console.error(error);
       }
    }
    ```



## Release Notes

**1.0** Initial version.


## Tags

SQL, wixData
