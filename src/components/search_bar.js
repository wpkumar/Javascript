import React, { Component } from 'react';

/*Function based Components declaration
  const searchbar = () => {
  return <input />;
}*/

//Class based Components
class searchbar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  render(){
    //return <input onChange={this.onInputChange} />; Normal way of declaration
    return (
      <div className="search-bar">
      <input
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchChange(term);
  }

  /*Normal way of declaration
  onInputChange(event){
    console.log(event.target.value);
  }*/
}

export default searchbar;
