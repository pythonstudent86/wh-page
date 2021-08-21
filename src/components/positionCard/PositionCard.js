import { useState, useEffect } from 'react'
import {
    CardList,
    CardListItem,
    CardTextSection,
    CardButton
} from 'components/positionCard/PositionCard.style'
import filterArr from 'utils/filterArr'


export default function PositionCard({ data, locationFilter, onClickHeandlerBack }) {
    const [filteredArr, setFilteredArr] = useState(filterArr(locationFilter, data))
    const [showPosition, setShowPositions] = useState(false)


    useEffect(() => {
        if (filteredArr) {
            setShowPositions(true);
            console.log("object")
        }
    }, [filteredArr])

    return (
        <div>
            <CardList>
                {filteredArr.map(position => (
                    <CardListItem key={position.num}>
                        <CardTextSection className="text">{position.name}</CardTextSection>
                        <CardTextSection className="block quantity">{position.quantity}</CardTextSection>
                        <CardTextSection className="block uht-btn">У<br />{position.uhtQuant}</CardTextSection>
                        <CardButton>!</CardButton>
                    </CardListItem>
                ))}
            </CardList>
            <CardList>
                <CardListItem>
                    <CardTextSection onClick={onClickHeandlerBack}>‹‹‹ к списку складов</CardTextSection>
                </CardListItem>
            </CardList>

        </div>
    )
}
