import { plot } from "plot";
import "@plotex/render-dom"
import { formatChartDef, mountChart } from "@plotex/lib-apex";
const ApexCharts = require("apexcharts");

async function main(): Promise<void> {

    const plotDef = await fetch("plot-def.json").then(response => response.json());
    const plt = plot(plotDef.data, plotDef.plotConfig, plotDef.axisMap); 
    plt.renderDOM(document.getElementById("chart1")!);

    const chartDef = await fetch("full-chart-def.json").then(response => response.json());
    // const chartDef = plt.serialize();
    console.log("Chart def: ");
    console.log(chartDef);
    await mountChart(chartDef, document.getElementById("chart2")!, { showChartDef: true });

    // const apexChartDef = formatChartDef(chartDef)
    const apexChartDef = await fetch("apex-chart-def.json").then(response => response.json());
    console.log("Apex chart def: ");
    console.log(JSON.stringify(apexChartDef, null, 4));
    const chart = new ApexCharts(document.querySelector("#chart3"), apexChartDef);
    chart.render();

}

main()
    .catch(err => {
        console.error("Error rendering chart.");
        console.error(err && err.stack || err);
    });
