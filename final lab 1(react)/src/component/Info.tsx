
interface Props{
    name: string,
    email: string,
    id: number,
   
}
 
function Info ({name, email, id}: Props){
 
    return(
        <>
            <div>
                <h1>Name: {name}</h1>
                <h1>Email: {email}</h1>
                <h1>ID: {id}</h1>
                
            </div>
        </>
    )
}
 
export default Info;