export const buildCellBorder = (coords) => {
    // given coords [y, x]
    // return a styleObject for cell border
    const y = coords[0]
    const x = coords[1]

    let cellBorderStyle = {}

    if (y < 2) {
        cellBorderStyle = {
            borderBottom: '1px solid black'
        }
    }

    if (x < 2) {
        cellBorderStyle = {
            ...cellBorderStyle,
            borderRight: '1px solid black'
        }
    }

    return cellBorderStyle
}