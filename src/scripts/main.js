import { ClownService } from "./ClownService.js"
import { fetchParties, fetchAssigments } from "./dataAccess.js"
import { fetchClowns } from "./dataAccess.js"


export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchParties()
        .then(() => fetchClowns())
        .then(() => fetchAssigments())
        .then(
            () => {
                mainContainer.innerHTML = ClownService()
            }
        )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)