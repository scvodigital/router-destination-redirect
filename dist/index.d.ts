import { IRouterDestination, IRouteMatch, IRouterResponse } from '@scvo/router';
export declare class RedirectRouterDestination implements IRouterDestination {
    name: string;
    constructor();
    execute(routeMatch: IRouteMatch): Promise<IRouterResponse>;
}
export interface IRedirectConfig {
    statusCode: 301 | 303 | 307;
    location: string;
}
