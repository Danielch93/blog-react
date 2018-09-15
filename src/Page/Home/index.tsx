import * as React from 'react'
import { Row, Col } from 'react-bootstrap'
// import Menu from './../../Components/Menu/Home'
// import customMenuhome from './../../Assets/testData/menuHome.json'
// import Styled from './../../Components/Styles'

// const { Title, Wrapper } = Styled
export default class Home extends React.Component<{}, {}> {
    render() {
        return (
            <Row>
                <Col xs={12} md={1}>
                    <div style={{ 'border': 'solid'}}><p>aqui</p></div>
                </Col>
                <Col xs={12} md={11}>
                    <div style={{ background: 'blue' }}><p>aqui</p></div>
                </Col>
            </Row>
            //     <Wrapper color={'black'}>
            //     Wrapper
            // </Wrapper>
            // <Menu options={customMenuhome} />
            // <Button active={true}>Default</Button>
            // <div style={{ background: 'red' }}>
            //     <Title align={'center'} color={'blue'} fontSize={2.5}>Home</Title>
            //     <Title align={'center'} color={'blue'} fontSize={1}>Subtitle with params</Title>
            //     <Title>Subtitle without params</Title>
            // </div>
        )
    }
}