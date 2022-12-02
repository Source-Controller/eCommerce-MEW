import {
  REQUEST_CREATE_WISHLIST,
  SUCCESS_CREATE_WISHLIST,
  FAIL_CREATE_WISHLIST,
  REQUEST_GET_WISHLIST,
  SUCCESS_GET_WISHLIST,
  FAIL_GET_WISHLIST,
  SUCCESS_DELETE_WISH,
  REQUEST_DELETE_WISH,
  FAIL_DELETE_WISH,
  CLEAR_ERRORS,
} from "../constants/wishlistConstant";

export const create_wishlist_reducer = (state = { wishlist: {} }, action) => {
  switch (action.type) {
    case REQUEST_CREATE_WISHLIST:
      return {
        loading: true,
      };
    case SUCCESS_CREATE_WISHLIST:
      return {
        loading: false,
        wishlist: action.payload,
      };
    case FAIL_CREATE_WISHLIST:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const get_wishlist_reducer = (state = { wishlist: {} }, action) => {
  switch (action.type) {
    case REQUEST_GET_WISHLIST:
      return {
        loading: true,
      };
    case SUCCESS_GET_WISHLIST:
      return {
        loading: false,
        wishlist: action.payload,
      };
    case FAIL_GET_WISHLIST:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const delete_wish_reducer = (state = { deletewish: {} }, action) => {
  switch (action.type) {
    case SUCCESS_DELETE_WISH:
      return {
        loading: true,
      };
    case REQUEST_DELETE_WISH:
      return {
        loading: false,
        deletewish: action.payload,
      };
    case FAIL_DELETE_WISH:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
