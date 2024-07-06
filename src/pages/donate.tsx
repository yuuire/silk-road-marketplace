import { meta } from "../components/constants";

export function Donate() {
	return (
		<>
            <h1 class="text-xl">
                Hey there!
                By sponsoring me you support my work and help me pay for costs like domain, hosting and also life expenses and allow me to spend more time on my projects!
            </h1>
            <br/>
            <h1 class="text-3xl font-medium mb-5">Cryptocurrencies</h1>
            <p class="text-xl py-3">
				Monero (XMR): <br/><code class="font-bold">4A8VEJqofjSdF6GPQxxLDNWvDMxXrvRBy2q1QD8Gg1xu4cjRMPR9M4T1kbY8yfsxZLJnunCMgXt8oaxDoR6HohYVLYqAiA2</code>
			</p>
			<p class="text-xl">
                Bitcoin (BTC): <br/><code class="font-bold">bc1qr9dpwnagu4tt52wwf5hwyllqa4medr65mrkvhz</code>
            </p>
            <br/>
            <h1 class="text-3xl font-medium mb-5">Other</h1>
			<p class="text-xl">
				<a class="text-brand font-bold" href={meta.sponsor}>Liberapay (account required)</a> - all funds are going to <a class="text-brand font-bold" href={meta.guide}>guide</a>
			</p>
		</>
	);
}
