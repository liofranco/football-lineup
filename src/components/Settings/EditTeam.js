import { useContext } from 'react';
import { TeamContext } from '../../context/TeamContext';
import { formations11, formations5, formations7 } from '../../Formations';
import style from './Settings.module.css'

const EditTeam = () => {

    const {
        setPlayerQuantity, playerQuantity, setFormation,
        setFormations, formations, formation, setTeamName, setNote, setCoachName,
        teamName, note, coachName} = useContext(TeamContext)

    const handleTeamName = e => {
        e.preventDefault()
        setTeamName(e.target.value)
    }

    const handleNote = e => {
        e.preventDefault()
        setNote(e.target.value)
    }

    const handleCoachName = e => {
        e.preventDefault()
        setCoachName(e.target.value)
    }

    const handleFormation = e => {
        setFormation(formations.find(f => f.id === e.target.value))
      }

    return (
        <div className={style.edit_team_container}>
            <form className={style.form} onSubmit={e =>  e.preventDefault()}>
                <label htmlFor='team-name'>Nombre del equipo</label>
                <input type='text' name='team-name' id='team-name' value={teamName} onChange={handleTeamName} />
            </form>
            <form className={style.form} onSubmit={e =>  e.preventDefault()}>
                <label htmlFor='note'>Nota</label>
                <input type='text' name='note' id='note' value={note} onChange={handleNote} />
            </form>
            <form className={style.form} onSubmit={e =>  e.preventDefault()}>
                <label htmlFor='coach-name'>Director Tecnico</label>
                <input type='text' name='coach-name' id='coach-name' value={coachName} onChange={handleCoachName} />
            </form>
            <div className={style.players_quantity_container}>
                <p>Jugadores</p>
                <div className='select-options-container'>
                    <div className={playerQuantity === 5 ? 'option-selected' : 'option'} onClick={() => {
                        setPlayerQuantity(5)
                        setFormations(formations5)
                        setFormation(formations5.find(f => f.id === '202'))
                    }
                    }>5</div>
                    <div className={playerQuantity === 7 ? 'option-selected' : 'option'} onClick={() => {
                        setPlayerQuantity(7)
                        setFormations(formations7)
                        setFormation(formations7.find(f => f.id === '321'))
                    }
                    }>7</div>
                    <div className={playerQuantity === 11 ? 'option-selected' : 'option'} onClick={() => {
                        setPlayerQuantity(11)
                        setFormations(formations11)
                        setFormation(formations11.find(f => f.id === '442'))
                    }}>11</div>
                </div>
            </div>
            <div className='lineup-select-container'>
                <p>Formacion</p>
                <select value={formation.id} onChange={handleFormation}>
                    {formations.map(formation =>
                        <option value={formation.id} key={formation.id}>{formation.name}</option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default EditTeam;