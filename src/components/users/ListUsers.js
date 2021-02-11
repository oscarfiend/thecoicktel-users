import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import User from "./User";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";
import {useSelector,useDispatch} from 'react-redux'
import { getUsers } from "../../redux/actions/userActions";
import useColor from "../../hooks/useColor";
import ColorPicker from "../ui/colorPicker";

const Container = styled.div`
  margin-top: 5vw;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Table=styled.table`
    width: 100%;
  color: #000000;
  font-size: calc(12px + 10 * ((100vw - 320px) / 680));
  font-weight: 400;
  font-family: Anybodythink;
`

const Title=styled.th`
 color:#fff;
  text-align: left;
  padding:0.7rem;
  font-size: calc(20px + 10 * ((100vw - 320px) / 680));
  font-family: Anybody;
`

const Button = styled.button`
  font-size: calc(15px + 8 * ((100vw - 320px) / 680));
  width: 22vw;
  margin-bottom: 5vw;
  align-self: flex-start;
  font-family: Anybodyblack;
  padding:calc(15px + 5 * ((100vw - 320px) / 680));
  border-radius: 0;

  @media(max-width:600px){
    width: 100%;
  }

  &:hover {
    background-color: #b1b2bb;
    transition: all 0.3s ease 0s;
    transform: none;
  }
`;

const ListUsers = () => {

  const [color,changeColor]=useColor()

  const dispatch = useDispatch()

  const {users,loading,error} = useSelector(state => state)

  const refUsers = useRef();

  useEffect(() => {
    if(users.length!==0){
      refUsers.current.scrollIntoView()
    }
  }, [users])

  return (
    <Container>
      <Button ref={refUsers} onClick={()=>dispatch(getUsers(1))}>Get Users</Button>
      {loading && <Spinner />}
      {error && <h2 style={{textAlign:"center"}}>Users have not been loaded</h2>}
      {users.length !== 0 && (
        <div >
          <Table>
            <thead style={{background:color}}>
              <tr >
                <Title>ID</Title>
                <Title>NAME</Title>
                <Title>EMAIL<ColorPicker color={color} changeColor={changeColor}></ColorPicker></Title>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <User 
                user={user} 
                key={user.id}
                />
              ))}
            </tbody>
          </Table>
        <Pagination/>
        </div>
      )}
    </Container>
  );
};

export default ListUsers;
