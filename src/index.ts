import {RouteDestinationError, RouteMatch, RouterConfiguration, RouterDestination, RouterResponse} from '@scvo/router';

export class RedirectRouterDestination extends RouterDestination {
  name = 'redirect';

  constructor() {
    super();
  }

  async execute(routeMatch: RouteMatch): Promise<RouterResponse> {
    try {
      const config: RedirectConfig = routeMatch.route.destination.config;
      const response: RouterResponse = {
        statusCode: config.statusCode,
        body: '',
        contentType: 'text/plain',
        headers: {Location: config.location},
        cookies: {}
      };
      return response;
    } catch (err) {
      console.error(
          '#### REDIRECTROUTERDESTINATION.execute() -> Failed to redirect:',
          err);
      throw err;
    }
  }
}

export interface RedirectConfig {
  statusCode: 301|303|307;
  location: string;
}
