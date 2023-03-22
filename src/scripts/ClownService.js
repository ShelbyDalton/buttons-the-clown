import { Parties } from "./Parties.js"
import { PartyForm } from "./PartyForm.js"

export const ClownService = () => {
    return `
        <h1 class="header">Buttons and Lillipop's Clown Service</h1>
        <section class="partyForm">
        <h2>Performer Request Form</h2>
            ${PartyForm()}
        </section>

        <section class="partyRequests">
            <h2 class="listHeader">Party Requests</h2>
            ${Parties()}
        </section>
    `
}

