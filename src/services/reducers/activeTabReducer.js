import {SET_ACTIVE_TAB} from "../actions/activeTab";

const activeTabInitState = {
    activeTab: 'one'
}

export function  activeTabReducer (state = activeTabInitState, action) {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                activeTab: action.activeTab
            }
        }
        default:{
            return state;
        }
    }
}
