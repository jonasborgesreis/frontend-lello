import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import spinner from '../../images/spinner.gif'
import ReactLogo from '../../images/logo-react.svg'
import { getAllUsers } from '../../services/api'
import './style.css'

export default function ListUsersReact () {
  const [loading, setLoading] = useState(true)
  const [reactData, setReactData] = useState([])
  const [userData, setUserData] = useState({})
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    setUserData({})
  }
  const handleShow = () => setShow(true)

  async function fetchUser (user) {
    const login = user
    const url = `https://api.github.com/users/${login}`
    const response = await getAllUsers(url)
    const userFormat = {
      login: response.login,
      name: response.name,
      followers: response.followers,
      createdAt: response.created_at,
      publicRepos: response.public_repos
    }
    setUserData(userFormat)
  }

  useEffect(() => {
    async function fetchData () {
      const url = 'https://api.github.com/orgs/facebook/public_members'
      const response = await getAllUsers(url)
      setReactData(response)
      console.log(reactData)
      setLoading(false)
    }
    fetchData()
  }, [])

  const filterReactData = reactData.filter(item => {
    return item.login.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="container-list-user-react">
      { loading
        ? <div className="main-loading">
          <span><img src={spinner}/></span>
          <h1 style={{ textAlign: 'center', fontSize: '20px' }}>
          Carregando Perfis...
          </h1>
        </div>
        : (<div>
          <h1>React JS</h1>
          <div className="logo-js">
            <img src={ReactLogo} />
          </div>
          <div className="box-search-member">
            <input
              type="text"
              onChange={e => setSearch(e.target.value)}
              className="search-member"
              placeholder="Digite o perfil"
            />
          </div>
          <ul className="container-user-react">
            {filterReactData.map(user => {
              return (
                <li key={user.login}>
                  <span className="img-avatar"><img src={user.avatar_url} /></span>
                  <span className="tit-user">{user.login}</span>
                  <span className="link-user">
                    <button onClick={
                      () => {
                        fetchUser(user.login)
                        handleShow()
                      }
                    }
                    className="btn-open-modal btn-modal-react"
                    >saiba mais</button>
                  </span>
                </li>
              )
            })
            }
          </ul>
          <Link to="/" className="btn-react">Voltar</Link>
          <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                {userData?.login}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row>
                  <Col xs={12} md={12}>
                    Nome: {userData?.name}<br />
                    Data Início: {userData?.createdAt}<br />
                    Nº Seguidores: {userData?.followers}<br />
                    Repositórios: {userData?.publicRepos}<br />
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Fechar</Button>
            </Modal.Footer>
          </Modal>
        </div>
        )
      }
    </div>
  )
}
