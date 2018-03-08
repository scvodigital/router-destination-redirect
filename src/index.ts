import { 
    IContext, IRouterDestination, IRouteMatch, 
    IRouterResponse, RouteDestinationError
} from '@scvo/router';

export class RedirectRouterDestination implements IRouterDestination {
    name: string = "redirect";

    constructor() { }

    public async execute(routeMatch: IRouteMatch): Promise<IRouterResponse> {
        try {
            var config: IRedirectConfig = routeMatch.route.destination.config;
            var response: IRouterResponse = {
                statusCode: config.statusCode,
                body: '',
                headers: {
                    Location: config.location
                }
            };
            return response;
        } catch(err) {
            console.error('#### REDIRECTROUTERDESTINATION.execute() -> Failed to redirect:', err);
            throw err;
        }
    }
}

export interface IRedirectConfig {
    statusCode: 301 | 303 | 307;
    location: string;
}
