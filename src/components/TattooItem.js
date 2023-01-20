import './TattooItem.css'

function TattooItem(props) {
    const { tattoo, onTattooClick } = props
    return (
        <div>
            <img src={tattoo.thumbnailUrl} onClick = {() => onTattooClick(tattoo)} alt=""/>
            <h4>{tattoo.title}</h4>
        </div>
    )
}

export default TattooItem;