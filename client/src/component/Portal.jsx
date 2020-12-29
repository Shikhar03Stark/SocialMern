import {React} from 'react';
import BigMenu from './BigMenu';
import './Portal.css';
import SmallMenu from './SmallMenu';
import SmallBody from './SmallBody';
import BigBody from './BigBody';

const Portal = (props) => {
    return (<div className="Portal-outline">
        <div className="Portal-header">
            <SmallMenu />
            <BigMenu />
        </div>
        <div className="Portal-body">
            <SmallBody />
            <BigBody />
        </div>
    </div>);
};

export default Portal;