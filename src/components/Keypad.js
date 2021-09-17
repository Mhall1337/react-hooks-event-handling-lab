// Code Keypad Component Here
function KeyPad(){
    return <input onChange={()=>{console.log('Entering password...')}} type ="password"></input>
}
export default KeyPad