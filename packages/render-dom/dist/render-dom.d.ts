import { IChart } from '@plotex/lib-apex';
import { IPlotAPI } from 'plot/build/plot-api';

/**
 * Render the plot to a DOM node.
 */
export declare function renderDOM(this: IPlotAPI, parentEl: HTMLElement): Promise<IChart>;

export { }
