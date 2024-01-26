import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
	return (
		<div className="bg-orange-500 h-24 flex justify-center items-center mb-16">
			<h1 className="text-4xl text-white">Calculator</h1>
		</div>
	);
};
const Calculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleEvaluation = (value) => {
		setInput((prevInput) => prevInput + value);
	};
	const handleClear = () => {
		setInput("");
		setResult("");
	};
	const handleOneClear = () => {
		setInput((prevInput) => prevInput.slice(0, -1));
		setResult("");
	};
	const handleResult = (value) => {
		try {
			setResult(eval(input).toString());
		} catch (error) {
			setResult(error);
		}
	};
	return (
		<div className="flex flex-col  justify-center items-center w-[360px] m-auto p-4 ">
			<input
				className=" border-2 border-black h-14 w-full text-right text-2xl p-4 bg-black  text-white opacity-85"
				type="text"
				value={input}
				readOnly
			></input>
			<div className=" w-full h-12 bg-orange-300 text-black text-2xl text-right p-3 border-b-2 border-gray-200 font-bold">
				{result}
			</div>
			<div className="button-box  bg-orange-300 py-4 w-full flex flex-col justify-center items-center space-y-3">
				<div className="row1 flex space-x-3 ">
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("1")}
					>
						1
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("2")}
					>
						2
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("3")}
					>
						3
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("+")}
					>
						+
					</button>
				</div>
				<div className="row2 flex space-x-3 ">
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("4")}
					>
						4
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("5")}
					>
						5
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("6")}
					>
						6
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("-")}
					>
						-
					</button>
				</div>
				<div className="row3 flex space-x-3 ">
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("7")}
					>
						7
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("8")}
					>
						8
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("9")}
					>
						9
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("*")}
					>
						*
					</button>
				</div>
				<div className="row4 flex space-x-3  ">
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation("0")}
					>
						0
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("00")}
					>
						00
					</button>
					<button
						className="bg-orange-600 text-white px-6 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-700"
						onClick={() => handleEvaluation(".")}
					>
						.
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={() => handleEvaluation("/")}
					>
						/
					</button>
				</div>
				<div className="row5 flex space-x-3 ">
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-14 h-14 hover:bg-orange-500"
						onClick={handleOneClear}
					>
						C
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-xl rounded-lg w-20 h-14 hover:bg-orange-700"
						onClick={handleClear}
					>
						AC
					</button>
					<button
						className="bg-orange-600 text-white px-5 py-2 text-2xl rounded-lg w-24 h-14 hover:bg-orange-500"
						onClick={handleResult}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<>
			<Header />
			<Calculator />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
