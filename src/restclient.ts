import Axios from 'axios';
import { Topic } from './Topic';

let getAll = async () => {
    let result = await Axios.get('http://localhost:3000/api/topic')
    return result;
}

let getTopic = async (id: string):Promise<Topic> => {
    let getOne = await Axios.get<Topic>('http://localhost:3000/api/topic/' + id)
    return getOne.data;
  }

let createTopic= async (newtopic: Topic):Promise<Topic> => {
    let newOne = await Axios.post<Topic>('http://localhost:3000/api/topic', newtopic)
    return newOne.data
}

let deleteTopic = async (id: string):Promise<Topic> => {
    let delOne = await Axios.delete<Topic>('http://localhost:3000/api/topic/' + id)
    return delOne.data;
}

let updateTopics = async (topic: Topic):Promise<Topic> => {
    let res = await Axios.put('http://localhost:3000/api/topic/' + topic.id, topic)
    return res.data;
}

export { getAll, getTopic, createTopic, deleteTopic, updateTopics }