---
title: Introduction
---

# Introduction

&nbsp;

<div style="background-color: #FEF1D1; padding: 18px 24px; border-radius: 6px; border: 1px solid #FDB10C; box-sizing: border-box; display: inline-block">
    <b>Developer Preview</b>
    <br/>
    <span>APIs in <a href="https://www.wix.com/velo/reference/api-overview/developer-preview">Developer Preview</a> are subject to change and are not intended for use in production.<br/><a href="mailto:velo-preview-feedback@wix.com">Send us</a> your suggestions for improving this API. Your feedback is valuable to us.</span>
</div>

&nbsp;

The Workflows API is used to manage your site's [workflows](https://support.wix.com/en/article/about-workflows).


A workflow consists of a number of phases, also known as steps. The final phase in the workflow, the phase that indicates the workflow has been completed, is known as the win phase. Each phase can contain cards that move between the phases, indicating the card's progression through the workflow.
 
> **Note:** Each workflow is limited to 5,000 cards. To avoid hitting this limit, [archive cards](wix-workflows-v2/cards/archivecard) when they're no longer needed.

### Retrieving IDs

 When working with the Workflows API, you will often need to specify the ID of a workflow, phase, or card.

You can retrieve these IDs using the following functions:

- [`listWorkflows()`](wix-workflows-v2/workflows/listWorkflows)
- [`listPhases()`](wix-workflows-v2/phases/listPhases)
- [`listCards()`](wix-workflows-v2/cards/listCards)

Sometimes, you need to use more than one of these functions to retrieve the ID you need. For example, if you are looking to retrieve a specific card's ID using the [`listCards()`](wix-workflows-v2/cards/listCards) function, you need to at least provide a workflow ID. So, you call [`listWorkflows()`](wix-workflows-v2/workflows/listWorkflows) to retrieve the workflow ID and then pass that ID to [`listCards()`](wix-workflows-v2/cards/listCards) to get the card ID.
 
Note that IDs for workflows, phases, and cards are also returned when they are created using the [`createWorkflow()`](wix-workflows-v2/workflows/createWorkflow), [`createPhase()`](wix-workflows-v2/phases/createPhase), and [`createCard()`](wix-workflows-v2/cards/createCard) functions. You can store these returned IDs and use them later.