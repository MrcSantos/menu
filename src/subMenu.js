function SubMenu(props) {
    const config = props.config
    const subConfig = config?.configurazione

    if (!subConfig)
        return null

    return (
        <>
            <h1>{config.titolo} - {config.descrizione}</h1>
            <ul>
                {subConfig.map((element) => { return <li>{element.titolo} - {element.descrizione}</li> })}
            </ul>
        </>
    );
}

export default SubMenu;