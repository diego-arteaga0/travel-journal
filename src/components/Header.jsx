import globe from "../images/globe.png"

export default function Header() {
    
    return (
    <header> 
        <img src={globe} width="40px" alt="globe icon"/>
        <h1>My Travel Journal</h1>
    </header>
    )
    
}