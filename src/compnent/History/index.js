import {Component} from 'react'

import HistoryItem from '../HistoryItem/index.js'

class History extends Component {
    const {listItems} = this.props

  state = {searchName:'',lists:listItems}

  change = event => {
    this.setState({searchName: event.target.value})
  }

  deleteItem=(id)=>{
      const{lists}=this.state
      const rr=lists.filter(each=>
        each.id!==id
        )
        this.setState({lists:rr})

  }

  render() {

    const {searchName,lists} = this.state

    const result = lists.filter(each =>
      each.title.toLowerCase().includes(searchName.toLowerCase()),
    )

    return (
      <div>
        <div className="a">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search history"
            onChange={this.change}
          />
        </div>
        <ul>
          {result.map(each => (
            <HistoryItem singleList={each} key={each.id} deleteItem={this.deleteItem}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default History
