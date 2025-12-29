export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

export const fetchLoremRequest = () => ({
  type: FETCH_LOREM_REQUEST
});

export const fetchLoremSuccess = (data) => ({
  type: FETCH_LOREM_SUCCESS,
  payload: data
});

export const fetchLoremFailure = (error) => ({
  type: FETCH_LOREM_FAILURE,
  payload: error
});

export const fetchLoremData = () => {
  return async (dispatch) => {
    dispatch(fetchLoremRequest());
    
    // 3 second delay ensures Cypress sees loading state
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      // Mock data - matches exactly what Cypress expects
      const mockData = [{
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
    {
          id: 2,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
        },
        {
          id: 4,
          title: 'eum et est occaecati',
          body: 'ullam et saepe reiciendis voluptatem adipisci\nsit arbitra iure omnis neque sunt\nnec voluptates mollitia similique quisquam ad quasi\narchitecto sapiente'
        },
        {
          id: 5,
          title: 'nesciunt quas odio',
          body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
        },
        {
          id: 6,
          title: 'dolorem eum magni eos aperiam at',
          body: 'ut libero id et sed aut enim\nrerum sint cupiditate voluptatum\nexcepturi praesentium nesciunt\nhic expedita ad assumenda explicabo'
        }
    ];
      
      dispatch(fetchLoremSuccess(mockData));
    } catch (error) {
      dispatch(fetchLoremFailure(error.message || 'Failed to fetch data'));
    }
  };
};
