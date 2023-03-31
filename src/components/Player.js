import Draggable from 'gsap/Draggable';
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from 'react';
import Designs from './Designs';

gsap.registerPlugin(Draggable);

const Player = ({ player, setModalPlayer, setPlayerSelected, primaryColor, secondaryColor, sleeveColor, collarColor, design, position }) => {

    const playerRef = useRef(null);
    const [positionX, setPositionX] = useState(position.positionX)
    const [positionY, setPositionY] = useState(position.positionY)


    useEffect(() => {
        Draggable.create(playerRef.current, {
            type: "x,y",
            edgeResistance: 1,
            bounds: "#grid",
            liveSnap: true,
            snap: {
                x: endValue => Math.round(endValue / 5) * 5,
                y: endValue => Math.round(endValue / 5) * 5,
            },
            onDragEnd: function () {
                setPositionX(this.x);
                setPositionY(this.y);
                player.positionX = this.x;
                player.positionY = this.y;
            },
            onClick: function () {
                setModalPlayer(true)
                setPlayerSelected(player)
            }
        })
        // eslint-disable-next-line
    }, [player])

    useEffect(() => {
        setPositionX(position.positionX)
        setPositionY(position.positionY)
        player.positionX = position.positionX
        player.positionY = position.positionY
        gsap.to(playerRef.current, { x: position.positionX, y: position.positionY, duration: 0 })
        // eslint-disable-next-line
    }, [position])

    return (
        <div
            ref={playerRef}
            className="player-container"
            style={{
                transform: `translate3d(${positionX}px,${positionY}px,0)`
            }}
        >
            <div className="shirt">
                <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                </svg>
                <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                    <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                    </svg>
                </div>
                <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                    <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                    </svg>
                </div>
                <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                    <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                    </svg>
                </div>
                <div style={{ position: 'absolute', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                    <Designs design={design} color={secondaryColor} />
                </div>
            </div>
            {player.number.length > 0 && (
                <div className="player-number-container">
                    <p>{player.number}</p>
                </div>
            )}
            {/* <img src='/river.png' width={45} height={45} alt='Team shirt'/> */}
            <p className='player-name'>{player.name}</p>
            <p className='player-note'>{player.note}</p>
        </div>
    );
};

export default Player;