import { meta } from "../components/constants";
const email = meta.email.split('//').join(' // ');

export function Links() {
	return (
		<>
            <h1 class="text-3xl font-medium mb-5">Socials</h1>
			<p class="text-xl">
				none atm
			</p>
            <br/>
            <h1 class="text-3xl font-medium mb-5">Contact</h1>
			<p class="text-xl">
				Email: <a class="text-brand hover:underline font-bold" href={"mailto:" + meta.email}>{email}</a><br/>
                {/* <a class="text-brand hover:underline font-bold">PGP public key</a> */}
			</p>
		</>
	);
}
