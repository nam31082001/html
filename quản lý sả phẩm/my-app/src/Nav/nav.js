import '../Nav/nav.css';
import { useState, useEffect } from 'react';
import React from 'react';
import ListNav from './NavList/List';
import ListTB from './NavList-thông báo/listTB';
import ListSP from './Navlist SP/listSp';

const Nav = () => {
    const [checkCog, setCheckCog] = useState(false);
    const [checkFlagAlt, setCheckFlagAlt] = useState(false)
    const [checkBell, setCheckBell] = useState(false)
    const clickCog = () => {
        setCheckCog(!checkCog)

    }
    const click_Flag_Alt = () => {
        setCheckFlagAlt(!checkFlagAlt)

    }
    const click_Bell = () => {
        setCheckBell(!checkBell)
    }
    useEffect(() => {
        if (checkCog === true) {
            setCheckFlagAlt(false)
            setCheckBell(false)
        }

    }, [checkCog])
    useEffect(() => {
        if (checkFlagAlt === true) {
            setCheckCog(false)
            setCheckBell(false)
        }
    }, [checkFlagAlt])
    useEffect(() => {
        if (checkBell === true) {
            setCheckCog(false)
            setCheckFlagAlt(false)
        }
    }, [checkBell])


    return (
        <div className="Nav">
            <div className="Nav-h1">
                <h1>Manage</h1>
            </div>
            <div className="Nav-cog">
                <i className="fas fa-cog fa-2x" onClick={() => (clickCog())}></i>
                {!checkCog ? <></> : <>
                    <ListNav />
                </>}

            </div>
            <div className="Nav-Flag-Bell-Sign">
                <i className="fas fa-flag-alt " onClick={() => { click_Flag_Alt() }}>
                    {!checkFlagAlt ? <><sup style={{ color: 'red' }}>20</sup></> :
                        <><ListTB /></>}</i>
                <i className="fas fa-bell " onClick={() => { click_Bell() }}>
                    {!checkBell ?
                        <><sup style={{ color: 'red' }}>20</sup></>
                        :
                        <><ListSP /></>}

                </i>

                <i className="fas fa-sign-out "></i>
            </div>

        </div>
    )
}
export default Nav