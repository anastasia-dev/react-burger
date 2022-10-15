export const SET_ACTIVE_TAB : 'SET_ACTIVE_TAB' = 'SET_ACTIVE_TAB';

export interface ISetActiveTabAction {
    readonly type : typeof SET_ACTIVE_TAB
    readonly activeTab : string
}