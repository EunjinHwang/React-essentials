import './TabButton.css'
function TabButton({label, onSelect}){
    return <button onClick={onSelect}>{label}</button>
}

export default TabButton;