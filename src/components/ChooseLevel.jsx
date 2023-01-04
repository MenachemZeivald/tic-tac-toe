import React from 'react';

export default function ChooseLevel({setLevel}) {
    let style = { width: '70%', margin: '0 auto', display: 'flex', justifyContent: 'space-around', }
    return (
        <div style={style}>
            <LevelOption level={'Easy'} setLevel={setLevel} />
            <LevelOption level={'Medium'} setLevel={setLevel} />
            <LevelOption level={'Hard'} setLevel={setLevel} />
        </div>
    )
}

function LevelOption({level, setLevel}) {
    return (
        <a style={{ cursor: 'pointer'}} onClick={(e) => { setLevel(e.target.text)}}>{level}</a>
    )
}