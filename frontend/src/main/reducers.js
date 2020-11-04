import { combineReducers } from 'redux'
import tabReducer from '../common/tabs/tabReducer'
import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tab: tabReducer,
    billingCycle: BillingCycleReducer
}) 

export default rootReducer 