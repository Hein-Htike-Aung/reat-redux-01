import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';

const App = () => {
	const counter = useSelector((state) => state.counter);
	const logged = useSelector((state) => state.logged);
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<h1>Counter : {counter} </h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>

			<h3>Info shouldn't see</h3>
			{logged && (
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus inventore, delectus magni non iusto iure magnam saepe,
					excepturi possimus sint incidunt quae aliquid ratione? Quaerat rem
					eius molestias exercitationem nesciunt.
				</div>
			)}
		</div>
	);
};

export default App;
