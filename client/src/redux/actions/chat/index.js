import api from '../../../api'
import { store } from '../../../store';
import history from "../../../history";
import { socket } from "../../../socket";
import {
  DISPLAY_CHATROOMS,
  NEW_MESSAGE,
  LOAD_MESSAGES,
  CLOSE_CHAT
} from '../../types'

export const createChatRoom = (name, userId) => async dispatch => {
  try {
    const { data } = await api.post(
      '/create-chatRoom',
      { name, createdBy: userId }
    )
    dispatch({
      type: DISPLAY_CHATROOMS,
      payload: data.chats
    })
    history.push(`/chats/${data.chats._id}`)
  } catch (e) {
    dispatch({
      type: 'ERROR',
      error: 'Invalid Name'
    })
  }
}

export const displayChatRooms = () => async dispatch => {
  try {
    const { data } = await api.get('/chats');

    dispatch({
      type: DISPLAY_CHATROOMS,
      defaultChat: data.chats[0]._id,
      payload: {...data.chats}
    })
  } catch(e) {
    console.log(e)
  }
}

export const joinChat = (chatId, userName) => async dispatch => {
  console.log('username', userName)
  socket.emit('join', { room: chatId, userName:userName }, (room) => {
    console.log(`connected to ${room}`)
  })
}

export const closeChat = (chatId) => async dispatch => {
  socket.emit('leave', { room: chatId })
  dispatch({
    type: CLOSE_CHAT,
    payload: chatId
  })
}


export const fetchMessages = (chatId) => async dispatch => {
  console.log(chatId)
  const { data } = await api.get(`/messages/${chatId}`);
  dispatch({ type: LOAD_MESSAGES, payload: { chatId: data.chatId, messages: data.messages }})
}

const dispatchMessage = (messageType, message) => {
  console.log(message)
  return { type: messageType, payload: {chatId: message.chatId, message: message} }
}

export const sendMessage = ({ message, chatId, userId, author }) => async dispatch => {
  console.log(`[MESSAGE]: ${message} ==> [CHAT]: ${chatId} ==> [FROM]: ${author}`);
  socket.emit('message', {message, chatId, userId, author})
}

socket.on('return-message', returnMsg => {
  console.log('rtn', returnMsg)
  store.dispatch(dispatchMessage('NEW_MESSAGE', returnMsg))
})

socket.on('welcome-message', ( userName ) => console.log(userName))

socket.on('bot-join-message', (userName) => console.log(userName))