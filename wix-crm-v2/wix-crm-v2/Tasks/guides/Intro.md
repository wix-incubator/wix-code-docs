---
title: Introduction
---

# Introduction

&nbsp;

<!-- <div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>
&nbsp; -->


With [Tasks](wix-crm-v2/tasks), site admins can efficiently create and manage tasks on a site. This enables site admins to organize and prioritize their daily activities, enhancing their customer relationship management. Tasks include activities such as follow up calls or emails, scheduling meetings with clients, tracking steps for customer onboarding, and more. 

The Tasks API allows you to:

- [Create](wix-crm-v2/tasks/createtask) and [update](wix-crm-v2/tasks/updatetask) tasks with the option to set a due date or to link the task to a contact.
- [Count](wix-crm-v2/tasks/counttasks) the total amount of tasks, or count the amount of tasks based on provided filters. For example, you can count the number of tasks that are linked to a specific contact. 
- [Retrieve](wix-crm-v2/tasks/querytasks) tasks. 
- [Prioritize](wix-crm-v2/tasks/movetaskafter) your tasks by adjusting the display order.
- [Delete](wix-crm-v2/tasks/deletetask) tasks you no longer need. 

## Before you begin
It is important to note the following before you start to code:
- The `dueDate` field only accepts dates formatted as a JS Date object. This field doesn't work with functional testing as JSON doesn't accept Date objects. 


To use the Tasks API, import `tasks` from `wix-crm.v2`:

```js
import { tasks } from 'wix-crm.v2';
```


## Permissions information

Functions in the Tasks API are restricted and only run if you elevate permissions using the `wix-auth` [`elevate()`](https://www.wix.com/velo/reference/wix-auth/elevate) function.

<blockquote class='warning'>
<p><strong>Warning:</strong> Elevating a function allows it to be called by any site visitor. Exercise caution to prevent security vulnerabilities.</p>
</blockquote>


## Terminology

- **Task**: A specific activity, action, or assignment that needs to be completed by a site admin. 
- **Reminder notification**: A notification that is sent if the task has a due date. The reminder is sent the day before the due date and on the due date. 