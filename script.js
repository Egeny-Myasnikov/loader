

const title = document.querySelector('h1')
const loaderElement = document.querySelector('.loader')
const btnIncrease = document.querySelector('.js-btn-increase')
const btnReduce = document.querySelector('.js-btn-reduce')
const btnTitleSize = document.querySelector('.js-btn-title-size')
const btnLoaderSize = document.querySelector('.js-btn-loader-size')

const initialTargetChangeSize = 'loader'

let targetChangeSize = initialTargetChangeSize




const cangeSize = ({ changedElement, initialSize, element, btnIncrease, btnReduce }) => {
    let size = initialSize
    const changeSize = (size) => {
        element.style.cssText = `--${changedElement}Size:${size}px`
    }

    btnIncrease.addEventListener('click', (e) => {
        e.preventDefault()
        size++
        changeSize(size)
    })
    btnReduce.addEventListener('click', (e) => {
        e.preventDefault()
        size--
        changeSize(size)
    })
    changeSize(size)
}






const loader = () => {
    const loader = document.querySelector('.loader')
    const circle = document.querySelector('.circle')
    const dots = document.querySelector('.dots')

    let state = false

    const playAnimation = (state) => {
        circle.style.animationPlayState = state
        dots.style.animationPlayState = state
    }

    loader.addEventListener('click', () => {
        state = !state
        state ? playAnimation('paused') : playAnimation('running')
    })
}

loader()

btnTitleSize.addEventListener('click', () => {
    targetChangeSize = 'title'
    cangeSize({
        changedElement: 'title',
        initialSize: 22,
        element: title,
        btnIncrease,
        btnReduce
    })
})
btnLoaderSize.addEventListener('click', () => {
    targetChangeSize = 'loader'
    cangeSize({
        changedElement: 'loader',
        initialSize: 40,
        element: loaderElement,
        btnIncrease,
        btnReduce
    })
})



