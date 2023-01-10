# showToast

Displays a toast notification. 

Use the `config` parameter to:
* Control the toast's appearance.
* Set callback functions to run when the user sees or clicks on the toast.
* Create a clickable call-to-action that displays in the toast.

>Note: Requests to display toasts might be queued and the toast may not be displayed immediately.

## Syntax:
```js
showToast(config): Promise<Object>
```

## Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [ToastConfig](#toastconfig) | Toast configuration options. |

### ToastConfig

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [ToastAction](#toastaction) | An object representing a call-to-action that is displayed on the toast. |
| `message` | string | Text that appears in the toast. |
| `onCloseClick` | Function | - |
| `onToastSeen` | Function | - |
| `priority` | ToastPriority | The priority of the toast. If several toasts are triggered at the same time, the toast with the highest priority is displayed. </br>Options: `low`, `normal`, `high`. |
| `timeout` | ToastTimeout | Determines if the toast removes itself or not, and whether it appears on top of the content or pushes it down. |
| `type` | ToastType | The toast color and message type. </br>Options: </br>`standard`: A blue notification toast. </br>`success`: A green success toast. </br>`warning`: A yellow warning toast. </br>`error`: A red error toast. |

### ToastAction

| Name | Type | Description |
| :------ | :------ | :------ |
| `onClick` | Function | - |
| `removeToastOnClick` | boolean | Whether to remove the toast after the call-to-action is clicked. |
| `text` | string | Text that appears in the call-to-action interface. |
| `uiType` | ToastActionUiType | The type of call-to-action. Options: `button`, `link` |

## Returns
```
Promise<Object>
```

## Examples

**Display a toast when a product is updated**

```js
import { showToast } from '@wix/dashboard-sdk';

showToast({ message: 'Product updated successfully!' });
```

**Display an error toast with a 'Learn more' link**

```js
import { showToast } from '@wix/dashboard-sdk';

const toastConfig = {
  message: 'Product update failed.',
  timeout: 'none',
  type: 'error',
  priority: 'low',
  action: {
    uiType: 'link',
    text: 'Learn more',
    removeToastOnClick: true,
    onClick: () => {
      console.log('Learn more clicked!')'
    }
  }
}

showToast(toastConfig);
```