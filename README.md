# Spaceship Finder

This is a [Next.js](https://nextjs.org/) project using React + TypeScript which implements a filtering UI for spaceships.

Based on the filter parameters, a query string is generated to retrieve filtered spaceships from a hypothetical API endpoint.

## Assumptions/Comments

- The final query string has been designed to be compatible to be parsed by a library such as [`qs`](https://github.com/ljharb/qs) on the server side. This allows for a straightforward conversion from string to JSON which can be used to perform the filtering of data in the backend. For example, this approach covers challenges such as:
  - using delimited lists of colours
  - key selectors for filter operations (`eq` (==), `lt` (<), `gt` (>)). Although not implemented, this approach can also easily allow for ranges.
- Due to time constraints, the solution has not been tested to an extent expected in a real environment. However, unit tests have been implemented for generating the query string out of the filters. Also used storybook for visual and interactivity testing of components in isolation.
- I have assumed that selecting none of the colours defaults to showing spaceships of all colours. As such, manually selecting all colours results in the same list of spaceships.
- Colours are identified by their name rather than a unique value such as hex code. The names of colours are unique themselves and since pre-determined colours are picked, the assumption is that a colour would include all spaceships in any shade of that particular colour.

## Setup

First, install the project's dependencies:

```bash
npm i
```

Then, build the application:

```bash
npm run build
```

To run the application locally:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) on your browser to view the application.

### Tests

To run tests written for query string generation:

```bash
npm run test
```

### Storybook

Storybook can be used to view components in isolation. Start a Storybook server by running:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) on your browser to view the application.
