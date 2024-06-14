import React from 'react';

function MenuItem(props: { title: string }) {
    return (
        <div className="menu-item-div">
            <h3>{props.title}</h3>
        </div>
    );
}