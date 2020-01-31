This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Edit Config

src/config.js add a google maps API key

### Setup

`yarn install`

### Run Project

`yarn start`

### Testing

Use the follow information to test :-

- Pickup Address: 29 Rue du 4 Septembre
- Drop Off Address: 15 Rue de Bourgogne

### Improvements

- Use a Context Provider to power Toast Notifications and move higher up the component chain
- Better form control including dirty, touched etc
- Batch state updates or combine states to reduce re-renders
- Styles constants file
- Add env support for config
- Toast Notification may vanish early if the component re-renders
- Additional validation (Input, prop-types etc) and error handling
