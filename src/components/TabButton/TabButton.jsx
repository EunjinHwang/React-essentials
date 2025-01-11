import './TabButton.css'
function TabButton({label, onSelect, isSelected}){
    return <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{label}</button>
}

export default TabButton;