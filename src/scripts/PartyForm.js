import { sendParty } from "./dataAccess.js"

export const PartyForm = () => {
    let html = `
    
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendance">Attendance Number</label>
            <input type="number" name="attendance" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address of Party</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date of Party</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Party Duration in Hours</label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Performer Request</button>
        
        `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='attendance']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value
        const userPartyLength = document.querySelector("input[name='partyLength']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attendance: userAttendance,
            partyAddress: userPartyAddress,
            partyDate: userPartyDate,
            partyLength: userPartyLength
        }

        sendParty(dataToSendToAPI)
    }
})