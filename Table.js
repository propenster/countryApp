import React, {Component} from 'react'
class Table extends Component{
const TableHeader = ()=> {
return
 (
<thead>
<th>Code</th>
<th>Name</th>
<th>Population</th>
</thead>
)
}
const TableBody = (props)=>{
const rows = props.countryData.map((row, index)=>{
return(
<tr key={index}>
<td>{row.code}</td>
<td>{row.name}</td>
<td>{row.population}</td>
</tr>
)
}
return <tbody>{rows}</tbody>
}
render(){
const {countryData} = this.props
return(
<table>
<TableHeader />
<TableBody countryData={countryData} />
</table>


)
}

}
export default Table
