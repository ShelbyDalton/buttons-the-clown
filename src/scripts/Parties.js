import { getClowns, getParties } from "./dataAccess.js"
import { saveAssignment, getAssignments} from "./dataAccess.js"
import { deleteParty } from "./dataAccess.js"


export const convertPartiesToListElement = (party) => {
    const clowns = getClowns()
    const assignments = getAssignments()

    if (assignments.find(assignment => party.id === parseInt(assignment.partyId))) {
        let assignmentComplete = `
            <li class="party assigned">
                <span class="description">Party for ${party.childName} on date of ${party.partyDate}</span>
                <span class="assignment"><b>has been assigned to a performer</b></span>
                <button class="party_delete" id="party--${party.id}">Delete</button>
            </li>
            `
        return assignmentComplete
    } else {
        let notAssigned = `
        <li class="party unassigned">
        <span class="description">Party for ${party.childName} on date of ${party.partyDate}</span>
        <div> 
        <select class="clown assignment" id="clowns">
            <option value="">Choose Clown</option>
            ${clowns.map(
            clown => {
                return `<option value="${party.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
            }
        </select>
        <button class="party_delete" id="party--${party.id}">Delete</button> 
        </div>
    </li>
        `
        return notAssigned
    }
}



export const Parties = () => {
    const parties = getParties()
    const sortedParties = parties.slice().sort((a, b) => new Date(a.partyDate) - new Date(b.partyDate))
    let html = `
        <ul id="partyList">
            ${sortedParties.map((party) => convertPartiesToListElement(party)).join("")}
		</ul>
    `
    return html;
}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("party--")) {
        const [, partyId] = click.target.id.split("--")
        deleteParty(parseInt(partyId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [partyId, clownId] = event.target.value.split("--")
   
            const assignment = {
                partyId,
                clownId,
                date_created: new Date().toLocaleDateString("en-US"),
            }

            saveAssignment(assignment)
        }
    }
)

