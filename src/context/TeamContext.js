import React, { createContext, useState } from 'react';
import { defaultTeam } from '../DefaultTeam';
import { formations11 } from '../Formations';

export const TeamContext = createContext()

const TeamProvider = (props) => {

    const [team, setTeam] = useState(defaultTeam)
    const [teamName, setTeamName] = useState('')
    const [note, setNote] = useState('')
    const [coachName, setCoachName] = useState('')
    const [playerQuantity, setPlayerQuantity] = useState(11)
    const [formations, setFormations] = useState(formations11)
    const [formation, setFormation] = useState(formations.find(f => f.id === '442'))
    
    return(
        <TeamContext.Provider
            value={{
                playerQuantity,
                setPlayerQuantity,
                formations,
                setFormations,
                formation,
                setFormation,
                teamName,
                setTeamName,
                note,
                setNote,
                coachName,
                setCoachName,
                team,
                setTeam
            }}
        >
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamProvider