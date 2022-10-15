import {SET_ACTIVE_TAB, ISetActiveTabAction} from "../actions/activeTab";

type ActiveTabState = {
    activeTab : string
}

const activeTabInitState : ActiveTabState = {
    activeTab: 'one'
}

export function  activeTabReducer (state : ActiveTabState = activeTabInitState, action : ISetActiveTabAction) : ActiveTabState {
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
