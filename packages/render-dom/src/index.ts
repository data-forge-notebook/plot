/**
 * Plugin for Plot to render a chart into the DOM.
 * For use in the browser.
 *
 * @packageDocumentation
 */

import { IPlotAPI, AbstractPlotAPI } from "plot/build/plot-api";
import { mountChart, IChart } from "@plotex/lib-apex";

//
// Augment IPlotAPI and PlotAPI with renderDOM function.
//
declare module "plot/build/plot-api" {

    interface IPlotAPI {

        /**
         * Render the plot to a DOM node.
         */
        renderDOM(parentEl: HTMLElement): Promise<IChart>;
    }

    interface AbstractPlotAPI {

        /**
         * Render the plot to a DOM node.
         */
        renderDOM(parentEl: HTMLElement): Promise<IChart>;
    }
}

/**
 * Render the plot to a DOM node.
 */
export async function renderDOM(this: IPlotAPI, parentEl: HTMLElement): Promise<IChart> {

    const chartDef = this.serialize();
    const chart = await mountChart(chartDef, parentEl);
    return chart;
}

AbstractPlotAPI.prototype.renderDOM = renderDOM;