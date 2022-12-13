
const initialDisabilityState = {
    disabilitylist: ["test1", "test2", "test3", "test4"]
}
export const disabilityReducer = (state=initialDisabilityState, action) => {
    switch (action.type) {
        case "addDisability": 
                return {
                    disabilityList: [...state.disabilitylist, action.payload ]
                }
        case "removeDisability": 
                return {
                    disabilityList: state.disabilitylist.filter(d=>d!== action.payload)
                }
        default:
            return state
    }
}