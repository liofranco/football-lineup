import style from './Settings.module.css'
import {FiEdit} from 'react-icons/fi'
import {TbShirtSport} from 'react-icons/tb'
import { useState } from 'react';
import EditTeam from './EditTeam';
import EditDesign from './EditDesign';
import EditField from './EditField';

const Settings = () => {

    const [navbar, setNavbar] = useState(1)

    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <ul>
                    <li onClick={()=>setNavbar(1)} className={navbar === 1 ? style.active : undefined}>
                        <FiEdit/>
                        <p>Equipo</p>
                    </li>
                    <li onClick={()=>setNavbar(2)} className={navbar === 2 ? style.active : undefined}>
                        <TbShirtSport/>
                        <p>Diseño</p>
                    </li>
                    <li onClick={()=>setNavbar(3)} className={navbar === 3 ? style.active : undefined}>
                        <TbShirtSport/>
                        <p>Campo</p>
                    </li>
                </ul>
            </nav>
            {navbar === 1 && <EditTeam />}
            {navbar === 2 && <EditDesign />}
            {navbar === 3 && <EditField />}
        </div>
    );
};

export default Settings;