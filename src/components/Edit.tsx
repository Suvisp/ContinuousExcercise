import * as React from 'react';
import { Topic } from '../Topic'
import { updateTopics, getTopic } from '../restclient'

export interface IEditProps {
    match: any;
    history: any;
}

export interface IEditState {
    topic: Topic;
    id: string;
}

export default class Edit extends React.Component<IEditProps, IEditState> {
    constructor(props: IEditProps) {
        super(props);
        const id = this.props.match.params["id"];
        this.state = { topic: { id: "", title: '', description: '', timetomaster: "", timespent: "", source: '', startdate: '', inprogress: '', completiondate: ''}, id: id };
    }
    componentDidMount = async () => {
        console.log(this.state.id)
        let data = await getTopic(this.state.id);
        this.setState({ topic: data })
}

titleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let title: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, title: title}}
    })
}

descriptionChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let description: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, description: description}}
    })
}

timetomasterChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let timetomaster: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, timetomaster: timetomaster}}
    })
}

timespentChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let timespent: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, timespent: timespent}}
    })
}

sourceChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let source: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, source: source}}
    })
}

startdateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let startdate: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, startdate: startdate}}
    })
}

inprogressChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let inprogress: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, inprogress: inprogress}}
    })
}

completiondateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let completiondate: string = ev.target.value
    this.setState(prevState => { 
        return { topic: {...prevState.topic, completiondate: completiondate}}
    })
}

update=()=>{
    updateTopics(this.state.topic).then(()=>{
      this.props.history.push("/")
    })
  }

  public render() {
    return (
        <div>
            <h2>Edit Topic</h2>
            Title: <input className="tTitle" value={this.state.topic.title} onChange={this.titleChange}/>
            <br></br>
            Description: <input className="tDescription" value={this.state.topic.description} onChange={this.descriptionChange}/>
            <br></br>
            Time to master: <input className="tTimetomaster" value={this.state.topic.timetomaster} onChange={this.timetomasterChange}/>
            <br></br>
            Time spent: <input className="tSpent" value={this.state.topic.timespent} onChange={this.timespentChange}/>
            <br></br> 
            Source: <input className="tSource" value={this.state.topic.source} onChange={this.sourceChange}/>
            <br></br>
            Start date: <input className="tStartdate" value={this.state.topic.startdate} onChange={this.startdateChange}/>
            <br></br>
            In progress: <input className="tInprogress" value={this.state.topic.inprogress} onChange={this.inprogressChange}/>
            <br></br>
            Completion date: <input className="tCompletiondate" value={this.state.topic.completiondate} onChange={this.completiondateChange}/>
            <br></br> 
            <button onClick={this.update}>Update</button>
        </div>
    );
}
}
