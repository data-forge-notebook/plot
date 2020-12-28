# plot

The simplest and most forgiving plotting API for JavaScript and TypeScript.

Use plot to quickly and conveniently render charts for your data. It is an abstraction layer over JavaScript visualization libraries. Currently supporting [Apex Charts](https://apexcharts.com/), but intending to support more in the future.

[Click here for the API docs](https://data-forge-notebook.github.io/plot/)

[For various examples see this repo](https://github.com/data-forge-notebook/plot-examples).

Plot can be used from Node.js, from the browser and is specially designed to integrate with [Data-Forge Notebook](https://www.data-forge-notebook.com/).

I'm after contributors to help flesh this library out! Can you help? 

Please give feedback!

Email the author on ashley@codecapers.com.au.

<a target="_blank" href="http://www.codecapers.com.au/#support-my-work">Click here to **support the developer.**</a>

## Aims

- To have a simple way to plot a chart.
- To be an abstraction over multiple code libraries for visualization in JavaScript.
- To have a plotting library that works well in Node.js, the browser and in [Data-Forge Notebook](https://www.data-forge-notebook.com/).
- To be able to define charts purely as data using a simple JSON format.
- To be able to serialize a chart to send it over the wire or save it to disk.
- To be able to separate chart configuration and chart data to make it easy to reuse the charts you create.

## Usage

Some instructions for using plot. These instructions are for JavaScript, but this library also works in TypeScript.

### Import plot

### Browser

    npm install --save plot @plotex/render-dom

```javascript
const { plot } = require("plot");
require("@plotex/render-dom");

const data = [ /* your data */ ];
const parentEl = /* parent DOM to contain the chart */ ;
const chart = plot(data).renderDOM(parentEl);
```

### Node.js

    npm install --save plot @plotex/render-image

```javascript
const { plot } = require("plot");
require("@plotex/render-image");

const data = [ /* your data */ ];
plot(data).renderImage("my-chart.png");
```

### Data-Forge Notebook

plot is integrated into [Data-Forge Notebook](https://www.data-forge-notebook.com/).

You can plot an array of JavaScript data like this:

```javascript
const data = [ /* your data */ ];
display.plot(data);
```

See more Data-Forge Notebook examples in [the exported example visualization notebook](https://github.com/data-forge-notebook/wiki/wiki/visualizing-data).

## Pass in configuration options

```javascript
const data = [ /* your data */ ];
const chartConfig = { chartType: "bar" };
const axisConfig = { x: "Date", y: "Close" };
plot(data, chartConfig, axisConfig)
    .renderDOM(parentEl);
```

## Multiple types of data

### Plot an array of numbers

```javascript
plot([10, 15, 30])
    .renderDOM(parentEl);
```

### Plot an array of JavaScirpt object

```javascript
plot([ { A: 10, B: 52 }, { A: 15, B: 37 }, A: 30, B: 45 }])
    .renderDOM(parentEl);
```

### Plot by column

```javascript
plot({ A: [10, 15, 30], B: [52, 37, 45] })
    .renderDOM(parentEl);
```

## Resources

- [API docs](https://data-forge-notebook.github.io/plot/)
- [For TypeScript Node.js example see this repo](https://github.com/data-forge-notebook/plot-examples).

## Future

There's more work to be done!

Can you contribute, test or give feedback?

Email the developer on ashley@codecapers.com.au.

## Support the developer 

<a target="_blank" href="http://www.codecapers.com.au/#support-my-work">Click here to **support the developer.**</a>
