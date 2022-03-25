function History ({results}){
    const liArray= results.map(
        (item,idx) => <li key={idx}>{item.primerOperador} {item.operador} {item.segundoOperador} = {item.resultado}</li>
    )
    return (
        <> 
           <ul>{liArray}</ul> 
        </>
    )
}
export default History;