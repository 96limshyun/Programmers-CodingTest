function solution(numbers, hand) {
    const userHand = hand;
    const phoneMap = [[1,2,3], [4,5,6], [7,8,9], ["*", 0, "#"]]
    const handLocation = {left: [3, 0], right: [3, 2]}
    let result = ""

    const getNumberLocation = (num) => {
        for (let indexY = 0; indexY < phoneMap.length; indexY++) {
            const indexX = phoneMap[indexY].findIndex(cur => cur === num)
            if(indexX !== -1) return [indexY, indexX]
        }
    }

    const calculateLocation = (hand, numLocation) => {
        return Math.abs(hand[0] - numLocation[0]) + Math.abs(hand[1] - numLocation[1])
    }

    const changeHand = (numberLocation) => {
        const [y, x] = numberLocation
        switch(x) {
            case 0:
                handLocation.left = [y,x]
                result += "L"
                break
            case 2:
                handLocation.right = [y,x]
                result += "R"
                break
            case 1:
                const leftAbs = calculateLocation(handLocation.left, numberLocation)
                const rightAbs = calculateLocation(handLocation.right, numberLocation)
                if(leftAbs < rightAbs || leftAbs === rightAbs && userHand === "left") {
                    handLocation.left = [y,x]
                    result += "L"
                } else if (leftAbs > rightAbs || leftAbs === rightAbs && userHand === "right") {
                    handLocation.right = [y,x]
                    result += "R"
                }
                break;
            default:
                break
        }
    }
    

    numbers.forEach(cur => {
        const numberLocation = getNumberLocation(cur)
        changeHand(numberLocation)
        
    })
    return result
}