import { mainContainer } from "./main.js"

const applicationState = {
    parties: []
}

const API = "http://localhost:8088"

export const fetchParties = () => {
    return fetch(`${API}/parties`)
        .then(response => response.json())
        .then(
            (partyRequests) => {
                applicationState.parties = partyRequests
            }
        )
}

export const getParties = () => {
    return applicationState.parties.map(parties => ({...parties}))
}


export const sendParty = (userPartyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyRequest)
    }

    return fetch(`${API}/parties`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const deleteParty = (id) => {
    return fetch(`${API}/parties/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}


export const fetchAssigments = () => {
    return fetch(`${API}/assignments`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.assignments = data
            }
        )
}


export const saveAssignment = (userPartyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPartyRequest)
    }


    return fetch(`${API}/assignments`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const getClowns =() =>{
    return applicationState.clowns.map(clown =>({...clown}))
}

export const getAssignments = () => {
    return applicationState.assignments.map(assignment => ({ ...assignment }))
}