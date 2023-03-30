import { useContext, useState } from 'react';
import { DesignContext } from '../../context/DesignContext';
import { TeamContext } from '../../context/TeamContext';
import Player from '../Player';
import style from './Field.module.css';

const Field = () => {

    const { playerQuantity, formation, teamName, note, coachName, team, setTeam } = useContext(TeamContext)
    const { primaryColor, secondaryColor, sleeveColor, collarColor, primaryColorGK, secondaryColorGK, design, fieldPerspective } = useContext(DesignContext)

    const [modalPlayer, setModalPlayer] = useState(false)
    const [playerSelected, setPlayerSelected] = useState({})

    const handlePlayerName = e => {
        setPlayerSelected({
            ...playerSelected,
            name: e.target.value
        })
    }

    const handlePlayerNote = e => {
        setPlayerSelected({
            ...playerSelected,
            note: e.target.value
        })
    }

    const handlePlayer = playerId => {
        setTeam(team.map(player => {
            if (playerId.id === player.id) {
                return { ...player, name: playerSelected.name, note: playerSelected.note }
            } else {
                return player;
            }
        }))
        setModalPlayer(false)
    }

    const handleCancelPlayer = () => {
        setModalPlayer(false)
    }

    const saveTeam = () => {
        console.log([{
            name: teamName,
            note: note,
            coach: coachName,
            players_quantity: playerQuantity,
            formation: formation.id,
            kit: {
                primary_color: primaryColor,
                secondary_color: secondaryColor,
                design: design,
                sleeve_color: sleeveColor,
                collar_color: collarColor,
                primary_color_gk: primaryColorGK,
                secondary_color_gk: secondaryColorGK
            },
            players: team
        }])
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>{teamName}</h2>
                <p>{note}</p>
            </div>
            <div className='grid' id='grid'>
                {/* <p className='futxi'>FutXI.com</p> */}
                {fieldPerspective === '3d' ? (
                    <>
                        <div className='field-container'>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 400 420">
                                <polygon points="606.87,420 -202.74,420 24.78,2.57 374.06,2.57 " fill='#1aaf7d' />
                            </svg>
                        </div>
                        <img src='/campo3d_lineas.png' alt='Field' className='field_lines3d' />
                    </>
                ) : (
                    <>
                        <div className='field-container'>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 400 420">
                                <rect x="0" width="400" height="420" fill='#1aaf7d' />
                            </svg>
                        </div>
                        <img src='/campo2d_lineas.png' alt='Field' className='field_lines2d' />
                    </>
                )}
                <Player
                    key={0}
                    setModalPlayer={setModalPlayer}
                    setPlayerSelected={setPlayerSelected}
                    player={team[0]}
                    primaryColor={primaryColorGK}
                    secondaryColor={primaryColorGK}
                    sleeveColor={primaryColorGK}
                    collarColor={secondaryColorGK}
                    design={design}
                    position={
                        {
                            player: '1',
                            positionX: 175,
                            positionY: 330
                        }
                    }
                />
                {team.slice(1, playerQuantity).map((player, i) => {
                    return (
                        <Player
                            key={i}
                            setModalPlayer={setModalPlayer}
                            setPlayerSelected={setPlayerSelected}
                            player={player}
                            primaryColor={primaryColor}
                            secondaryColor={secondaryColor}
                            sleeveColor={sleeveColor}
                            collarColor={collarColor}
                            design={design}
                            position={formation.positions[i]}

                        />
                    )
                })}
                {modalPlayer && (
                    <div className='modal-player'>
                        <form>
                            <label htmlFor='player-name'>Nombre</label>
                            <input onChange={handlePlayerName} type='text' id='player-name' name='player-name' value={playerSelected.name} />
                            <label htmlFor='player-note'>Nota</label>
                            <input onChange={handlePlayerNote} type='text' id='player-note' name='player-note' value={playerSelected.note} />
                            <label htmlFor='player-number'>Numero</label>
                            <input type='number' id='player-number' name='player-number' />
                        </form>
                        <div className='buttons'>
                            <button onClick={() => handlePlayer(playerSelected)}>Guardar</button>
                            <button onClick={handleCancelPlayer}>Cancelar</button>
                        </div>
                    </div>
                )}
            </div>
            <div className={style.footer}>
                <p>{coachName.length > 0 && `DT: ${coachName}`}</p>
                <p className='futxi'>FutXI.com</p>
            </div>
            <button onClick={saveTeam}>Guardar equipo</button>
        </div>
    );
};

export default Field;