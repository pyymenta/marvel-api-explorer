import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserHistory } from 'react-router';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
 
  //this.props.paginationAction(this.props);
//   if(this.props.pagination.current !== prevProps.pagination.current) {
// console.log('componentDidUpdate', this.props, prevProps);
// this.props.paginationAction(this.props);
//   }
    // if (!isNaN(this.props.match.params.page)) {
     
    //   if (this.props.match.params.page !== prevProps.match.params.page) {
    //     if (this.props.pagination.current !== this.props.match.params.page) {
    //       this.props.paginationAction(this.props);
    //     }
    //   }
    // }
  }

  hasQueryString(search) {
    if (search) {
      return search;
    } else {
      return '';
    }
  }
  render() {
    let next = '';
    let prev = '';

    if (this.props.pagination.next) {
      next = <NavLink strict className="link" to={{ pathname: `/${this.props.filter}/${Number(this.props.pagination.current) + 1}`, search: `${this.hasQueryString(this.props.location.search)}` }} key={'next'} >
        <span>next</span>
      </NavLink>
    }
    if (this.props.pagination.prev) {
      prev = <NavLink strict className="link" to={{ pathname: `/${this.props.filter}/${Number(this.props.pagination.current) - 1}`, search: `${this.hasQueryString(this.props.location.search)}` }} key={'prev'} >
        <span>prev</span>
      </NavLink>
    }

    return (
      <div className="pagination">
        {prev}
        {
          this.props.pagination.pages.map((data, index) => {
            return <NavLink strict className="link" to={{
              pathname: `/${this.props.filter}/${data + 1}`, search: `${this.hasQueryString(this.props.location.search)}`
            }} key={data + 1} >
              <span>{data + 1}</span>
            </NavLink>
          })
        }
        {next}
      </div>
    );
  }
}
Pagination.propTypes = {
  paginationAction: React.PropTypes.func,
  pagination: React.PropTypes.any,
  location: React.PropTypes.object,
  filter: React.PropTypes.any,
  match: React.PropTypes.object,
}
export default Pagination;
