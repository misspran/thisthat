import axios from 'axios';

export const FETCH_THIS_THAT = 'FETCH_THIS_THAT';

export const fetch = thisthat => ({ type: FETCH_THIS_THAT, thisthat });
export const intitialState = [];


export const fetchthisthat = () => (dispatch) => {
        axios.get('https://misspran.github.io/thisthat/thisthat.json')
        .then(res => {
          let randomThis = res.data.this[Math.floor(Math.random()*res.data.this.length)]
          let randomThat = res.data.that[Math.floor(Math.random()*res.data.that.length)]
          return {this: randomThis, that: randomThat}
        })
        .then(res => dispatch(fetch(res)))
        .catch(err => console.error('Unsuccesful', err));
};



export default function reducer(thisandthat = intitialState, action) {
    switch (action.type) {
      case FETCH_THIS_THAT:
        return action.thisthat;
      default:
        return thisandthat;
    }
}