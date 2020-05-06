# Installation
Run this API locally

```
$ git clone https://github.com/ikejs/random-palette-api
$ npm install
$ yarn start
```

# Generate Colors
> Online API: `https://random-palette-api.com`

> Localhost: `http://localhost:5000`

### /random
Will return a random color palette object with 5 HEX color codes that are of different shades of the main color, and complementary colors.

```
{
  1: "#A9AA2F",
  2: "#C77D15",
  3: "#7E2F1D",
  4: "#8A2918",
  5: "#36181B"
}
```

### /palette/`{HEX code}`
Will return a color palette with the specified HEX code and 4 other shades of it.

Example: `https://random-palette-api.com/palette/7E2F1D`