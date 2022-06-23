# Weightlifting Equivalence Calculator

An application for calculating weight equivalence to assist in planning out weightlifting programs.
Also known as WEC for short.

## Technologies Used:

- HTML
- Javascript
- React
- CSS

Git and Github were used for version control.
The environment was set up with create-react-app.
This project has been deployed on Netlify.
https://equivalence-tabler.netlify.app/

## Instructions:

On load, the website will display the Welcome screen.
Hotkey information is displayed here, you may also scroll down to select a different colour scheme.
Click anywhere or press any button to get started! Press **'Shift + T'** at any time to go back to the Welcome screen.

1. Click the **'Minimum'** input at the top left of the screen and enter the desired minimum weight range. Alternatively, press **_Tab_** or _**Shift + M**_ and this input field will be focused.
2. Click or _Tab_ through the **'Maximum'**, **'Repetitions'** and **'Step Value'** fields, inputting your desired values. A weight equivalence table has been generated for you!
3. Click **'O'** in the upper left corner to open the options settings, or else press **Shift + O**. You may choose to alter the table's display options according to your needs from here.
4. Click **'H'** in the upper left corner to open the highlighter settings, or else press **Shift + H**. To operate the highlighter, enter your desired middle value in the **'Highlight'** field, then enter the desired range around that midpoint for highlighting into the **'Highlight Range'** field.
5. Click **'F'** in the upper left corner to open the filter settings, or else press **Shift + F**. To further customise the table's output, you may wish to remove rows or columns as you see fit. Enter the row weight value to be filtered into the **'Weight to Filter'** input and then click **'Toggle Selected Row by Weight'** to remove/restore this row from the table output. The same may be done to remove columns by their repetition value with the **'Reps to Filter'** field. If you wish to undo all filters applied to a table, click the **'Restore Full Table'** button.

## Components and Features:

The _**WEC**_ features six major components:
- The Welcome screen
- The Table Generator
- The Basic Input settings
- The Options settings
- The Highlighter settings
- The Filter settings

The _**WEC**_ scales its layout in a percentage wise fashion, making it viable for all screen sizes. 
For the best experience on mobile, a landscape orientation is recommended.

The favicon image for _**WEC**_ was obtained from svgrepo.com under a CC0 licence.

### The Welcome Screen:
The Welcome screen features:
- Hotkey information for the application
- Colour scheme options

To view the welcome screen at any time, press **Shift + T**

Colour scheme selections are stored in the browser's local storage, allowing users to reload the page with their favourite theme selected. There are 12 to choose from!

### The Table Generator:
The table generator is a component which:
- Receives state from the various input components as props.
- Uses nested mapping to generate a table based on these parameters.
- Uses custom data-* attributes to enable interesting features such as filtering and highlighting.

The calculation logic is performed in this component. This logic is based off the popular One Repetition Maximum Chart, which describes an approximate linear relationship between repetitions lifted of a certain weight, and the lifter's one rep maximum. 

### The Basic Input Settings:
The basic input settings feature:
- A minimum input field
- A maximum input field
- A repetitions input field
- A step value input field
- A current step value display

The step value field determines the interval between weight values that will be displayed by the table.
Step values must return integer values when divided into the weight range specified, ie. the difference between max and min fields.
If an invalid step value is entered, the table will not update its display and the input value will not represent the actual step value. For this reason, a current step value display was included to let users know the value of the state being passed to the table generator.

### The Options Settings:
The options settings include:
- A unit conversion feature, converting between both lbs and kg.
- A weight calculation inversion feature, which specifies whether the weight in the first column refers to weight on the bar, or to the one repetition equivalent of multiple repetitions of a lower weight.
- A weight order reversal feature, which tables the weights in ascending order rather than the default descending order.
- A table toggle, which can be used to turn off the table display if desired.

The logic for each of the above features is neatly packed each into its own subcomponent file, making for a more organised workspace.

Since the WEC is a unitless calculator, users may use it whether they think in terms of kilograms or in terms of pounds. However, some users may wish to check how their unit of choice compares to the other. Therefore two unit conversion buttons have been included. The use of one button disables the use of the other, ensuring that multiple clicks do not falsify the table output.
A three value piece of state is used to track what mode the application is in, and a useEffect hook is used to ensure that the state resets appropriately when other table altering parameters are changed.

### The Highlighter Settings:
The highlighter settings include:
- A highlight field, which sets the midpoint the highlight will work from.
- A highlight range field, which sets the range above and below the midpoint that will be highlighted in the table output.

The highlighter logic uses a querySelectorAll method with a template literal to access the desired table cells, then uses the setProperty method to refill their backgrounds.

Upon table altering parameter changes, a useEffect hook ensures the highlighter clears itself and then reapplies itself accurately.

### The Filter Settings:
The filter settings include:
- A Weight to Filter field and a Toggle Selected Row by Weight button, used to filter out undesired rows.
- A Reps to Filter field and a Toggle Selected Column button, used to filter out undesired columns.
- A Restore Full Table button, used to quickly remove all applied filters.

The Weight to Filter field requires the One Rep weight of the desired row to be filtered.
The One Rep column cannot be filtered out.

The filter is the last table altering parameter to be set. If any other table parameters are changed, the filters are reset to avoid falisifying the table output.