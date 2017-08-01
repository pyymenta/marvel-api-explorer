import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Home from '../views/home';
import { charactersGet } from '../actions/characters';
import { comicsGet } from '../actions/comics';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import pagination from '../actions/pagination';

function mapStateToProps(store) {
  return {
    error: store.error,
    fetching: store.fetching,
    filter: store.filter,
    search: store.search,
    pagination: store.pagination,
    data: store.data
  };
}

const mapDispatchToProps = (dispatch, store) => {
  return {
    errorClear: (props) => {
      dispatch(fetchingError(''));
    },
    searchAction: (val) => {
      dispatch(search(val));
      dispatch(pagination({ current: 1, total: 0, pages: [] }));
      dispatch(fetching(true));
    },
    filterAction: (val) => {      
      dispatch(filter(val));
      dispatch(pagination({ current: 1, total: 0, pages: [] }));
      dispatch(fetching(true));
    },
    fetchAction: (props) => {
      const { type, page } = store.match.params;
      const { total } = props.pagination;
      dispatch(fetching(true));

      if (props.filter === 'characters') {
        dispatch(charactersGet(Object.assign({}, { page, total, orderBy: 'name', nameStartsWith: props.search })));
      } else {
        dispatch(comicsGet(Object.assign({}, { page, total, orderBy: 'title', titleStartsWith: props.search })));
      }
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
