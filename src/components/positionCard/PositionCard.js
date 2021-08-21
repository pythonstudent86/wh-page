import { useState, useEffect } from 'react'
import {
    CardList,
    CardListItem,
    CardTextSection,
    CardButton
} from 'components/positionCard/PositionCard.style'
import filterArr from 'utils/filterArr'


export default function PositionCard({ data, locationFilter, onClickHeandlerBack }) {
    const [filteredArr, setFilteredArr] = useState([])
    const [showPosition, setShowPositions] = useState(false)

    useEffect(() => {
        setFilteredArr(filterArr(locationFilter, data))
    }, [data, locationFilter])

    useEffect(() => {
        if (filteredArr) {
            setShowPositions(true);
        }
    }, [filteredArr])

    return (
        <div>
            <CardList>
                {showPosition && filteredArr.map(position => (
                    <CardListItem
                        key={position.num}
                        cargo={position.cargo}
                    >
                        <CardTextSection
                            onClick={(e) => console.log(e)}
                            className="text">{position.name}</CardTextSection>
                        <CardTextSection
                            changeQ={position.changeQ}
                            className="block quantity"
                        >{position.quantity}</CardTextSection>
                        <CardTextSection
                            className="block uht-btn"
                            uhtishka={position.uhtishka}>У<br />{position.uhtQuant}</CardTextSection>
                        <CardButton>!</CardButton>
                    </CardListItem>
                ))}
            </CardList>
            <CardList>
                <CardListItem>
                    <CardTextSection
                        onClick={onClickHeandlerBack}
                    >‹‹‹ к списку складов</CardTextSection>
                </CardListItem>
            </CardList>

        </div >
    )
}
