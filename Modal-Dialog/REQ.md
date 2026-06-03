## Dialog Component Requirement 

- Should Open On Button Click
- Should Close By ESC
- User Should be able to pass custom JSX
- Control the visibility of close button inside  dialog
- It should show and hide with animation
- It should be fully Accessible

## Accessibility: How to 

1. It should cover all the screen, nothing should be intractable behind dialog, No Scroll. No Focus.

2. Focus Capturing: Via Tab or Sift + Tab focus should not leave the dialog. Until the dialog is closed.

3. When we Open Dialog, first focusable element should get focused.

4. When we close the dialog, the focus set back to the triggered element, and if triggered element is not there, focus should be added on the relevant element.

5. aria-labelled by should there

6. if there is description in the dialog, add id to it, and use aria-


