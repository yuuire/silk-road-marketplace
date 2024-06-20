import logo from "../assets/Silk_Road_Logo.png";
import icon from "../assets/dreadpirateroberts.png";
import { meta } from "./constants";

export function Header() {
	return (
		<header class="header-separator flex pt-2 pb-1 items-center">
			<a href="/"><img class="w-28 ml-3 mr-3" src={logo} alt="logo"/></a>
			<a href="/">
				<div>
					<h1 class="font-bold text-5xl title-shadow text-gray font-sans">Silk Road</h1>
					<h3 class="text-[#99999A] font-bold italic text-2xl font-sans">anonymous market</h3>
				</div>
			</a>
			<div class="flex flex-col gap-3 flex-1 ml-20">
				<div class="relative flex items-center border-b-2 border-b-neutral-200">
					<a class="text-brand text-xl cursor-not-allowed">messages <b>0</b></a>
					<div class="w-[2px] h-5 bg-neutral-200 mx-3"></div>
					<a class="text-brand text-xl cursor-not-allowed">orders <b>0</b></a>
					<div class="w-[2px] h-5 bg-neutral-200 mx-3"></div>
					<a class="text-brand text-xl cursor-not-allowed">account <b>&#8383;0.000</b></a>
					<div class="flex flex-col ml-auto mr-[-15px]">
						<a href={meta.guide}>
							<p class="text-end text-neutral-400 text-md">a few guides from</p>
							<p class="text-neutral-800 text-md">the Dread Pirate Roberts</p>
						</a>
					</div>
					<img class="w-[110px]" src={icon} alt="icon"/>
				</div>
				<div class="flex items-center">
					<label class="text-gray-dark text-[20px] font-bold mr-[20px]">Search</label>
					<input class="search-bar w-1/2 background-white-secondary text-gray-dark text-[20px] border-[1px] border-gray-light px-3 py-2 disabled:cursor-not-allowed" disabled/>
					<input class="text-[20px] rounded-r-lg text-gray-dark px-3 search-button py-2 border-[1px] border-gray-light disabled:cursor-not-allowed" type="button" value="Go" disabled/>

					<div class="flex flex-col items-end ml-auto mr-5">
						<p class="text-xl">Hi, <b>{meta.author}</b></p>
						<div class="flex">
							<a class="text-brand italic cursor-not-allowed">settings</a>
							<p class="text-brand italic font-medium mx-2">-</p>
							<a class="text-brand italic cursor-not-allowed">logout</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
