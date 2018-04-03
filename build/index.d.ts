import { RouteMatch, RouterDestination, RouterResponse } from '@scvo/router';
export declare class RedirectRouterDestination extends RouterDestination {
    name: string;
    constructor();
    execute(routeMatch: RouteMatch): Promise<RouterResponse>;
}
export interface RedirectConfig {
    statusCode: 301 | 303 | 307;
    location: string;
}
