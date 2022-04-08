import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {logout} from '../../redux/auth-reducer';


export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

export const Header = () => {

    const {Header} = Layout;
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<AppStateType, string | null>(state => state.auth.login)

    const dispatch = useDispatch()
    const logoutCallBack = () => {
        dispatch(logout())
    }

    return <Header className="header">
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
                </Menu>
            </Col>

            {isAuth
                ? <><Col span={1}>
                    <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Col>
                    <Col span={5}>
                        <Button onClick={logoutCallBack}>Log out</Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Button>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Col>
            }

        </Row>
    </Header>


    // <header className={s.header}>
    //     <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
    //
    //     <div className={s.loginBlock}>
    //         { props.isAuth
    //             ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
    //             : <NavLink to={'/login'}>Login</NavLink> }
    //     </div>
    // </header>
}


