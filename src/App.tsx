import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopicComponent from './components/TopicComponent';
import { Topic } from './Topic'
import List from './components/List'
import Form from './components/Form';
import { getAll, createTopic, deleteTopic } from './restclient'


export interface IAppProps {
}

export interface IAppState {
  topic: Topic[]
}

export class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      topic: []
    }
  }

  componentDidMount = () => {
    this.updateView();
  }

  updateView = async () => {
    let data = await getAll();
    this.setState({ topic: data.data })
  }

  addTopic = async (t: Topic) => {
    let createdTopic:Topic = await createTopic(t);
    console.dir(createdTopic)
      this.updateView();
  }

deleteTopic= async (id:string) => {
  console.log(id);
  let deletedTopic:Topic = await deleteTopic(id);
    console.dir(deletedTopic);
    this.updateView();
  }

  public render() {
    return (
      <div className="App">
        <Form addTopic={this.addTopic} />
        <List topic={this.state.topic} deleteTopic={this.deleteTopic}/>
      </div>
    );
  }
}


export default App;