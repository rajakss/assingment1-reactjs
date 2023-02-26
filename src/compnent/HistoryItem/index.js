import './index.css'

const HistoryItem = props => {
  const {singleList, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = singleList

  const delete = () => {
    deleteItem(id)
  }

  return (
    <li className="a">
      <p>{timeAccessed}</p>
      <button onClick={deletes}>
        <img src={logoUrl} alt="delete" />
      </button>
      <p>{title}</p>
      <p>{domainUrl}</p>
    </li>
  )
}

export default HistoryItem
