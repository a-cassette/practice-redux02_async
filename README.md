# practice-redux02_async

## purpose
  an practice scripts of asynchronous react-redux application.


## basic function
  When user click search button,
  send params user filled in textbox to connpasAPI.
  When response'd be returned, display it.


## action shapes
  { type: 'FETCH_POSTS_REQUEST' }
  { type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
  { type: 'FETCH_POSTS_SUCCESS', response: { ... } }


## status shapes
  {
	  selectedCategory: 'javascript',
	  posts: {
		  javascript: {
			  isFetching: True,
			  isCached: False,
			  items: []
		  },
		  python: {
			  isFetching: True,
			  isCached: True,
			  lastUpdate: 123456789,
			  items: [ value, value, value... ]
		  }
	  }
  }
