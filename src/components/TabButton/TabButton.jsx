import './TabButton.css'
function TabButton({label, isSelected, ...props}){
    return <button className={isSelected ? 'active' : undefined} {...props}>{label}</button>
}

export default TabButton;