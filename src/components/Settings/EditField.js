import { useContext } from 'react';
import { DesignContext } from '../../context/DesignContext';
import style from './Settings.module.css'

const EditField = () => {

    const {setFieldPerspective} = useContext(DesignContext)

    return (
        <div className={style.edit_design_container}>
            <h3>Perspectiva</h3>
            <div>
                <p onClick={()=>setFieldPerspective('2d')}>2D</p>
                <p onClick={()=>setFieldPerspective('3d')}>3D</p>
            </div>
            <h3>Colores</h3>
            <div className={style.option_container}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: '#fff'}}></div>
                </div>
                <p>Campo de juego</p>
            </div>
            <div className={style.option_container}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: '#fff'}}></div>
                </div>
                <p>Fondo</p>
            </div>
            <div className={style.option_container}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: '#fff'}}></div>
                </div>
                <p>Texto</p>
            </div>
        </div>
    );
};

export default EditField;