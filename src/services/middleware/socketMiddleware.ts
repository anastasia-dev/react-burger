import { AnyAction, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookiesApi";

export interface IWebSocketActions {
    connect : string,
    connected : string,
    closed : string,
    error : string,
    messageReceived : string,
}

export const socketMiddleware = (wsUrl : string, wsActions : IWebSocketActions, useToken : boolean) => {
    return (store : MiddlewareAPI) => {
      let socket : WebSocket | null = null;
  
      return (next : (item: AnyAction) => void) => (action : AnyAction) => {
        const { dispatch } = store;
        const { type } = action;
        const { connect, connected, closed, error, messageReceived } = wsActions;

        if (type === connect) {
            const url = wsUrl + (useToken ? `?token=${getCookie('token')}` : "");
            socket = new WebSocket(url);
        }
        if (socket) {
          socket.onopen = (event : any) => {
            dispatch({ type: connected, payload: event });
          };
          socket.onerror = (event : any) => {
            dispatch({ type: error, payload: event });
          };
          socket.onmessage = (event : any) => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            const { success, ...restParsedData } = parsedData;
            dispatch({ type: messageReceived, payload: restParsedData });
          };
          socket.onclose = (event : any) => {
            dispatch({ type: closed, payload: event });
          };
        }
        next(action);
      };
    };
  };