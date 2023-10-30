# Making Sense Dashboard Structure

The platform was built thinking about your feedback and its modularization.
For this, I have chosen to create 5 different components.

1. CardFollowers: A card that shows the followers/subscribers with the account name and their modified number.
2. CardOverview: A card that shows the information corresponding to each parameter
3. Switch: A component dedicated solely to modifying the site mode. The positive thing about this module is that it can be implemented directly not only in this project, but in any other with a minimum of configuration.
4. Modal: A modal that can be passed parameters to complete the data. Also includes the Chart Component.
5. Chart: This component is responsible for displaying the graph and managing its settings. In this case, it is added inside the Modal component.
   For the responsive order, in addition to using @media querys, I used Grid to manage the positions of the Cards and Flexbox to order each of them inside. (I used both for the simple reason of showing their uses. It could have been all Grid or all Flexbox).

Also, I created variables for the colors, since if the application grows in the future and you want to maintain a good design scheme, it will serve to standardize.
Finally, I used Typescript and opted for the CSS-in-JS styled-components library since to modularize components in React, I find it a very powerful tool.
Max-width 1440px.

## Available Scripts

In the project directory, you can run:

### `npm start`
