import * as React from 'react';
import { Topic } from '../Topic'
import TopicComponent from './TopicComponent'

export interface IListProps {
  topic: Topic[]
  deleteTopic(id: string): void;
}

export interface IListState {
}

export default class List extends React.Component<IListProps, IListState> {
  constructor(props: IListProps) {
    super(props);
    this.state = {
    }
  }

  public render() {
    var topiclist = this.props.topic.map((t, ind) => {
      return (<TopicComponent topic={t} key={t.id} deleteTopic={this.props.deleteTopic} />)
    })
    return (
      <table className="topiclist">
        <thead>
          <tr>
            <th>Topic id</th><th>Title</th><th>Desription</th><th>Time to master</th><th>Time spent</th><th>Source</th><th>Start date</th><th>In progress</th><th>Completion date</th><th>Edit</th><th>✓</th>
          </tr>
        </thead>
        <tbody>
          {topiclist}
        </tbody>
        <tbody>
        </tbody>
      </table>
    );
  }
}   