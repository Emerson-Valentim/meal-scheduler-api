import { APIGatewayEvent } from 'aws-lambda';

export default class BodyMiddleware {
  public static requestParser(event: APIGatewayEvent, context) {
    try {
      if (typeof event.body === 'string') {
        event.body = JSON.parse(event.body) ?? {}
      }
    } catch (error) {
      throw error
    }
  }

  public static responseParser(event: APIGatewayEvent, context) {
    try {
      if (typeof event.body === 'object') {
        event.body = JSON.stringify(event.body) ?? {}
      }

      event.headers = event.body ? {
        ...event.headers,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json'
      } : event.headers
    } catch (error) {
      throw error
    }
  }

}