import { meta } from "../components/constants";
const email = meta.email.split('//').join(' // ');

export function Home() {
	return (
		<>
			<h1 class="text-3xl font-medium mb-5">hey.</h1>
			<p class="text-xl">
				I'm yuuire, I'm building a better internet where privacy is the default.<br/><br/>
				I believe in privacy, freedom and free speech. I created <a class="text-brand hover:underline font-bold" href={meta.guide}>a guide to securing your digital life and protecting your privacy</a> which I constantly update.
				I also have my own <a class="text-brand hover:underline font-bold" href={"https://blog." + meta.plainurl}>blog</a> where I talk about a variety of stuff - from privacy and technology to self-development 🏋️
			</p>
			<br/>
			<p class="text-xl">
				To contact me, see the <a class="text-brand hover:underline font-bold" href="/links#contact">links</a> page or send an e-mail to <a class="text-brand hover:underline font-bold" href={"mailto:" + meta.email}>{email}</a>
			</p>
		</>
	);
}
