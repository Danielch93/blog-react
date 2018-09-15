import styled from 'styled-components'
const h1 = (styles: any) => {
    return `color: ${styles.color}
            text-align: ${styles.align}
            font-size: ${styles.fontSize}em`
}
const section = (styles: any) => {
    return `background: ${styles.color}
            `
}

export default {
    'Title': styled.h1`${(props: IPropStyles) => h1(props)}`,
    'Wrapper': styled.section`${(props: any) => section(props)}`
}
