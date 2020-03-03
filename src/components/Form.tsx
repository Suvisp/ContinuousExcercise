import * as React from 'react';

import { Topic } from '../Topic';

export interface IFormProps {
    addTopic: (newtopic: Topic) => void
}
export interface IPersonFormState {
    topic: Topic
}
export default class Form extends React.Component<IFormProps, Topic> {
    constructor(props: IFormProps) {
        super(props);
        this.state = {
            title: "",
            description: "",
            timetomaster:"",
            timespent: "",
            source: "",
            startdate: "",
            inprogress: "",
            completiondate: "",
            id: ""
        }
    }
    
    titleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: ev.target.value });
    }

    descriptionChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ description: ev.target.value });
    }

    timetomasterChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ timetomaster: ev.target.value });
    }

    timespentChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ timespent: ev.target.value });
    }

    sourceChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ source: ev.target.value });
    }

    startdateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ startdate: ev.target.value });
    }

    inprogressChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inprogress: ev.target.value });
    }

    completiondateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ completiondate: ev.target.value });
    }

    newTopic = () => {
        this.props.addTopic(this.state);
    }

    public render() {
        return (
            <div className="form">
            <h3>Create new topic</h3>
            <label htmlFor="tTitle">Title: </label>
            <input className="tTitle" value={this.state.title} onChange={this.titleChange}/>
            <br></br>
            <label htmlFor="tDescription">Description: </label>
            <input className="tDescription" value={this.state.description} onChange={this.descriptionChange}/>
            <br></br>
            <label htmlFor="tTimetomaster">Time to master: </label>
            <input className="tTimetomaster" value={this.state.timetomaster} onChange={this.timetomasterChange}/>
            <br></br>
            <label htmlFor="tSpent">Time spent: </label>
            <input className="tSpent" value={this.state.timespent} onChange={this.timespentChange}/>
            <br></br>
            <label htmlFor="tSource">Source: </label>
            <input className="tSource" value={this.state.source} onChange={this.sourceChange}/>
            <br></br>
            <label htmlFor="tStartdate">Start date: </label>
            <input className="tStartdate" value={this.state.startdate} onChange={this.startdateChange}/>
            <br></br>
            <label htmlFor="tInprogress">In progress: </label>
            <input className="tInprogress" value={this.state.inprogress} onChange={this.inprogressChange}/>
            <br></br>
            <label htmlFor="tCompletiondate">Completion date: </label>
            <input className="tCompletiondate" value={this.state.completiondate} onChange={this.completiondateChange}/>
            <br></br>              
            <input type="button" value="Create new topic" onClick={this.newTopic} />
        </div>
        );
    }
}
