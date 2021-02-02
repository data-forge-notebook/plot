import { plot } from "plot";
import "@plotex/render-dom"
import { mountChart } from "@plotex/lib-apex";

async function main(): Promise<void> {

    const plotDef = await fetch("plot-def.json").then(response => response.json());
    const plt = plot(plotDef.data,, plotDef.plotConfig, plotDef.axisMap); 
    plt.renderDOM(document.getElementById("chart1")!);

    const chartData = await fetch("full-chart-def.json").then(response => response.json());
    console.log("Chart def: ");
    console.log(chartData);
    await mountChart(chartData.chartDef, document.getElementById("chart2")!, chartData.options);
}

main()
    .catch(err => {
        console.error("Error rendering chart.");
        console.error(err && err.stack || err);
    });
