import { AllPositionList, AllPositionListItem, TextPosition } from 'components/allPositions/AllPosition.style'


export default function AllPosition({ data, onUtishkaSetQuantity }) {



    return (
        <div>
            <AllPositionList>
                {data.map(position => (
                    <AllPositionListItem
                        key={position.id}
                        uhtishka={position.uhtishka}
                    >
                        <TextPosition
                            className="name">{position.name}</TextPosition>
                        <TextPosition
                            className="quantity"
                        >{position.quantity}</TextPosition>
                        <TextPosition
                            id={position.id}
                            onClick={onUtishkaSetQuantity}>Ухтышке: {position.uhtQuant}</TextPosition>
                    </AllPositionListItem>
                ))}
            </AllPositionList>
        </div>
    )
}
