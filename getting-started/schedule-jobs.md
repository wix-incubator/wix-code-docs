# Schedule Jobs

There are many situations in which you want to schedule some code to run at a specific recurring interval. In Velo, you can create jobs and schedule them to run on an hourly, daily, weekly, or monthly basis using the **Job Scheduler**. 

Some common uses of the **Job Scheduler** are to:

-   Import or export data once a day.
-   Delete collection data that is no longer relevant once a week.
-   Send a status report to relevant parties once a month.

## Creating a Scheduled Job

To configure scheduled jobs, start by creating file in the **backend** root named **jobs.config**. The file must contain a JSON object that defines the jobs you want to schedule. You can configure up to twenty jobs.

A job's configuration defines when the job runs and what code it runs. A job can run any backend function defined in your site. Each job is represented by an object in the `jobs` array.

```javascript
// In backend/jobs.config

{
    "jobs": [
        {
            "functionLocation": "/someBackendFile.js", 
            "functionName": "someBackendFunction",
            "description": "Some job description",
            "executionConfig": {
                "dayOfWeek": "Monday",
                "time": "08:00"
            }
        }
    ]
}
```

Each job definition contains the following information:

`functionLocation`: Path to the backend file in which the job function resides.  
`functionName`: Name of the function to run at the scheduled time.  
`description`: Optional job description.  
`executionConfig`: Configuration that defines when the job runs.

There are two mutually exclusive ways to define when the job runs:

-   Using the time property and optional `dayOfWeek` or `dateInMonth` properties.
-   Using a [CRON expression](https://en.wikipedia.org/wiki/Cron#CRON_expression).

A few more things to keep in mind when scheduling jobs are:

-   All times in job configurations are [UTC time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). 
-   If you want to schedule a job to occur more than once a day, you need to use a cron expression. 
-   The shortest interval you can define for a job is one hour. Jobs scheduled more frequently are ignored.
-   You need to publish your site for any changes to your scheduled jobs to take effect.

## Example

Now that you know the rules, let's take a look at some examples of scheduled jobs.

```javascript
// In backend/jobs.config

{
    "jobs": [
        {
            "functionLocation": "/utils.js", 
            "functionName": "sendStatusReport",
            "description": "Send a morning status report",
            "executionConfig": {
                "cronExpression": "0 8 * * MON"
            }
        },  
        {
            "functionLocation": "/utils.js",
            "functionName": "cleanDb",
            "description": "Delete stale items from the DB",
            "executionConfig": {
                "time": "01:00",
                "dateOfMonth": 1
            }
        }
    ]
}
```

Here you can see two scheduled jobs. The first job is scheduled using a cron expression and it sends a status report every Monday morning at 8:00 in the morning UTC time.

```javascript
"executionConfig": {
    "cronExpression": "0 8 * * MON"
}
```

The second job is scheduled using the `time` and `dateOfMonth` properties and it deletes stale items from the site's database at one in the morning UTC time on the first day of every month.

```javascript
"executionConfig": {
    "time": "01:00",
    "dateOfMonth": 1
}
```