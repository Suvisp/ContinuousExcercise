import * as React from 'react';
import { Link } from 'react-router-dom';
import { IoMdRemove } from 'react-icons/io';
import { Topic } from '../Topic'

export interface ITopicCompoponentProps {
  topic: Topic;
  deleteTopic(id: string): void;
}

export interface ITopicCompoponentState {
}

export default class TopicCompoponent extends React.Component<ITopicCompoponentProps, ITopicCompoponentState> {
  link: string = "";
  constructor(props: ITopicCompoponentProps) {
    super(props);
    this.link = "/edit/" + this.props.topic.id;
    this.state = {
    }
  }

  public render() {

    return (
        <tbody className="topiclist">        
          <tr>
            <td>{this.props.topic.id}</td>
            <td>{this.props.topic.title}</td>
            <td>{this.props.topic.description}</td>
            <td>{this.props.topic.timetomaster}</td>
            <td>{this.props.topic.timespent}</td>
            <td>{this.props.topic.source}</td>
            <td>{this.props.topic.startdate}</td>
            <td>{this.props.topic.inprogress}</td>
            <td>{this.props.topic.completiondate}</td>
            <td><Link to={this.link}>Edit</Link></td>
            <td><button onClick={() => this.props.deleteTopic(this.props.topic.id)}><IoMdRemove /></button></td>
          </tr>
        </tbody>
    );
  }
}
